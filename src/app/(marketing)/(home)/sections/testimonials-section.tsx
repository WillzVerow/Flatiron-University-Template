import { Hulu } from '@/components/ui/svgs/hulu'
import { Tailwindcss } from '@/components/ui/svgs/tailwindcss'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Container } from '@/components/container'
import { YVES_AVATAR, MESCHAC_AVATAR, BERNARD_AVATAR, GLODIE_AVATAR, ADAM_AVATAR, SHADCN_AVATAR, THEO_AVATAR, MICKY_AVATAR } from '@/lib/const'

const TESTIMONIALS = [
    {
        name: 'Ruth Burger',
        role: 'Cybersecurity Bootcamp, Class of 2023',
        avatar: 'https://cdn.prod.website-files.com/68077536052048843745de64/689e5ca1cc1654e6dba46cf5_Ruth%20Burger.jpeg',
        testimonial: 'Don\u2019t ever give up on yourself. There will be many long days and even longer nights studying. It\u2019s not an easy program, but it\u2019s worth the blood, sweat, and tears when it\u2019s over.',
    },
    {
        name: 'Kendall McNeil',
        role: 'Data Science Bootcamp, Class of 2023',
        avatar: 'https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0bc_Kendall%20McNeil.avif',
        testimonial: 'When I found Flatiron School, I was excited about the opportunity to level up my coding skills and gain a deeper understanding of machine learning and AI.',
    },
    {
        name: 'Tony Lopez',
        role: 'Cybersecurity Bootcamp, Class of 2022',
        avatar: 'https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0bd_Tony%20Lopez.avif',
        testimonial: 'My favorite part of the program was definitely the experience throughout, understanding something that was so foreign to me was an experience I hadn\u2019t really ever achieved through conventional education.',
    },
    {
        name: 'Chuck Utterback',
        role: 'Data Science Bootcamp, Class of 2021',
        avatar: 'https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0be_Chuck%20Utterback.avif',
        testimonial: 'Flatiron School had the best combination of course materials, commitment length, and remote flexibility. I chose the full-time data science bootcamp and focused all my energy there for six months.',
    },
    {
        name: 'Olivia Kasten',
        role: 'Software Engineering Mentor',
        avatar: 'https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0b4_Olivia%20Kasten.avif',
        testimonial: 'The best part of being a facilitator is watching students go from feeling completely lost to building projects they\u2019re genuinely proud of. That transformation is why I do this.',
    },
    {
        name: 'Aaron Dantley',
        role: 'Data Science Mentor',
        avatar: 'https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0b5_Aaron%20Dantley.avif',
        testimonial: 'Our students get the same hands-on experience that prepared me for roles at Kforce, Deloitte, and Accenture. The curriculum is designed around what employers actually need.',
    },
]

