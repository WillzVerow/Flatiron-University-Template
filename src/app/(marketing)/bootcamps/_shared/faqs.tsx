import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { Container } from '@/components/container'

export function FAQs() {
    const faqItems = [
        {
            group: 'Admissions',
            items: [
                {
                    id: 'adm-1',
                    question: 'What is the next step after I apply?',
                    answer: "1. Take our short 15-minute cognitive assessment — no studying or technical skills required. 2. You'll receive an email from Genius to create an account and register through our course catalog.",
                },
                {
                    id: 'adm-2',
                    question: 'Do I need prior experience to enroll?',
                    answer: 'Nope! The Essentials program is designed for complete beginners — no experience required. A high school diploma or GED is the only educational requirement.',
                },
                {
                    id: 'adm-3',
                    question: 'Do I need a college degree to enroll?',
                    answer: 'No, you do not need a college degree to enroll in our programs. A high school diploma or GED is the only educational requirement. Our programs are designed to be accessible to a wide range of students with diverse backgrounds.',
                },
                {
                    id: 'adm-4',
                    question: 'Can I skip the intro program and go directly to Foundations?',
                    answer: 'It is occasionally possible, but we highly recommend most students do not skip Essentials. It covers a tremendous amount of material that is necessary for proceeding in the following programs. If you would like to be considered, you\'ll be required to submit materials demonstrating your proficiency.',
                },
            ],
        },
        {
            group: 'Payment & Financing',
            items: [
                {
                    id: 'pay-1',
                    question: 'Can I use FAFSA or financial aid?',
                    answer: 'No, we do not accept FAFSA or traditional financial aid. However, we offer loans for full-time students, interest-free installment plans, and upfront payment options.',
                },
                {
                    id: 'pay-2',
                    question: 'Can I use military benefits?',
                    answer: 'Our programs are not currently set up to accept military benefits such as the GI Bill directly. However, if your military benefits can be arranged to pay the school directly, this may be an option in rare cases.',
                },
                {
                    id: 'pay-3',
                    question: 'How is my monthly financed payment determined?',
                    answer: 'Your monthly financed payment is based on your credit score. The amount shown reflects the lowest possible rate. To explore your financing options, schedule a call with an admissions representative.',
                },
            ],
        },
        {
            group: 'Program',
            items: [
                {
                    id: 'prog-1',
                    question: 'Are the programs entirely online?',
                    answer: 'Yes, all programs are delivered entirely online. The experience includes live interactive virtual classes, collaborative projects, and comprehensive support services.',
                },
                {
                    id: 'prog-2',
                    question: 'Will I earn a certificate or credential?',
                    answer: 'Yes! Upon completion, you will receive a Credly digital badge from Furman and a completion certificate from Flatiron School. These can be displayed on LinkedIn, portfolio websites, and email signatures.',
                },
            ],
        },
    ]

    return (
        <section id="faqs">
            <Container className="md:**:data-[slot=content]:py-0">
                <div className="grid max-md:gap-8 md:grid-cols-5 md:divide-x">
                    <div className="max-w-lg max-md:px-6 md:col-span-2 md:p-10 lg:p-12">
                        <h2 className="text-foreground text-4xl font-semibold">FAQs</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Your questions answered</p>
                        <p className="text-muted-foreground mt-6 max-md:hidden">
                            Can&apos;t find what you&apos;re looking for? {' '}
                            <Link
                                href="/info-session"
                                className="text-primary font-medium hover:underline">
                                Schedule a call
                            </Link>
                            {' '}with our admissions team.
                        </p>
                    </div>

                    <div className="space-y-12 md:col-span-3 md:px-4 md:pb-4 md:pt-10 lg:pt-12">
                        {faqItems.map((item) => (
                            <div
                                className="space-y-4"
                                key={item.group}>
                                <h3 className="text-foreground pl-6 text-lg font-semibold">{item.group}</h3>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="-space-y-1">
                                    {item.items.map((item) => (
                                        <AccordionItem
                                            key={item.id}
                                            value={item.id}
                                            className="data-[state=open]:bg-card data-[state=open]:ring-foreground/5 group peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow data-[state=open]:ring-1">
                                            <AccordionTrigger className="not-group-last:border-b cursor-pointer rounded-none text-base transition-none hover:no-underline data-[state=open]:border-transparent hover:[&>svg]:translate-y-1 hover:data-[state=open]:[&>svg]:translate-y-0">{item.question}</AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-muted-foreground text-base">{item.answer}</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="text-muted-foreground mt-12 px-6 md:hidden">
                    Can&apos;t find what you&apos;re looking for? {' '}
                    <Link
                        href="/info-session"
                        className="text-primary font-medium hover:underline">
                        Schedule a call
                    </Link>
                    {' '}with our admissions team.
                </p>
            </Container>
        </section>
    )
}
