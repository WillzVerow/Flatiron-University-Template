import { Notes3Illustration } from "@/components/ui/illustrations/notes-3-illustration"
import { Models3Illustration } from "@/components/ui/illustrations/models-3-illustration"
import { WorkflowIllustration } from "@/components/ui/illustrations/workflow-illustration"
import { AiAutocompleteIllustration } from "@/components/ui/illustrations/ai-autocomplete-illustration"
import { TranslationInterfaceIllustration } from "@/components/ui/illustrations/translation-interface-illustration"
import { TokenCounterIllustration } from "@/components/ui/illustrations/token-counter-illustration"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function FeaturesSliderSection() {
    return (
        <section className="bg-background @container max-lg:px-1">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    breakpoints: {
                        '(max-width: 768px)': {
                            slidesToScroll: 1,
                        },
                        '(min-width: 768px)': {
                            slidesToScroll: 2,
                        },
                        '(min-width: 1024px)': {
                            slidesToScroll: 3,
                        },
                    },
                }}
                className="mx-auto">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-wrap items-end justify-between gap-4 border-x border-dashed px-6 pb-6 pt-24 lg:px-8 lg:pb-12">
                        <h2 className="text-foreground max-w-xl text-balance text-4xl font-semibold lg:text-5xl">Build modern AI development tools</h2>
                        <div className="flex items-center gap-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-[1fr_auto_1fr]">
                    <div
                        aria-hidden
                        className="border-y border-dashed max-lg:hidden"
                    />
                    <div className="mx-auto border lg:max-w-6xl">
                        <CarouselContent className="*:nth-3:border-r-0 *:bg-card *:not-dark:bg-card/50 *:p-8 *:pt-12 md:divide-x md:*:basis-1/2 lg:-mr-4 lg:*:basis-1/3">
                            <CarouselItem className="grid-rows-subrgid row-span-2 grid gap-12">
                                <div className="m-auto scale-90 self-center">
                                    <Models3Illustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium lg:max-w-xs">
                                    <strong className="text-foreground font-medium">Multiple AI models</strong> including GPT-5, Claude, and Llama with seamless switching between providers.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="grid-rows-subrgid row-span-2 grid gap-12">
                                <div className="mx-auto scale-90 self-center">
                                    <Notes3Illustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Collaborative documentation</strong> with version history, inline comments, and real-time editing.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="grid-rows-subrgid row-span-2 grid gap-12">
                                <div className="mx-auto scale-90 self-center">
                                    <WorkflowIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Automated workflows</strong> with drag-and-drop pipeline builder and pre-built integrations.
                                </p>
                            </CarouselItem>

                            <CarouselItem className="grid-rows-subrgid row-span-2 grid gap-12">
                                <div className="mx-auto scale-90 self-center">
                                    <AiAutocompleteIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Intelligent code completion</strong> that understands your codebase and suggests context-aware snippets.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="grid-rows-subrgid row-span-2 grid gap-12">
                                <div className="mx-auto scale-90 self-center">
                                    <TokenCounterIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Usage analytics</strong> with detailed token tracking, cost estimation, and budget alerts.
                                </p>
                            </CarouselItem>
                            <CarouselItem className="grid-rows-subrgid row-span-2 grid gap-12">
                                <div className="scale-90 self-center">
                                    <TranslationInterfaceIllustration />
                                </div>

                                <p className="text-foreground/65 self-end text-balance font-medium">
                                    <strong className="text-foreground font-medium">Real-time translation</strong> across 50+ languages with natural-sounding output and dialect support.
                                </p>
                            </CarouselItem>
                        </CarouselContent>
                    </div>
                    <div
                        aria-hidden
                        className="bmax-lg:hidden order-y border-dashed"
                    />
                </div>

                <div className="mx-auto w-full max-w-6xl border-x border-dashed pb-24" />
            </Carousel>
        </section>
    )
}