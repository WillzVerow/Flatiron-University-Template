import Link from 'next/link'
import { Container } from '@/components/container'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function CohortDates() {
    return (
        <section className="bg-muted/50">
            <Container className="**:data-[slot=content]:pt-4 **:data-[slot=content]:pb-12 bg-transparent">
                <div
                    aria-hidden
                    className="@max-4xl:hidden absolute inset-y-0 inset-x-0 mx-auto w-px border-l"
                />
                <div className="@4xl:grid-cols-2 grid gap-4">
                    <div
                        data-theme="dark"
                        className="bg-background @4xl:p-12 group relative overflow-hidden rounded-2xl p-8 shadow-xl shadow-black/35">
                        <div className="z-1 relative space-y-12">
                            <div className="text-primary text-sm font-medium uppercase tracking-wider">Full-Time Track</div>
                            <p className="text-3xl font-normal">
                                Complete the full AI pathway in <span className="text-foreground font-semibold">15 weeks of intensive, hands-on AI training.</span>
                            </p>
                            <div className="relative z-10 flex gap-3">
                                <Button asChild size="sm">
                                    <Link href="/apply">Apply Now</Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="border border-foreground/5 bg-foreground/10 text-foreground hover:bg-transparent">
                                    <Link href="/info-session">Schedule a Call</Link>
                                </Button>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2 *:block">
                                    <span className="text-2xl font-semibold">40 <span className="text-foreground/75 text-lg">hrs/wk</span></span>
                                    <p className="text-balance text-sm">
                                        <strong className="font-medium">Full-time commitment</strong> with live instruction.
                                    </p>
                                </div>
                                <div className="space-y-2 *:block">
                                    <span className="text-2xl font-semibold">8 <span className="text-foreground/75 text-lg">max</span></span>
                                    <p className="text-balance text-sm">
                                        <strong className="font-medium">Students per cohort</strong> for personalized attention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mask-b-from-25% absolute inset-0 overflow-hidden opacity-25 duration-200 group-hover:opacity-20">
                            <Image
                                src="https://images.unsplash.com/photo-1564330583741-f25fbb9970f4?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="AI background"
                                className="size-full object-cover"
                                width={2428}
                                height={1518}
                                sizes="(min-width: 1280px) 1024px, 100vw"
                            />
                        </div>
                        <div
                            aria-hidden
                            className="absolute inset-1 overflow-hidden rounded-xl bg-white/5"
                        />
                    </div>
                    <div
                        data-theme="dark"
                        className="bg-background group relative overflow-hidden rounded-2xl shadow-xl shadow-black/35">
                        <div className="z-1 @4xl:p-12 relative space-y-12 p-8">
                            <div className="text-primary text-sm font-medium uppercase tracking-wider">Part-Time Track</div>
                            <p className="text-3xl font-normal">
                                Balance your schedule with a <span className="text-foreground font-semibold">45-week part-time program designed for working professionals.</span>
                            </p>

                            <div className="relative z-10 flex gap-3">
                                <Button asChild size="sm">
                                    <Link href="/apply">Apply Now</Link>
                                </Button>
                                <Button asChild variant="outline" size="sm" className="border border-foreground/5 bg-foreground/10 text-foreground hover:bg-transparent">
                                    <Link href="/info-session">Schedule a Call</Link>
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2 *:block">
                                    <span className="text-2xl font-semibold">20 <span className="text-foreground/75 text-lg">hrs/wk</span></span>
                                    <p className="text-balance text-sm">
                                        <strong className="font-medium">Part-time commitment</strong> that fits your life.
                                    </p>
                                </div>
                                <div className="space-y-2 *:block">
                                    <span className="text-2xl font-semibold">100<span className="text-foreground/75 text-lg">%</span></span>
                                    <p className="text-balance text-sm">
                                        <strong className="font-medium">Online delivery</strong> — learn from anywhere.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-hidden opacity-20 duration-200 group-hover:opacity-15">
                            <Image
                                src="https://images.unsplash.com/photo-1637952112301-6090dca83ccb?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="AI background"
                                className="size-full object-cover object-bottom"
                                width={2832}
                                height={1593}
                                sizes="(min-width: 1280px) 1024px, 100vw"
                            />
                        </div>
                        <div
                            aria-hidden
                            className="absolute inset-1 overflow-hidden rounded-xl bg-white/5"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
