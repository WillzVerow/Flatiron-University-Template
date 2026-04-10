import { Container } from '@/components/container'
import { Award, Calendar, Clock, BarChart3, Zap, CalendarDays, Users, Layers, DollarSign } from 'lucide-react'
import { type ReactNode } from 'react'

interface Stat {
    icon: ReactNode
    title: string
    description: string
}

const stats: Stat[] = [
    {
        icon: <Award className="size-5" />,
        title: 'Qualification',
        description: 'Certificate',
    },
    {
        icon: <Calendar className="size-5" />,
        title: 'Duration',
        description: 'Full-time: 15 weeks | Part-time: 45 weeks',
    },
    {
        icon: <Clock className="size-5" />,
        title: 'Commitment',
        description: 'Full-time: 40 hours per week | Part-time: 20 hours per week',
    },
    {
        icon: <BarChart3 className="size-5" />,
        title: 'Skill Level',
        description: 'Beginner to Intermediate',
    },
    {
        icon: <Zap className="size-5" />,
        title: 'Delivery',
        description: 'Weekly mentorship, feedback, and support',
    },
    {
        icon: <CalendarDays className="size-5" />,
        title: 'Start Date',
        description: 'First Monday of each month',
    },
    {
        icon: <Users className="size-5" />,
        title: 'Led By',
        description: 'Experienced industry facilitators',
    },
    {
        icon: <Layers className="size-5" />,
        title: 'Features',
        description: 'Flexible schedules and small classes (8 max)',
    },
    {
        icon: <DollarSign className="size-5" />,
        title: 'Value',
        description: 'Affordable high-quality education',
    },
]

export function ProgramStats() {
    return (
        <section id="stats">
            <Container className="**:data-[slot=content]:py-0 border-t-0">
                <div className="@3xl:grid-cols-3 grid border-t">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.title}
                            className={`space-y-3 p-6 @3xl:p-8 ${index < 6 ? 'border-b' : ''} ${index % 3 !== 0 ? 'border-l' : ''}`}>
                            <div className="bg-primary/10 text-primary flex size-10 items-center justify-center rounded-lg">
                                {stat.icon}
                            </div>
                            <h3 className="text-foreground font-semibold">{stat.title}</h3>
                            <p className="text-muted-foreground text-sm">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
