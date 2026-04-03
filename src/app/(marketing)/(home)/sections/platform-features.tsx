import { IntegrationsIllustration } from '@/components/illustrations/integrations-illustration'
import { InvoiceIllustration } from '@/components/illustrations/invoice-illustration'
import { ChatIllustration } from '@/components/illustrations/chat-illustration'
import { AiSuggestionIllustration } from '@/components/illustrations/ai-suggestion-illustration'

import { Container } from '@/components/container'

import { MESCHAC_AVATAR } from '@/lib/const'

import { Quote } from 'lucide-react'
import { Stripe } from '@/components/ui/svgs/stripe'

export function PlatformFeatures() {
    return (
        <section>
            <Container>
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-4 text-center">
                        <span className="text-foreground font-mono text-sm uppercase">
                            <span className="text-foreground/50">[ 01 ]</span> Program Offerings
                        </span>
                        <h2 className="text-foreground mt-6 text-balance text-4xl font-semibold lg:text-5xl">Industry-leading bootcamps built for Furman students</h2>
                        <p className="text-muted-foreground text-balance text-lg">Go from novice to job-ready in as few as 15 weeks. Expert-led, project-based programs with an 8:1 student-to-teacher ratio.</p>
                    </div>
                </div>
            </Container>
            <Container className="**:data-[slot=content]:py-0 border-foreground/10 border-dashed">
                <div className="divide-foreground/10 @4xl:grid-cols-4 @4xl:*:p-8 @5xl:*:p-12 grid grid-cols-2 divide-x divide-y overflow-hidden *:p-4">
                    <div className="@max-4xl:border-r-0 @4xl:col-span-2 col-span-full row-span-2 grid grid-rows-subgrid gap-8">
                        <div className="mx-auto self-center">
                            <AiSuggestionIllustration />
                        </div>
                        <div className="relative z-10 mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold">AI &amp; Data Science</h3>
                            <p className="text-muted-foreground mt-3">Build machine learning models, analyze real datasets, and learn the tools used by data teams at top companies.</p>
                        </div>
                    </div>
                    <div className="@4xl:col-span-2 col-span-full row-span-2 grid grid-rows-subgrid gap-8 border-r-0">
                        <div className="min-w-xs mx-auto self-center">
                            <InvoiceIllustration />
                        </div>
                        <div className="relative z-10 mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold">Cybersecurity</h3>
                            <p className="text-muted-foreground mt-3">Learn to defend networks, detect threats, and respond to attacks. Go from complete beginner to cyber pro.</p>
                        </div>
                    </div>

                    <div className="@max-2xl:p-4 bg-card @4xl:border-b-0 flex flex-col items-center justify-center space-y-1 text-center md:text-center">
                        <div className="text-foreground text-4xl font-bold">20K+</div>
                        <p className="text-muted-foreground">Careers Launched</p>
                    </div>

                    <div className="@max-4xl:border-r-0 @max-2xl:p-4 bg-card @4xl:border-b-0 flex flex-col items-center justify-center space-y-1 text-center md:text-center">
                        <div className="text-foreground text-4xl font-bold">8:1</div>
                        <p className="text-muted-foreground">Student-Teacher Ratio</p>
                    </div>
                    <div className="@max-2xl:p-4 @max-2xl:col-span-full bg-card relative col-span-2 border-b-0 border-r-0">
                        <blockquote className="relative max-w-xl pl-6 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-indigo-500">
                            <p className="text-foreground">Don&apos;t ever give up on yourself. There will be many long days and even longer nights studying. It&apos;s not an easy program, but it&apos;s worth the blood, sweat, and tears when it&apos;s over.</p>

                            <footer className="mt-4 flex items-center gap-2">
                                <div className="ring-foreground/10 size-6 overflow-hidden rounded-md border border-transparent shadow ring-1">
                                    <img
                                        src="https://cdn.prod.website-files.com/68077536052048843745de64/689e5ca1cc1654e6dba46cf5_Ruth%20Burger.jpeg"
                                        alt="Ruth Burger"
                                        loading="lazy"
                                        width={46}
                                        height={46}
                                    />
                                </div>

                                <cite>Ruth Burger</cite>

                                <span
                                    aria-hidden
                                    className="bg-foreground/15 size-1 rounded-full"></span>
                                <span className="text-muted-foreground">Cybersecurity Bootcamp, Class of 2023</span>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="@max-4xl:border-r-0 col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-b-0 border-t p-8">
                        <div className="w-84 scale-80 mx-auto max-w-lg self-center">
                            <IntegrationsIllustration />
                        </div>

                        <div className="mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold">Dedicated Facilitators</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Learn from industry pros at Spotify, Citi, Deloitte, and Peloton who bring real-world experience to every session.</p>
                        </div>
                    </div>

                    <div className="relative col-span-2 row-span-2 grid grid-rows-subgrid gap-8 border-t p-8">
                        <div className="@4xl:px-8 mx-auto w-full max-w-md self-center">
                            <ChatIllustration />
                        </div>

                        <div className="relative z-10 mx-auto max-w-sm text-center">
                            <h3 className="text-balance font-semibold">Career Services</h3>
                            <p className="text-muted-foreground mt-3 text-balance">Resume reviews, interview prep, and job placement support to help you land your first role in tech.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="**:data-[slot=content]:bg-background max-lg:**:data-[slot=content]:px-6 **:data-[slot=content]:py-0 border-dashed">
                <div className="mx-auto max-w-2xl py-12 lg:pt-16">
                    <Quote
                        aria-hidden
                        className="fill-background stroke-background size-6 drop-shadow-sm"
                    />
                    <Stripe className="mt-6 h-auto w-16" />
                    <div className="mt-6">
                        <p className='text-xl *:leading-relaxed before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"] md:text-2xl'>When I found Flatiron School, I was excited about the opportunity to level up my coding skills and gain a deeper understanding of machine learning and AI.</p>

                        <div className="mt-12 flex items-center gap-3">
                            <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                <img
                                    src="https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0bc_Kendall%20McNeil.avif"
                                    alt="Kendall McNeil"
                                    loading="lazy"
                                    width={460}
                                    height={460}
                                />
                            </div>
                            <div className="space-y-px">
                                <p className="text-sm font-medium">Kendall McNeil</p>
                                <p className="text-muted-foreground text-xs">Data Science Bootcamp, Class of 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}