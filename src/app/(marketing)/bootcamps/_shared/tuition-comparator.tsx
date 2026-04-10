'use client'
import { cn } from '@/lib/utils'
import { Clover, Fan, Gem } from 'lucide-react'
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useMedia } from '@/hooks/use-media'
import { useState, type ReactNode } from 'react'
import { Container } from '@/components/container'

const plans = ['upfront', 'installment', 'financed'] as const

type PlanAvailability = boolean | string

type Plan = (typeof plans)[number]

type Feature = {
    name: string
    description?: string
    plans: Record<Plan, PlanAvailability>
}

type Category = {
    name: string
    description?: string
    features: Feature[]
}

export function TuitionComparator() {
    const [activePlan, setActivePlan] = useState<Plan>('installment')
    const isMedium = useMedia('(min-width: 768px)')

    const categories: Category[] = [
        {
            name: 'Pricing',
            description: 'Total cost and payment structure for each option',
            features: [
                {
                    name: 'Total Cost',
                    description: 'The total amount you will pay for the program.',
                    plans: {
                        upfront: '$9,900',
                        installment: '$13,500',
                        financed: '$14,900',
                    },
                },
                {
                    name: 'Monthly Payment',
                    description: 'Your recurring monthly obligation.',
                    plans: {
                        upfront: 'None',
                        installment: '$1,125',
                        financed: 'From $323',
                    },
                },
                {
                    name: 'Payment Duration',
                    description: 'How long you will be making payments.',
                    plans: {
                        upfront: 'One-time',
                        installment: '12 months',
                        financed: 'Varies',
                    },
                },
                {
                    name: 'Credit Check',
                    description: 'Whether a credit check is required for this option.',
                    plans: {
                        upfront: false,
                        installment: false,
                        financed: true,
                    },
                },
            ],
        },
        {
            name: 'Program Access',
            description: 'What is included with your enrollment',
            features: [
                {
                    name: 'Full Curriculum Access',
                    description: 'Access to all 11 course modules and capstone.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
                {
                    name: 'Career Services',
                    description: 'Resume reviews, mock interviews, and job placement support.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
                {
                    name: 'Industry Certificate',
                    description: 'Credly digital badge from Furman and Flatiron certificate.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
                {
                    name: 'Small Group Classes',
                    description: 'Maximum 8 students per cohort for personalized attention.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
                {
                    name: '100% Online',
                    description: 'Live virtual classes from anywhere.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
            ],
        },
        {
            name: 'Support',
            description: 'Resources available during and after the program',
            features: [
                {
                    name: 'Live Instruction',
                    description: 'Weekly live sessions with experienced facilitators.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
                {
                    name: 'Mentorship',
                    description: 'One-on-one guidance from cybersecurity experts.',
                    plans: {
                        upfront: true,
                        installment: true,
                        financed: true,
                    },
                },
                {
                    name: 'Payment Flexibility',
                    description: 'Ability to adjust or defer payments if needed.',
                    plans: {
                        upfront: false,
                        installment: true,
                        financed: true,
                    },
                },
            ],
        },
    ]

    const plansActions: Record<Plan, ReactNode> = {
        upfront: (
            <Button
                className="lg:w-full"
                size="sm"
                variant="outline"
                asChild>
                <Link href="/apply">Apply Now</Link>
            </Button>
        ),
        installment: (
            <Button
                className="lg:w-full"
                size="sm"
                asChild>
                <Link href="/apply">Apply Now</Link>
            </Button>
        ),
        financed: (
            <Button
                className="lg:w-full"
                size="sm"
                variant="outline"
                asChild>
                <Link href="/info-session">Schedule a Call</Link>
            </Button>
        ),
    }

    const planLabels: Record<Plan, { label: string; icon: ReactNode }> = {
        upfront: { label: 'Upfront', icon: <Clover className="size-4" /> },
        installment: { label: 'Installment', icon: <Gem className="size-4" /> },
        financed: { label: 'Financed', icon: <Fan className="size-4" /> },
    }

    const renderPlanColumn = (plan: Plan) => {
        const header =
            plan === 'installment' ? (
                <div className="bg-illustration h-18 top-18 sticky flex flex-col items-center justify-center gap-1.5 rounded-t-xl border-b px-4 text-center max-md:hidden lg:px-6">
                    {planLabels[plan].icon}
                    <div className="text-sm font-medium">{planLabels[plan].label}</div>
                </div>
            ) : (
                <div className="bg-[#F5F2EF] h-18 top-18 sticky flex flex-col items-center justify-center gap-1.5 border-b px-4 pt-2 text-center max-md:hidden lg:px-8">
                    {planLabels[plan].icon}
                    <div className="text-sm font-medium">{planLabels[plan].label}</div>
                </div>
            )

        return (
            <div
                data-plan={plan}
                className={cn(plan === 'installment' && 'z-1 md:bg-illustration md:ring-border-illustration relative md:rounded-xl md:shadow-xl md:shadow-black/10 md:ring-1')}>
                {header}
                {categories.map((category, index) => (
                    <div key={index}>
                        <div
                            aria-hidden
                            className={cn('h-14 md:h-28')}
                        />
                        <div>
                            {category.features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex h-14 items-center justify-center border-t px-6 text-sm last:h-[calc(3.5rem+1px)] last:border-b max-md:border-l">
                                    <div>{feature.plans[plan] === true ? <Indicator checked /> : feature.plans[plan] === false ? <Indicator /> : feature.plans[plan]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <div className="flex h-20 items-center justify-center px-4 text-sm max-md:hidden lg:px-6">{plansActions[plan]}</div>
            </div>
        )
    }
    return (
        <section>
            <Container>
                {!isMedium && (
                    <div className="bg-muted sticky top-14 z-10 flex justify-between gap-4 border-b px-5 py-3">
                        <div className="flex justify-center">
                            {plans.map((plan, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePlan(plan)}
                                    className="text-muted-foreground group max-md:px-1 md:block md:py-1">
                                    <span className={cn('flex w-fit items-center gap-2 rounded-md px-4 py-1.5 text-sm transition-colors [&>svg]:size-4', activePlan === plan ? 'bg-card ring-foreground/5 text-primary font-medium shadow-sm ring-1' : 'hover:text-foreground group-hover:bg-foreground/5')}>
                                        <span className="capitalize">{planLabels[plan].label}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                        {plansActions[activePlan]}
                    </div>
                )}

                <div className="grid grid-cols-2 md:grid-cols-4">
                    <div>
                        <div className="bg-[#F5F2EF] h-18 z-1 top-18 sticky flex items-end gap-1.5 border-b px-6 py-2 max-md:hidden">
                            <div className="text-muted-foreground text-sm font-medium">Features</div>
                        </div>

                        {categories.map((category, index) => (
                            <div key={index}>
                                <div className="relative flex h-14 flex-col justify-center px-6 md:h-28">
                                    <h3 className="font-medium">{category.name}</h3>
                                    <p className="text-muted-foreground mt-1 line-clamp-2 text-balance text-sm max-md:hidden md:-mr-24">{category.description}</p>
                                </div>
                                {category.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="text-muted-foreground flex h-14 items-center border-t px-6 last:h-[calc(3.5rem+1px)] last:border-b">
                                        <div className="text-sm">{feature.name}</div>{' '}
                                        {feature.description && (
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger className="flex size-7">
                                                        <span className="bg-foreground/10 text-foreground/65 m-auto flex size-4 items-center justify-center rounded-full text-sm">?</span>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="max-w-56 text-sm">{feature.description}</TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="grid md:col-span-3 md:grid-cols-3">
                        {isMedium ? (
                            <>
                                {plans.map((plan) => (
                                    <div
                                        key={plan}
                                        className="group">
                                        {renderPlanColumn(plan)}
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div>{renderPlanColumn(activePlan)}</div>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    )
}

const Indicator = ({ checked = false }: { checked?: boolean }) => {
    return <span className={cn('bg-foreground/6.5 text-foreground/65 flex size-5 items-center justify-center rounded-full font-sans text-xs font-semibold', checked && 'bg-emerald-500/10 text-emerald-600')}>{checked ? '✓' : '✗'}</span>
}
