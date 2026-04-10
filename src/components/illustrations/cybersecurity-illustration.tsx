'use client'

import { useCallback, useState } from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import Image from 'next/image'
import { MinesweeperGrid } from '@/components/illustrations/minesweeper-grid'

const CardDecorator = ({ className }: { className?: string }) => (
    <>
        <span className={cn('absolute -left-px -top-px block size-2 rounded-tl border-l-[1.5px] border-t-[1.5px] border-white', className)}></span>
        <span className={cn('absolute -right-px -top-px block size-2 rounded-tr border-r-[1.5px] border-t-[1.5px] border-white', className)}></span>
        <span className={cn('absolute -bottom-px -left-px block size-2 rounded-bl border-b-[1.5px] border-l-[1.5px] border-white', className)}></span>
        <span className={cn('absolute -bottom-px -right-px block size-2 rounded-br border-b-[1.5px] border-r-[1.5px] border-white', className)}></span>
    </>
)

export const CybersecurityIllustration = () => {
    const [breachDetected, setBreachDetected] = useState(false)

    const handleGameOver = useCallback(() => {
        setBreachDetected(true)
    }, [])

    const handleReset = useCallback(() => {
        setBreachDetected(false)
    }, [])

    return (
        <div className="relative h-full w-full">
            {/* Minesweeper grid fills the background */}
            <MinesweeperGrid onGameOver={handleGameOver} onReset={handleReset} />

            {/* Face scan overlay — centered, non-interactive so clicks pass through to grid */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
                <div
                    aria-hidden
                    className="group relative [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                    <div className="group relative">
                        <div className={cn(
                            'inset-x-17 bg-radial z-1 absolute bottom-1/4 top-1/4 mx-auto rounded border border-white/10 bg-white/15 from-sky-500/25 to-transparent transition-all duration-500',
                            breachDetected && 'from-red-500/25 border-red-500/20'
                        )}>
                            <CardDecorator className={cn('animate-breathing', breachDetected && 'border-red-400')} />
                        </div>
                        <div className="aspect-square size-56">
                            <Image
                                src="https://res.cloudinary.com/dohqjvu9k/image/upload/v1767530872/human-face_kf9mt7.png"
                                alt="Woman face"
                                className="inverted contrast-105 size-full object-cover grayscale"
                                width={224}
                                height={224}
                            />
                        </div>

                        <div className="absolute inset-0 isolate mix-blend-plus-lighter duration-300">
                            <motion.div
                                initial={{ opacity: 0.5, maskSize: '100% 0%' }}
                                animate={{ opacity: 1, maskSize: ['100% 0%', '100% 100%', '100% 500%'] }}
                                transition={{
                                    opacity: { duration: 0.75, delay: 2 },
                                    maskSize: { duration: 5, delay: 2, repeat: Infinity, ease: 'easeInOut' },
                                }}
                                className="mask-[url('https://res.cloudinary.com/dohqjvu9k/image/upload/v1767530871/mask-bg_v7vpk7.png')] mask-no-repeat absolute inset-0 aspect-square size-56 max-w-xs bg-[url('https://res.cloudinary.com/dohqjvu9k/image/upload/v1767530872/human-wire-face_lryi6q.png')] bg-cover bg-[50%_50%] bg-no-repeat group-hover:opacity-95"
                            />
                        </div>

                        {/* BREACH DETECTED overlay */}
                        <div className={cn(
                            'absolute inset-0 flex items-end justify-center pb-4 transition-all duration-500',
                            breachDetected ? 'opacity-100' : 'opacity-0'
                        )}>
                            <div className="rounded-md bg-red-600/90 px-4 py-1.5 shadow-lg shadow-red-500/30 backdrop-blur-sm">
                                <span className="font-mono text-xs font-bold tracking-widest text-white">BREACH DETECTED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CybersecurityIllustration
