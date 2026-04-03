import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Container } from '@/components/container'
import Image from 'next/image'

export function CallToAction() {
    return (
        <section className="relative">
            <Container className="**:data-[slot=content]:py-16">
                <span></span>
            </Container>
            <Container className="**:data-[slot=content]:py-0 **:data-[slot=content]:bg-linear-to-b **:data-[slot=content]:from-[#3A1C59] **:data-[slot=content]:to-[#562B83] relative">
                <div
                    aria-hidden
                    className="dither-xs mask-x-from-65% mask-x-to-95% mask-y-from-75% pointer-events-none absolute inset-0 mix-blend-darken 2xl:mx-auto 2xl:max-w-7xl">
                    <div className="size-full">
                        <Image
                            src="https://images.unsplash.com/photo-1632314813226-fc0ac70d8569?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Students collaborating on tech projects"
                            className="size-full -scale-x-100 object-cover"
                            width={2224}
                            height={1589}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1520px"
                        />
                    </div>
                </div>
                <div
                    data-theme="dark"
                    className="relative overflow-hidden px-8 py-16 md:px-20 md:py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="relative">
                            <h2 className="text-white text-balance text-4xl font-semibold lg:text-5xl">Ready to Change the Game?</h2>
                            <p className="text-white/80 mb-8 mt-4 text-balance text-lg">Whether you want to analyze data, prevent the next cyber attack, or build the next AI model &mdash; we&apos;ll give you the skills to make it happen.</p>

                            <div className="flex flex-wrap justify-center gap-3">
                                <Button asChild className="bg-white text-[#562B83] hover:bg-white/90">
                                    <Link href="/apply">Apply Now</Link>
                                </Button>
                                <Button asChild variant="outline" className="border-white/50 bg-white/10 text-white hover:bg-white/20">
                                    <Link href="/info-session">Schedule a Call</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="border-b"></div>
        </section>
    )
}
