'use client'
import { useCallback, useEffect, useRef, useState } from 'react'

// Classic Minesweeper number colors
const NUMBER_COLORS: Record<number, string> = {
    1: '#0000FF',
    2: '#008200',
    3: '#FF0000',
    4: '#000080',
    5: '#800000',
    6: '#008080',
    7: '#000000',
    8: '#808080',
}

const CELL_SIZE = 22
const MINE_COUNT_RATIO = 0.15 // 15% of cells are mines

type CellData = {
    mine: boolean
    revealed: boolean
    flagged: boolean
    adjacentMines: number
}

function createBoard(rows: number, cols: number): CellData[][] {
    const totalCells = rows * cols
    const mineCount = Math.floor(totalCells * MINE_COUNT_RATIO)

    // Create flat array of mine placements
    const mines = new Set<number>()
    // Seeded random for initial board
    let seed = 7919
    const seededRandom = () => {
        seed = (seed * 16807) % 2147483647
        return (seed - 1) / 2147483646
    }
    while (mines.size < mineCount) {
        mines.add(Math.floor(seededRandom() * totalCells))
    }

    // Build board
    const board: CellData[][] = []
    for (let r = 0; r < rows; r++) {
        const row: CellData[] = []
        for (let c = 0; c < cols; c++) {
            row.push({
                mine: mines.has(r * cols + c),
                revealed: false,
                flagged: false,
                adjacentMines: 0,
            })
        }
        board.push(row)
    }

    // Calculate adjacent mine counts
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c].mine) continue
            let count = 0
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    const nr = r + dr
                    const nc = c + dc
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].mine) {
                        count++
                    }
                }
            }
            board[r][c].adjacentMines = count
        }
    }

    return board
}

function cloneBoard(board: CellData[][]): CellData[][] {
    return board.map(row => row.map(cell => ({ ...cell })))
}

function floodFill(board: CellData[][], startR: number, startC: number): CellData[][] {
    const rows = board.length
    const cols = board[0].length
    const newBoard = cloneBoard(board)
    const queue: [number, number][] = [[startR, startC]]
    const visited = new Set<string>()

    while (queue.length > 0) {
        const [r, c] = queue.shift()!
        const key = `${r}-${c}`
        if (visited.has(key)) continue
        visited.add(key)

        if (r < 0 || r >= rows || c < 0 || c >= cols) continue
        if (newBoard[r][c].flagged || newBoard[r][c].mine) continue

        newBoard[r][c].revealed = true

        // If empty cell (0 adjacent mines), expand to neighbors
        if (newBoard[r][c].adjacentMines === 0) {
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (dr === 0 && dc === 0) continue
                    queue.push([r + dr, c + dc])
                }
            }
        }
    }

    return newBoard
}

