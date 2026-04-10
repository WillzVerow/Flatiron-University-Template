'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Shield, Brain, Hourglass, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container } from '@/components/container'
import { CybersecurityIllustration } from "@/components/illustrations/cybersecurity-illustration"
import { ModelSelectorIllustration } from "@/components/illustrations/model-selector"

const Metrics = () => {
    return (
        <ul className="text-muted-foreground space-y-3 text-sm">
            <li className="flex items-center gap-3">
                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                <span className="text-foreground font-medium">Industry-recognized credential</span>
            </li>
            <li className="flex items-center gap-3">
                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                <span className="text-foreground font-medium">Expert-led instruction</span>
            </li>
            <li className="flex items-center gap-3">
                <ShieldCheck className="*:nth-2:text-emerald-600 size-4 dark:text-emerald-500/25" />
                <span className="text-foreground font-medium">Hands-on projects</span>
            </li>
            <li className="flex items-center gap-3">
                <Hourglass className="text-muted-foreground size-4 dark:text-blue-500/25" />
                <span>
                    <span className="text-foreground font-medium">15 weeks</span> to job-ready
                </span>
            </li>
        </ul>
    )
}

const ShadTestimonial = () => {
    return (
        <div className="relative mt-auto max-w-xl">
            <p className="text-foreground max-w-xs text-balance">&ldquo;Don&apos;t ever give up on yourself. It&apos;s not an easy program, but it&apos;s worth the blood, sweat, and tears when it&apos;s over.&rdquo;</p>

            <div className="mt-4 flex items-center gap-2">
                <div className="before:border-foreground/10 relative size-10 overflow-hidden rounded-lg shadow before:absolute before:inset-0 before:rounded-lg before:border">
                    <Image
                        src="https://cdn.prod.website-files.com/68077536052048843745de64/689e5ca1cc1654e6dba46cf5_Ruth%20Burger.jpeg"
                        alt="Ruth Burger"
                        width={56}
                        height={56}
                    />
                </div>

                <div className="space-y-0.5">
                    <p className="text-foreground text-sm font-medium">Ruth Burger</p>
                    <span className="text-muted-foreground block text-xs">Cybersecurity Bootcamp, Class of 2023</span>
                </div>
            </div>
        </div>
    )
}

const features = [
    {
        title: 'Master AI, machine learning, and data analysis',
        label: 'Artificial Intelligence',
        description: 'Build machine learning models, analyze real datasets, and learn the tools used by data teams at top companies like Google, Meta, and NASA.',
        icon: Brain,
        href: '/bootcamps/artificial-intelligence',
        supportiveContent: <Metrics />,
        illustration: <ModelSelectorIllustration key="m3" />,
        image: 'https://images.unsplash.com/photo-1600223260976-32a509b23602?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'Defend networks, systems, and data from cyber threats',
        label: 'Cybersecurity',
        description: 'Learn threat detection, incident response, and security operations — the skills protecting organizations from breaches worldwide.',
        icon: Shield,
        href: '/bootcamps/cybersecurity',
        supportiveContent: <ShadTestimonial />,
        illustration: <CybersecurityIllustration key="m4" />,
        image: 'https://images.unsplash.com/photo-1712942107059-0ef8ba9efbf9?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
]

export function PlatformFeatures() {
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
        <section>
            <Container className="@container **:data-[slot=content]:py-0 **:data-[slot=content]:overflow-hidden">
                <div className="flex items-center justify-center px-4 py-6 sm:px-12">
                    <span className="text-foreground font-mono text-sm uppercase">
                        <span className="text-foreground/50">[01]</span> Program Offerings
                    </span>
                </div>
                <div className="border-t">
                    <div className="px-2 pb-2 pt-4 sm:px-8">
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
                                    <div className="flex items-center justify-center gap-3 py-3 duration-200">
                                        <feature.icon className={cn('size-4 shrink-0 transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground')} />
                                        <span className={cn('group-hover:text-foreground text-sm font-medium transition-colors', expandedIndex === index ? 'text-foreground' : 'text-muted-foreground')}>{feature.label}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="relative p-6 sm:px-12 sm:py-8">
                            <div className="flex h-full flex-col gap-8">
                                <div className="max-w-sm text-balance">
                                    <h3 className="text-foreground text-4xl font-medium">{features[expandedIndex].title}</h3>
                                    <p className="text-muted-foreground my-6">{features[expandedIndex].description}</p>

                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm">
                                        <Link href={features[expandedIndex].href}>
                                            Learn more <span className="border-l-foreground/50 ml-0.5 block size-0 border-y-4 border-l-4 border-y-transparent" />
                                        </Link>
                                    </Button>
                                </div>

                                <div className="max-w-sm">{features[expandedIndex].supportiveContent}</div>
                            </div>
                        </div>
                        <div className="relative h-fit">

                            <div className="aspect-square relative overflow-hidden rounded-xl">
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
            </Container>
        </section>
    )
}
