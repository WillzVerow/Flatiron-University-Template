import { CohortDates } from './sections/cohort-dates'
import { ProgramStats } from './sections/program-stats'
import { UpcomingCohorts } from '../_shared/upcoming-cohorts'
import { Tuition } from '../_shared/tuition'
import { TuitionComparator } from '../_shared/tuition-comparator'
import { FAQs } from '../_shared/faqs'
import { CallToAction } from '@/components/call-to-action'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export const metadata = {
    title: 'Cybersecurity Bootcamp — Furman University x Flatiron School',
    description: 'From beginner to cybersecurity professional in 15 weeks. Mentorship from world-class experts, small group classes, 100% online.',
}

export default function CybersecurityPage() {
    return (
        <>
            <section
                id="home"
                className="bg-muted/50">
                <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 text-center sm:pt-44 sm:pb-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-foreground text-balance text-5xl font-semibold sm:text-6xl lg:tracking-tight">From beginner to cybersecurity professional</h1>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Mentorship from world-class cybersecurity experts. Small group classes (max 8 students). 100% online programs. No prior experience required.</p>
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <Button
                                asChild
                                variant="outline"
                                size="lg">
                                <Link href="/bootcamps/cybersecurity/course-information">
                                    Course Information
                                    <ArrowRight className="ml-1 size-4" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg">
                                <Link href="/apply">Apply Now</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <CohortDates />
            <ProgramStats />
            <UpcomingCohorts />
            <Tuition />
            <TuitionComparator />
            <FAQs />
            <CallToAction />
        </>
    )
}