export function MinesweeperGrid({ onGameOver, onReset }: { onGameOver?: () => void; onReset?: () => void }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [gridSize, setGridSize] = useState<{ rows: number; cols: number } | null>(null)
    const [board, setBoard] = useState<CellData[][] | null>(null)
    const [gameOver, setGameOver] = useState(false)
    const [won, setWon] = useState(false)

    // Measure container and compute grid dimensions
    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const measure = () => {
            const { width, height } = el.getBoundingClientRect()
            const cols = Math.ceil(width / CELL_SIZE) + 2
            const rows = Math.ceil(height / CELL_SIZE) + 2
            setGridSize({ rows, cols })
        }

        measure()
        const observer = new ResizeObserver(measure)
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Create board when grid size is known
    useEffect(() => {
        if (!gridSize) return
        setBoard(createBoard(gridSize.rows, gridSize.cols))
        setGameOver(false)
        setWon(false)
    }, [gridSize])

    // Check win condition
    useEffect(() => {
        if (!board || gameOver) return
        const allNonMinesRevealed = board.every(row =>
            row.every(cell => cell.mine || cell.revealed)
        )
        if (allNonMinesRevealed) setWon(true)
    }, [board, gameOver])

    const handleClick = useCallback((r: number, c: number) => {
        if (!board || gameOver || won) return
        const cell = board[r][c]
        if (cell.revealed || cell.flagged) return

        if (cell.mine) {
            // Game over — reveal all mines
            const newBoard = cloneBoard(board)
            newBoard[r][c].revealed = true
            for (const row of newBoard) {
                for (const c of row) {
                    if (c.mine) c.revealed = true
                }
            }
            setBoard(newBoard)
            setGameOver(true)
            onGameOver?.()
            return
        }

        // Flood fill from this cell
        const newBoard = floodFill(board, r, c)
        setBoard(newBoard)
    }, [board, gameOver, won, onGameOver])

    const handleRightClick = useCallback((e: React.MouseEvent, r: number, c: number) => {
        e.preventDefault()
        if (!board || gameOver || won) return
        const cell = board[r][c]
        if (cell.revealed) return

        const newBoard = cloneBoard(board)
        newBoard[r][c].flagged = !newBoard[r][c].flagged
        setBoard(newBoard)
    }, [board, gameOver, won])

    const resetGame = useCallback(() => {
        if (!gridSize) return
        setBoard(createBoard(gridSize.rows, gridSize.cols))
        setGameOver(false)
        setWon(false)
        onReset?.()
    }, [gridSize, onReset])

    if (!gridSize || !board) {
        return <div ref={containerRef} className="absolute inset-0" />
    }

    const gridWidth = gridSize.cols * CELL_SIZE
    const gridHeight = gridSize.rows * CELL_SIZE

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden" aria-hidden="true">
            {/* Grid layer — transparent */}
            <div className="absolute inset-0" style={{ opacity: 0.4 }}>
                <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${gridSize.cols}, ${CELL_SIZE}px)`,
                    gridTemplateRows: `repeat(${gridSize.rows}, ${CELL_SIZE}px)`,
                    width: gridWidth,
                    height: gridHeight,
                    background: '#C0C0C0',
                }}>
                {board.map((row, r) =>
                    row.map((cell, c) => {
                        const key = `${r}-${c}`

                        if (cell.flagged && !cell.revealed) {
                            return (
                                <div
                                    key={key}
                                    onContextMenu={(e) => handleRightClick(e, r, c)}
                                    style={{
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                        background: '#C0C0C0',
                                        borderTop: '2.5px solid #FFFFFF',
                                        borderLeft: '2.5px solid #FFFFFF',
                                        borderBottom: '2.5px solid #7B7B7B',
                                        borderRight: '2.5px solid #7B7B7B',
                                        boxSizing: 'border-box',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14">
                                        <rect x="6" y="2" width="1.5" height="9" fill="#000" />
                                        <polygon points="7.5,2 13,5 7.5,8" fill="#FF0000" />
                                        <rect x="4" y="10.5" width="6" height="1.5" fill="#000" />
                                    </svg>
                                </div>
                            )
                        }

                        if (!cell.revealed) {
                            return (
                                <div
                                    key={key}
                                    onClick={() => handleClick(r, c)}
                                    onContextMenu={(e) => handleRightClick(e, r, c)}
                                    style={{
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                        background: '#C0C0C0',
                                        borderTop: '2.5px solid #FFFFFF',
                                        borderLeft: '2.5px solid #FFFFFF',
                                        borderBottom: '2.5px solid #7B7B7B',
                                        borderRight: '2.5px solid #7B7B7B',
                                        boxSizing: 'border-box',
                                        cursor: 'pointer',
                                    }}
                                />
                            )
                        }

                        // Revealed mine
                        if (cell.mine) {
                            return (
                                <div
                                    key={key}
                                    style={{
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                        background: gameOver ? '#FF4444' : '#BDBDBD',
                                        borderTop: '1px solid #7B7B7B',
                                        borderLeft: '1px solid #7B7B7B',
                                        borderBottom: '1px solid #FFFFFF',
                                        borderRight: '1px solid #FFFFFF',
                                        boxSizing: 'border-box',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <svg width="16" height="16" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="4.5" fill="#000" />
                                        <line x1="8" y1="1.5" x2="8" y2="14.5" stroke="#000" strokeWidth="1.5" />
                                        <line x1="1.5" y1="8" x2="14.5" y2="8" stroke="#000" strokeWidth="1.5" />
                                        <line x1="3.5" y1="3.5" x2="12.5" y2="12.5" stroke="#000" strokeWidth="1" />
                                        <line x1="12.5" y1="3.5" x2="3.5" y2="12.5" stroke="#000" strokeWidth="1" />
                                        <circle cx="6" cy="6" r="1.5" fill="#FFF" />
                                    </svg>
                                </div>
                            )
                        }

                        // Revealed number or empty
                        return (
                            <div
                                key={key}
                                style={{
                                    width: CELL_SIZE,
                                    height: CELL_SIZE,
                                    background: '#BDBDBD',
                                    borderTop: '1px solid #7B7B7B',
                                    borderLeft: '1px solid #7B7B7B',
                                    borderBottom: '1px solid #FFFFFF',
                                    borderRight: '1px solid #FFFFFF',
                                    boxSizing: 'border-box',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: 13,
                                    fontWeight: 800,
                                    fontFamily: 'monospace',
                                    color: cell.adjacentMines > 0 ? (NUMBER_COLORS[cell.adjacentMines] || '#000') : 'transparent',
                                    lineHeight: 1,
                                }}>
                                {cell.adjacentMines > 0 ? cell.adjacentMines : ''}
                            </div>
                        )
                    })
                )}
                </div>
            </div>
            {/* UI overlays — full opacity, above the grid */}
            {/* Reset button */}
            {(gameOver || won) && (
                <button
                    onClick={resetGame}
                    className="absolute left-3 top-3 z-20 rounded bg-[#C0C0C0] px-2 py-1 font-mono text-xs font-bold shadow-sm"
                    style={{
                        borderTop: '2px solid #FFF',
                        borderLeft: '2px solid #FFF',
                        borderBottom: '2px solid #7B7B7B',
                        borderRight: '2px solid #7B7B7B',
                    }}>
                    {won ? '😎 You Win!' : '💀 Game Over'} — Click to Reset
                </button>
            )}
        </div>
    )
}

export default MinesweeperGrid
