import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

import { LogoCloud } from '@/components/logo-cloud'
import { Manifesto } from '@/app/(marketing)/(home)/sections/manifesto'
import { PlatformFeatures } from '@/app/(marketing)/(home)/sections/platform-features'
import { AnalyticsFeatures } from '@/app/(marketing)/(home)/sections/analytics-features'
import { IntegrationsSection } from '@/app/(marketing)/(home)/sections/integrations-section'
import { TestimonialsSection } from '@/app/(marketing)/(home)/sections/testimonials-section'
import { CallToAction } from '@/components/call-to-action'
import { Container } from '@/components/container'
import { PartnerLogoBanner } from '@/components/partner-logo-banner'
import { TiltCard } from '@/components/tilt-card'
import { LineBeams } from '@/components/line-beams'

export default function Home() {
    return (
        <>
            <section
                id="home"
                className="bg-muted/50 relative overflow-hidden border-b [--color-border:var(--border-illustration)]">
                <div className="relative pt-40 sm:pt-52">
                    <div className="absolute inset-x-0 -bottom-8 top-0 mx-auto max-w-7xl lg:-bottom-20">
                        <div className="absolute inset-x-0 inset-y-0 mx-auto max-w-7xl lg:px-6">
                            <div className="top-22 absolute inset-0 inset-x-2 border-x px-2 sm:px-6 lg:inset-x-6 lg:border-t">
                                <div className="sm:-top-15 mask-t-from-90% absolute inset-x-2 bottom-0 top-0 border-x sm:inset-x-6"></div>
                            </div>
                        </div>
                    </div>
                    <LineBeams />
                    <div className="relative mx-auto max-w-5xl px-6 pb-12 text-center">
                        <div className="relative mx-auto max-w-3xl text-center">
                            <h1 className="text-foreground text-balance text-5xl font-medium tracking-tight sm:text-6xl">
                                Launch Your Tech Career <span className="text-muted-foreground">While Still in School</span>
                            </h1>
                            <p className="text-muted-foreground mb-8 mt-6 text-balance text-lg">Furman University and Flatiron School bring you hands-on bootcamps in AI &amp; Data Science and Cybersecurity. Go from beginner to job-ready in as few as 15 weeks.</p>
                            <Button
                                asChild
                                size="lg"
                                className="border-transparent px-4 text-sm shadow-xl shadow-indigo-950/30">
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                            <span className="text-muted-foreground mt-3 block text-center text-sm">20,000+ careers launched with Flatiron School</span>
                        </div>
                    </div>
                </div>
                <Container className="**:data-[slot=content]:py-0 mt-8 bg-transparent sm:mt-20">
                    <div className="-mx-12 px-12">
                        <div className="border border-transparent bg-purple-950/5 px-6 pb-6">
                            <TiltCard className="-mt-12">
                                <div className="bg-white/40 ring-white/20 shadow-black/7.5 overflow-hidden rounded-2xl p-1 shadow-2xl ring-1 backdrop-blur-xl">
                                    <div className="sm:aspect-3/2 relative overflow-hidden rounded-xl">
                                        <Image
                                            className="size-full object-cover"
                                            src="/furman-campus.webp"
                                            alt="Furman University campus"
                                            width={2000}
                                            height={1500}
                                            priority
                                            fetchPriority="high"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1152px"
                                        />
                                        {/* Frosted glass bottom fade */}
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl"
                                            style={{
                                                background:
                                                    'linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.4) 80%, rgba(255,255,255,0.7) 100%)',
                                            }}
                                        />
                                        {/* Bottom blur */}
                                        <div
                                            className="pointer-events-none absolute inset-0 rounded-xl"
                                            style={{
                                                maskImage: 'linear-gradient(to bottom, transparent 50%, black 85%)',
                                                WebkitMaskImage: 'linear-gradient(to bottom, transparent 50%, black 85%)',
                                                backdropFilter: 'blur(6px)',
                                                WebkitBackdropFilter: 'blur(6px)',
                                            }}
                                        />
                                        <PartnerLogoBanner />
                                    </div>
                                </div>
                            </TiltCard>
                        </div>
                    </div>
                </Container>

                <LogoCloud />
            </section>
            <Manifesto />
            <PlatformFeatures />
            <AnalyticsFeatures />
            <IntegrationsSection />
            <TestimonialsSection />
            <CallToAction />
        </>
    )
}