import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar } from 'lucide-react'
import { Container } from '@/components/container'

const cohorts = [
    { date: 'May 4, 2026', format: 'Full-time | Part-time' },
    { date: 'June 1, 2026', format: 'Full-time | Part-time' },
    { date: 'July 6, 2026', format: 'Full-time | Part-time' },
    { date: 'August 3, 2026', format: 'Full-time | Part-time' },
    { date: 'September 7, 2026', format: 'Full-time | Part-time' },
    { date: 'October 5, 2026', format: 'Full-time | Part-time' },
    { date: 'November 2, 2026', format: 'Full-time | Part-time' },
    { date: 'December 7, 2026', format: 'Full-time | Part-time' },
]

export function UpcomingCohorts() {
    return (
        <section>
            <Container className="**:data-[slot=content]:py-0 **:data-[slot=content]:overflow-hidden">
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
                    <div className="flex flex-wrap items-end justify-between gap-4 px-2 pb-6 pt-16 lg:pb-12 lg:pt-24">
                        <div>
                            <h2 className="text-foreground max-w-xl text-balance text-4xl font-semibold lg:text-5xl">Upcoming Cohort Start Dates</h2>
                            <p className="text-muted-foreground mt-4 text-lg">New cohorts start the first Monday of every month.</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>
                    </div>

                    <div className="border-t">
                        <CarouselContent className="*:nth-3:border-r-0 *:bg-card *:not-dark:bg-card/50 *:p-8 *:pt-12 md:divide-x md:*:basis-1/2 lg:-mr-4 lg:*:basis-1/3">
                            {cohorts.map((cohort) => (
                                <CarouselItem
                                    key={cohort.date}
                                    className="grid-rows-subrgid row-span-2 grid gap-12">
                                    <div className="flex flex-col items-center justify-center gap-4 self-center text-center">
                                        <Calendar className="text-primary size-8" />
                                        <p className="text-foreground text-3xl font-semibold">{cohort.date}</p>
                                        <p className="text-muted-foreground text-sm">{cohort.format}</p>
                                        <Button
                                            asChild
                                            className="mt-2">
                                            <Link href="/apply">Apply Now</Link>
                                        </Button>
                                    </div>

                                    <p className="text-foreground/65 self-end text-balance text-center text-sm font-medium">
                                        <strong className="text-foreground font-medium">Limited to 8 students</strong> per cohort for personalized mentorship and hands-on learning.
                                    </p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </div>

                    <div className="pb-16 lg:pb-24" />
                </Carousel>
            </Container>
        </section>
    )
}
