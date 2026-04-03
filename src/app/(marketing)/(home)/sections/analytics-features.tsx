import { Users, GraduationCap, Briefcase } from 'lucide-react'
import { MapIllustration } from '@/components/illustrations/map-illustration'
import { VisualizationIllustration } from '@/components/illustrations/visualization-illustration'
import { Container } from '@/components/container'

export function AnalyticsFeatures() {
    return (
        <section>
            <Container>
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-4 text-center">
                        <span className="text-foreground font-mono text-sm uppercase">
                            <span className="text-muted-foreground">[02]</span> The Furman // Flatiron Difference
                        </span>
                        <h2 className="text-foreground mt-6 text-balance text-4xl font-semibold lg:text-5xl">More than a bootcamp. A full support system.</h2>
                        <p className="text-muted-foreground text-balance text-lg">From day one to completion, you&apos;ll have access to facilitators, student services, and career coaching. You&apos;ll never do it alone.</p>
                    </div>
                </div>
            </Container>
            <Container className="**:data-[slot=content]:py-0">
                <div className="relative">
                    <div className="@4xl:grid-cols-2 @4xl:*:p-8 @5xl:*:p-12 @max-4xl:divide-y @4xl:divide-x grid border-b *:p-4">
                        <div className="row-span-2 grid grid-rows-subgrid gap-8">
                            <div className="mask-radial-from-35% @4xl:-mx-12 relative self-center">
                                <MapIllustration />
                            </div>
                            <div className="mx-auto max-w-sm text-center">
                                <h3 className="text-balance font-semibold">Student Experience</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Our student services team is with you from enrollment to graduation. Their only mission is helping you achieve life-changing results.</p>
                            </div>
                        </div>
                        <div className="row-span-2 grid grid-rows-subgrid gap-8">
                            <div className="@4xl:px-8 mx-auto w-full max-w-md self-center">
                                <VisualizationIllustration />
                            </div>

                            <div className="relative z-10 mx-auto max-w-sm text-center">
                                <h3 className="text-balance font-semibold">Hands-On Learning</h3>
                                <p className="text-muted-foreground mt-3 text-balance">Every bootcamp is project-based. You&apos;ll build real applications, analyze real data, and solve real problems — not just watch lectures.</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:*:nth-3:border-r-0 @4xl:*:p-8 @5xl:*:p-12 @max-4xl:*:nth-3:border-b-0 @max-4xl:*:nth-2:border-r-0 @max-4xl:divide-y @4xl:grid-cols-3 relative grid grid-cols-2 divide-x *:p-4">
                        <div className="space-y-1.5">
                            <Users className="stroke-primary size-4 fill-indigo-500/25" />
                            <h3 className="mt-3 font-medium">Expert Facilitators</h3>
                            <p className="text-muted-foreground line-clamp-2 text-sm">Our facilitators are industry pros with years of experience at companies like Spotify, Citi, and Deloitte.</p>
                        </div>
                        <div className="space-y-1.5">
                            <GraduationCap className="stroke-primary size-4 fill-indigo-500/25" />
                            <h3 className="mt-3 font-medium">Earn While You Learn</h3>
                            <p className="text-muted-foreground line-clamp-2 text-sm">Get credentialed tech skills alongside your Furman degree. No need to choose between school and career training.</p>
                        </div>
                        <div className="space-y-1.5">
                            <Briefcase className="stroke-primary size-4 fill-indigo-500/25" />
                            <h3 className="mt-3 font-medium">Career Services</h3>
                            <p className="text-muted-foreground line-clamp-2 text-sm">Resume reviews, mock interviews, and job placement support to help you land your first role in tech.</p>
                        </div>
                        <div className="space-y-1.5 md:hidden">
                            <Briefcase className="stroke-primary size-4 fill-indigo-500/25" />
                            <h3 className="mt-3 font-medium">Career Services</h3>
                            <p className="text-muted-foreground line-clamp-2 text-sm">Resume reviews, mock interviews, and job placement support to help you land your first role in tech.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}