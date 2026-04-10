'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Bot, Brain, Hourglass, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import AgentFeedbackIllustration from "@/components/ui/illustrations/agent-feedback-illustration"
import EmailIllustration from "@/components/ui/illustrations/email-illustration"

const Metrics = () => {
    return (
        <ul className="text-muted-foreground mt-auto space-y-3 pt-8 text-sm">
            <li className="flex items-center gap-3">
                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                <span className="text-foreground font-medium">SOC 2</span>
            </li>
            <li className="flex items-center gap-3">
                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                <span className="text-foreground font-medium">ISO 27001</span>
            </li>
            <li className="flex items-center gap-3">
                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                <span className="text-foreground font-medium">GDPR</span>
            </li>
            <li className="flex items-center gap-3">
                <Hourglass className="text-muted-foreground size-4 dark:text-blue-500/25" />
                <span>
                    <span className="text-foreground font-medium">99.9%</span> uptime
                </span>
            </li>
        </ul>
    )
}

const ShadTestimonial = () => {
    return (
        <div className="relative mt-auto max-w-xl">
            <p className="text-foreground max-w-xs text-balance">"Looks really good. Did you design in code or Figma first?"</p>

            <div className="mt-4 flex items-center gap-2">
                <div className="before:border-foreground/10 relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border">
                    <Image
                        src="https://avatars.githubusercontent.com/u/124599?v=4"
                        alt="Shadcn Avatar"
                        width={56}
                        height={56}
                    />
                </div>

                <div className="space-y-0.5">
                    <p className="text-foreground text-sm font-medium">Shadcn</p>
                    <span className="text-muted-foreground block text-xs">Creator of Shadcn UI</span>
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        title: 'Accelerate development with AI-powered assistance',
        label: 'AI Models',
        description: 'Switch between GPT, Claude, and Gemini from a unified interface with seamless provider switching.',
        icon: Brain,
        supportiveContent: <Metrics />,
        illustration: <EmailIllustration key="m3" />,
        image: 'https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Automate your workflows with intelligent agents',
        label: 'Smart Agent',
        description: 'Automate repetitive tasks with context-aware AI agents that learn your workflow patterns.',
        icon: Bot,
        supportiveContent: <ShadTestimonial />,
        illustration: <AgentFeedbackIllustration key="m4" />,
        image: 'https://images.unsplash.com/photo-1712942107059-0ef8ba9efbf9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export default function ExpandableFeatures() {
    const [expandedIndex, setExpandedIndex] = useState<number>(0)
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 })

    useEffect(() => {
        const btn = buttonsRef.current[expandedIndex]
        if (btn) {
            const parent = btn.parentElement
            if (parent) {
                setIndicatorStyle({
                    left: btn.offsetLeft,
                    width: btn.offsetWidth,
                })
            }
        }
    }, [expandedIndex])

    const handleSelect = (index: number) => {
        if (index === expandedIndex) return
        setExpandedIndex(index)
    }

    return (
        <section className="bg-background @container overflow-hidden py-24">
            <h2 className="sr-only">features</h2>
            <div className="border-foreground/10 border-y border-dashed">
                <div className="mx-auto max-w-5xl px-4 sm:px-14">
                    <div className="relative flex">
                        <motion.div
                            aria-hidden
                            className="before:bg-foreground absolute -bottom-px h-px before:absolute before:inset-x-4 before:inset-y-0 before:rounded-full"
                            initial={false}
                            animate={{ left: indicatorStyle.left, width: indicatorStyle.width }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                        {features.map((feature, index) => (
                            <button
                                key={feature.label}
                                ref={(el) => {
                                    buttonsRef.current[index] = el
                                }}
                                onClick={() => handleSelect(index)}
                                data-state={expandedIndex === index ? 'expanded' : 'collapsed'}
                                className="active:scale-98 group cursor-pointer px-4 duration-200">
                                <div className="flex items-center justify-center gap-3 py-4 duration-200">
                                    <feature.icon className={cn('size-4 shrink-0 transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground')} />
                                    <span className={cn('group-hover:text-foreground text-sm font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.label}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mx-auto my-1 max-w-5xl px-2 sm:px-6">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="relative p-6 sm:p-12">
                        <div
                            aria-hidden
                            className="mask-y-from-80% border-foreground/10 pointer-events-none absolute -inset-x-1 -inset-y-56 border-x border-dashed"
                        />
                        <div className="flex h-full flex-col gap-12">
                            <div className="max-w-sm text-balance">
                                <h3 className="text-foreground text-4xl font-medium">{features[expandedIndex].title}</h3>
                                <p className="text-muted-foreground my-6">{features[expandedIndex].description}</p>

                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <Link href="#">
                                        Learn more <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="mt-auto max-w-sm">{features[expandedIndex].supportiveContent}</div>
                        </div>
                    </div>
                    <div className="relative h-fit">
                        <div
                            aria-hidden
                            className="mask-y-from-80% border-foreground/10 pointer-events-none absolute -inset-x-1 -inset-y-56 border-x border-dashed"
                        />

                        <div className="aspect-7/8 relative overflow-hidden rounded-xl">
                            <AnimatePresence
                                initial={false}
                                mode="popLayout">
                                <motion.div
                                    variants={{
                                        initial: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
                                        animate: { opacity: 1, scale: 1, filter: 'blur(0px)' },
                                        exit: { opacity: 0, scale: 0.95, filter: 'blur(4px)' },
                                    }}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ duration: 0.5, type: 'spring', bounce: 0.1 }}
                                    className="scale-85 relative z-10 flex h-full items-center justify-center"
                                    key={expandedIndex}>
                                    {features[expandedIndex].illustration}
                                </motion.div>
                            </AnimatePresence>

                            <AnimatePresence
                                initial={false}
                                mode="popLayout">
                                <motion.div
                                    key={expandedIndex}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0">
                                    <div className="dither absolute inset-0 opacity-65 dark:opacity-35">
                                        <Image
                                            src={features[expandedIndex].image}
                                            alt="feature background image"
                                            fill
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <Image
                                        src={features[expandedIndex].image}
                                        alt="feature background image"
                                        fill
                                        className="size-full object-cover opacity-65 dark:opacity-35"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            <div
                aria-hidden
                className="border-foreground/10 h-px border-t border-dashed"
            />
        </section>
    )
}