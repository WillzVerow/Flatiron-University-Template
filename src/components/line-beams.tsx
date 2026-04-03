'use client'

import { motion, useReducedMotion } from 'motion/react'

function Beam({
    orientation,
    position,
    delay,
    duration,
}: {
    orientation: 'vertical' | 'horizontal'
    position: string
    delay: number
    duration: number
}) {
    const isVertical = orientation === 'vertical'

    return (
        <motion.div
            className="absolute"
            style={{
                ...(isVertical
                    ? { left: position, top: 0, bottom: 0, width: '1px' }
                    : { top: position, left: 0, right: 0, height: '1px' }),
                overflow: 'hidden',
            }}>
            <motion.div
                className="absolute"
                style={{
                    ...(isVertical
                        ? { width: '1px', height: '60px' }
                        : { height: '1px', width: '60px' }),
                    background: isVertical
                        ? 'linear-gradient(to bottom, transparent, var(--primary), transparent)'
                        : 'linear-gradient(to right, transparent, var(--primary), transparent)',
                    opacity: 0.5,
                }}
                animate={
                    isVertical
                        ? { top: ['-60px', 'calc(100% + 60px)'] }
                        : { left: ['-60px', 'calc(100% + 60px)'] }
                }
                transition={{
                    duration,
                    delay,
                    repeat: Infinity,
                    repeatDelay: delay * 0.5,
                    ease: 'linear',
                }}
            />
        </motion.div>
    )
}

export function LineBeams() {
    const prefersReducedMotion = useReducedMotion()

    if (prefersReducedMotion) return null

    return (
        <div className="pointer-events-none absolute inset-x-0 -bottom-8 top-0 mx-auto max-w-7xl lg:-bottom-20">
            <div className="absolute inset-x-0 inset-y-0 mx-auto max-w-7xl lg:px-6">
                <div className="top-22 absolute inset-0 inset-x-2 px-2 sm:px-6 lg:inset-x-6">
                    {/* Outer left vertical */}
                    <Beam orientation="vertical" position="0px" delay={0} duration={4} />
                    {/* Outer right vertical */}
                    <Beam orientation="vertical" position="calc(100% - 1px)" delay={1.5} duration={3.5} />
                    {/* Top horizontal */}
                    <Beam orientation="horizontal" position="0px" delay={0.8} duration={5} />

                    {/* Inner container */}
                    <div className="absolute inset-x-2 bottom-0 top-0 sm:inset-x-6">
                        {/* Inner left vertical */}
                        <Beam orientation="vertical" position="0px" delay={2} duration={3} />
                        {/* Inner right vertical */}
                        <Beam orientation="vertical" position="calc(100% - 1px)" delay={0.5} duration={4.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}
