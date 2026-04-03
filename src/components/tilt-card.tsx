'use client'

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'motion/react'
import type { ReactNode, MouseEvent } from 'react'
import { useCallback, useRef } from 'react'

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const prefersReducedMotion = useReducedMotion()

    const x = useMotionValue(0.5)
    const y = useMotionValue(0.5)

    const springConfig = { stiffness: 200, damping: 20 }
    const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig)
    const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig)

    const handleMouseMove = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            if (prefersReducedMotion) return
            const el = ref.current
            if (!el) return
            const rect = el.getBoundingClientRect()
            if (!rect.width || !rect.height) return
            x.set((e.clientX - rect.left) / rect.width)
            y.set((e.clientY - rect.top) / rect.height)
        },
        [x, y, prefersReducedMotion],
    )

    const handleMouseLeave = useCallback(() => {
        x.set(0.5)
        y.set(0.5)
    }, [x, y])

    return (
        <div className={className} style={{ perspective: 1200 }}>
            <motion.div
                ref={ref}
                style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                {children}
            </motion.div>
        </div>
    )
}