export function TestimonialsSection() {
    return (
        <section>
            <Container>
                <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                    <div className="mx-auto max-w-2xl space-y-4 text-center">
                        <span className="text-foreground font-mono text-sm uppercase">Alumni Stories</span>
                        <h2 className="text-foreground mt-6 text-balance text-4xl font-semibold lg:text-5xl">Don&apos;t take it from us</h2>
                        <p className="text-muted-foreground text-balance text-lg">Hear from graduates and facilitators who&apos;ve been through the program firsthand.</p>
                    </div>
                </div>
            </Container>
            <Container className="**:data-[slot=content]:py-0">
                <div className="lg:*:nth-4:rounded-r-none lg:*:nth-5:rounded-br-none lg:*:nth-6:rounded-b-none lg:*:nth-5:rounded-tl-none lg:*:nth-3:rounded-l-none lg:*:nth-2:rounded-tl-none lg:*:nth-2:rounded-br-none lg:*:nth-1:rounded-t-none grid gap-4 sm:grid-cols-2 sm:grid-rows-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-px">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard
                            key={index}
                            name={testimonial.name}
                            role={testimonial.role}
                            avatar={testimonial.avatar}
                            testimonial={testimonial.testimonial}
                        />
                    ))}

                    <div className="bg-card ring-foreground/5 shadow-black/6.5 row-start-1 flex flex-col justify-between gap-8 border border-transparent p-8 shadow-lg ring lg:col-start-1">
                        <div className="space-y-6">
                            <span className="text-foreground font-mono text-xs font-medium uppercase tracking-wider">Cybersecurity</span>
                            <p className="text-balance text-lg">&quot;Don&apos;t ever give up on yourself. There will be many long days and even longer nights studying. It&apos;s not an easy program, but it&apos;s worth the blood, sweat, and tears when it&apos;s over.&quot;</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="ring-foreground/10 aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring">
                                <img
                                    src="https://cdn.prod.website-files.com/68077536052048843745de64/689e5ca1cc1654e6dba46cf5_Ruth%20Burger.jpeg"
                                    alt="Ruth Burger"
                                    className="h-full w-full object-cover"
                                    width={460}
                                    height={460}
                                    loading="lazy"
                                />
                            </div>
                            <div className="space-y-px">
                                <p className="text-sm font-medium">Ruth Burger</p>
                                <p className="text-muted-foreground text-xs">Cybersecurity Bootcamp, Class of 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card ring-foreground/5 shadow-black/6.5 row-start-3 flex flex-col justify-between gap-8 border border-transparent p-8 shadow-lg ring sm:col-start-2 lg:row-start-2">
                        <div className="space-y-6">
                            <span className="text-foreground font-mono text-xs font-medium uppercase tracking-wider">Data Science</span>
                            <p className="text-balance text-lg">&quot;Flatiron School had the best combination of course materials, commitment length, and remote flexibility. I chose the full-time data science bootcamp and focused all my energy there for six months.&quot;</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="ring-foreground/10 aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring">
                                <img
                                    src="https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0be_Chuck%20Utterback.avif"
                                    alt="Chuck Utterback"
                                    className="h-full w-full object-cover"
                                    width={460}
                                    height={460}
                                    loading="lazy"
                                />
                            </div>
                            <div className="space-y-px">
                                <p className="text-sm font-medium">Chuck Utterback</p>
                                <p className="text-muted-foreground text-xs">Data Science Bootcamp, Class of 2021</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card ring-foreground/5 shadow-black/6.5 flex flex-col justify-between gap-8 border border-transparent p-8 shadow-lg ring sm:row-start-2 lg:col-start-3 lg:row-start-3 lg:rounded-bl-none lg:rounded-tr-none">
                        <div className="space-y-6">
                            <span className="text-foreground font-mono text-xs font-medium uppercase tracking-wider">Cybersecurity</span>
                            <p className="text-balance text-lg">&quot;My favorite part of the program was the experience throughout, understanding something that was so foreign to me was an experience I hadn&apos;t really ever achieved through conventional education.&quot;</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="ring-foreground/10 aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring">
                                <img
                                    src="https://cdn.prod.website-files.com/68077536052048843745de64/68077536052048843745e0bd_Tony%20Lopez.avif"
                                    alt="Tony Lopez"
                                    className="h-full w-full object-cover"
                                    width={460}
                                    height={460}
                                    loading="lazy"
                                />
                            </div>
                            <div className="space-y-px">
                                <p className="text-sm font-medium">Tony Lopez</p>
                                <p className="text-muted-foreground text-xs">Cybersecurity Bootcamp, Class of 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

type TestimonialCardProps = {
    name: string
    role: string
    avatar: string
    testimonial: string
}

const TestimonialCard = ({ name, role, avatar, testimonial }: TestimonialCardProps) => {
    return (
        <div className="ring-foreground/5 flex flex-col justify-end gap-8 border border-transparent p-8 ring">
            <p className='text-foreground self-end text-balance text-lg before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>{testimonial}</p>
            <div className="flex items-center gap-3">
                <div className="ring-foreground/10 aspect-square size-9 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring">
                    <img
                        src={avatar}
                        alt={name}
                        className="h-full w-full object-cover"
                        width={460}
                        height={460}
                        loading="lazy"
                    />
                </div>
                <div className="space-y-px">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-muted-foreground text-xs">{role}</p>
                </div>
            </div>
        </div>
    )
}