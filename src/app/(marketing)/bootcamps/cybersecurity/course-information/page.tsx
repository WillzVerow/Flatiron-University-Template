'use client'

import Link from 'next/link'
import { Container } from '@/components/container'
import { ChevronLeft } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const courseOverview = {
    title: 'Course Overview',
    content: `Embark on a comprehensive program that takes you from a cybersecurity novice to a professional practitioner. This bootcamp covers everything from foundational concepts like computer networking and operating systems to advanced skills in penetration testing, threat intelligence, and incident response.

You'll learn cybersecurity professionals' tools and techniques, gaining hands-on experience with real-world applications. With a strong emphasis on practical learning, you'll apply your skills to solve complex security challenges, culminating in a capstone project demonstrating your professional readiness.

By the end of this bootcamp, you'll have a well-rounded portfolio across cybersecurity domains that will help showcase your cybersecurity skills and position you for success in any organization.`,
    highlights: [
        'Mentorship from world-class cybersecurity experts',
        'Small group classes (max 8 students)',
        '100% online programs',
    ],
    careerServices:
        "Career services is included with each capstone and bootcamp program. Designed by and for tech professionals, you'll experience a full technical interview process from start to finish, getting direct and personalized feedback each step of the way.",
    prereqs: 'No prior experience necessary. This bootcamp takes you from a complete beginner to industry-ready.',
}

const curriculum = [
    {
        title: 'Introduction to Cybersecurity',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "In this introduction to cybersecurity course, you'll learn about computer hardware, basic networking, and virtualization software. You'll explore computer components like the CPU, RAM, and storage, and gain hands-on experience with the Linux command line.",
        learnings: [
            'Identify components of computer hardware',
            'Identify common Linux commands',
            'Identify built-in security features of Windows and Linux',
            'Configure virtual machines',
        ],
    },
    {
        title: 'Introduction to Python',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "This introductory Python course equips you with essential programming skills for cybersecurity. You'll learn scripting basics, compiled vs. interpreted languages, algorithms, and data structures.",
        learnings: [
            'Apply the basics of programming language methodologies to real world scenarios',
            'Demonstrate foundational skills for scripting with Python',
        ],
    },
    {
        title: 'Operating Systems and Networking',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            'This course teaches you to secure computer networks and systems, covering Linux and Windows operating systems, computer networking, and troubleshooting techniques.',
        learnings: [
            'Demonstrate fundamental knowledge of computer networking diagrams',
            'Determine potential computer networking and operating system issues in cybersecurity scenarios',
        ],
    },
    {
        title: 'System Hardening',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            'This course enhances your Linux skills with advanced commands and techniques, covers Active Directory security, common threats, and mitigation strategies. It includes cloud computing fundamentals, data protection methods, encryption, and privacy regulations.',
        learnings: [
            'Identify mitigation strategies to protect against future attacks',
            'Implement knowledge of system hardening to a scenario',
        ],
    },
    {
        title: 'Threat Intelligence',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "This comprehensive cyber threat intelligence course covers the fundamentals of CTI and its role in cybersecurity. You'll explore real-world applications, threat intelligence models like MITRE ATT&CK, and analyze security incidents.",
        learnings: [
            'Outline a response to an attack using SIEM data',
            'Integrate GRC strategies in cybersecurity processes',
        ],
    },
    {
        title: 'SIEM and Threat Hunting',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "This course focuses on security incident detection and response, covering SIEM solutions, log analysis, and threat intelligence. You'll explore advanced SIEM features, threat hunting techniques, and vulnerability management.",
        learnings: [
            'Utilize SIEM solutions and threat hunting to solve a cybersecurity incident',
            'Integrate SIEM solutions to solve cybersecurity incidents',
        ],
    },
    {
        title: 'Security Architecture and Frameworks',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "This course covers secure architecture fundamentals, frameworks, and the consequences of insecure design. You'll learn to assess system vulnerabilities, understand secure network architecture, and explore zero-trust concepts.",
        learnings: [
            'Integrate knowledge of security architecture to identify vulnerabilities',
            'Identify mitigation strategies to protect against future attacks',
        ],
    },
    {
        title: 'Incident Response',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            'This course covers digital forensics, including malware recognition and evaluation, Python skills for API security, and memory forensics for Windows and Linux.',
        learnings: [
            'Identify mitigation strategies to protect against future attacks',
            'Conduct an investigation using best practices of digital forensics and incident response',
            'Implement best practices for API security',
        ],
    },
    {
        title: 'Penetration Testing',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "This comprehensive course teaches you to ethically exploit vulnerabilities and identify security weaknesses. You'll learn social engineering, reconnaissance, scanning, enumeration, and post-exploitation strategies.",
        learnings: [
            'Develop and log corrective action methodology to a system vulnerability',
            'Implement knowledge of nmap for penetration testing',
        ],
    },
    {
        title: 'Penetration Testing Applications',
        duration: 'FT: 1 week | PT: 3 weeks',
        description:
            "This course covers web application security, including common threats, secure coding, and penetration testing with industry tools. You'll master Active Directory attack methods and learn OT security best practices.",
        learnings: [
            'Develop and log corrective action methodology to a system vulnerability using industry standard techniques',
            'Implement a methodology for building secure mobile architecture',
        ],
    },
    {
        title: 'Cybersecurity Capstone',
        duration: 'FT: 5 weeks | PT: 15 weeks',
        description:
            'In this intensive capstone you will develop 3 different portfolio projects. You will be expected to frame your projects around solving a business problem, bringing all your skills together.',
        learnings: [
            'Analyze a network diagram',
            'Create an incident response plan',
            'Develop a security assessment including technical process and report',
        ],
    },
]

const tuitionInfo = {
    title: 'Tuition',
    tiers: [
        { name: 'Pay Upfront', price: '$9,900', detail: 'One-time payment' },
        { name: 'Pay as You Study', price: '$13,500', detail: '12 monthly payments of $1,125' },
        { name: 'Financed Tuition', price: '$14,900', detail: 'Monthly payments as low as $323' },
    ],
}

export default function CourseInformationPage() {
    return (
        <>
            <section className="overflow-hidden">
                <div className="relative">
                    <div
                        aria-hidden
                        className="h-14 lg:h-[73px]"
                    />

                    <Container className="border-b">
                        <div className="@4xl:px-10 mx-auto max-w-3xl px-4">
                            <Link
                                href="/bootcamps/cybersecurity"
                                className="text-muted-foreground hover:text-foreground mb-6 inline-flex items-center gap-1 text-sm transition-colors">
                                <ChevronLeft className="size-4" />
                                Cybersecurity Bootcamp
                            </Link>
                            <h1 className="text-foreground text-balance text-5xl font-semibold tracking-tight sm:text-6xl">Course Information</h1>
                            <p className="text-muted-foreground mt-6">
                                Everything you need to know about the Cybersecurity Bootcamp curriculum, modules, and tuition.
                            </p>

                            {/* Course Overview */}
                            <div className="mt-12 space-y-6">
                                <h2 className="text-foreground text-3xl font-semibold">{courseOverview.title}</h2>
                                <h3 className="text-foreground text-xl font-medium">From beginner to cybersecurity professional</h3>
                                {courseOverview.content.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-muted-foreground leading-relaxed">{paragraph}</p>
                                ))}
                                <div className="mt-6">
                                    <p className="text-foreground font-medium">The Furman // Flatiron School difference:</p>
                                    <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
                                        {courseOverview.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-6">
                                    <h3 className="text-foreground text-xl font-medium">Career services built-in</h3>
                                    <p className="text-muted-foreground mt-3 leading-relaxed">{courseOverview.careerServices}</p>
                                </div>
                                <p className="text-muted-foreground text-sm italic">Prerequisites: {courseOverview.prereqs}</p>
                            </div>

                            {/* Curriculum Accordion */}
                            <div className="mt-16 space-y-6">
                                <h2 className="text-foreground text-3xl font-semibold">Curriculum</h2>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="space-y-2">
                                    {curriculum.map((module, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`module-${index}`}
                                            className="data-[state=open]:bg-card data-[state=open]:ring-foreground/5 rounded-xl border-none px-6 py-1 data-[state=open]:shadow data-[state=open]:ring-1">
                                            <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-foreground font-medium">{module.title}</span>
                                                    <span className="text-muted-foreground bg-muted rounded-full px-2.5 py-0.5 text-xs">{module.duration}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <p className="text-muted-foreground mb-4">{module.description}</p>
                                                <p className="text-foreground mb-2 text-sm font-medium">What you&apos;ll learn:</p>
                                                <ul className="text-muted-foreground list-disc space-y-1.5 pl-5 text-sm">
                                                    {module.learnings.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>

                            {/* Tuition */}
                            <div className="mt-16 space-y-6 pb-8">
                                <h2 className="text-foreground text-3xl font-semibold">{tuitionInfo.title}</h2>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {tuitionInfo.tiers.map((tier, index) => (
                                        <div
                                            key={index}
                                            className="bg-card ring-foreground/5 rounded-xl p-6 shadow ring-1">
                                            <p className="text-muted-foreground text-sm font-medium">{tier.name}</p>
                                            <p className="text-foreground mt-2 text-2xl font-semibold">{tier.price}</p>
                                            <p className="text-muted-foreground mt-1 text-sm">{tier.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}
