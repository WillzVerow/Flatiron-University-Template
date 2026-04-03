'use client'
import Link from 'next/link'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, useMotionValueEvent } from 'motion/react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useMedia } from '@/hooks/use-media'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FeatureLink {
    href: string
    name: string
    description?: string
}

interface MobileLink {
    groupName?: string
    links?: FeatureLink[]
    name?: string
    href?: string
}

const features: FeatureLink[] = [
    {
        href: '/bootcamps/ai-data-science',
        name: 'AI & Data Science',
        description: 'Build models, analyze data, launch a tech career',
    },
    {
        href: '/bootcamps/cybersecurity',
        name: 'Cybersecurity',
        description: 'Learn to defend systems from real-world threats',
    },
]

const useCases: FeatureLink[] = [
    {
        href: '/experience',
        name: 'Student Experience',
        description: 'What your day-to-day looks like',
    },
    {
        href: '/instructors',
        name: 'Our Facilitators',
        description: 'Industry pros from Spotify, Citi, Deloitte',
    },
    {
        href: '/careers-support',
        name: 'Career Services',
        description: 'Job prep, resume help, and interview coaching',
    },
    {
        href: '/alumni',
        name: 'Alumni Stories',
        description: 'Hear from graduates who made the leap',
    },
]

const contentLinks: FeatureLink[] = [
    {
        name: 'About the Partnership',
        href: '/about',
    },
    {
        name: 'FAQ',
        href: '/faq',
    },
    { name: 'Schedule a Call', href: '/info-session' },
]

const mobileLinks: MobileLink[] = [
    {
        groupName: 'Programs',
        links: features,
    },
    {
        groupName: 'About',
        links: [...useCases, ...contentLinks],
    },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Apply Now', href: '/apply' },
]

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const isLarge = useMedia('(min-width: 64rem)')

    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setIsScrolled(latest > 0)
    })

    return (
        <header
            role="banner"
            data-state={isMobileMenuOpen ? 'active' : 'inactive'}
            {...(isScrolled && { 'data-scrolled': true })}>
            <div className={cn('in-data-scrolled:border-b in-data-scrolled:bg-background/50 in-data-scrolled:backdrop-blur fixed inset-x-0 top-0 z-50', !isLarge && 'h-14 overflow-hidden border-b', isMobileMenuOpen && 'bg-background/75 h-screen backdrop-blur')}>
                <div className="mx-auto max-w-6xl px-6">
                    <div className="relative flex flex-wrap items-center justify-between lg:py-5">
                        <div className="flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full max-lg:border-b">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            {isLarge && <NavMenu />}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {!isLarge && isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}

                        <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="ghost"
                                    className="rounded-full pr-2.5">
                                    <Link href="/apply">
                                        <span>Apply Now</span>
                                        <span className="*:size-3! shadow-xs bg-card ring-border flex size-5 rounded-full ring-1 *:m-auto">
                                            <ArrowRight className="size-4" />
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <nav
            role="navigation"
            className="w-full">
            <Accordion
                type="single"
                collapsible
                className="**:hover:no-underline -mx-4 mt-0.5 space-y-0.5">
                {mobileLinks.map((link, index) => {
                    if (link.groupName && link.links) {
                        return (
                            <AccordionItem
                                key={index}
                                value={link.groupName}
                                className="group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                                <AccordionTrigger className="**:font-normal! data-[state=open]:bg-foreground/5 flex items-center justify-between px-4 py-3 text-lg">{link.groupName}</AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <ul>
                                        {link.links.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <Link
                                                    href={feature.href}
                                                    onClick={closeMenu}
                                                    className="hover:bg-foreground/5 block rounded-lg px-4 py-3 text-lg">
                                                    {feature.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    }
                    return null
                })}
            </Accordion>
            {mobileLinks.map((link, index) => {
                if (link.name && link.href) {
                    return (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={closeMenu}
                            className="group relative block border-0 border-b py-4 text-lg">
                            {link.name}
                        </Link>
                    )
                }
                return null
            })}
        </nav>
    )
}

const NavMenu = () => {
    return (
        <NavigationMenu className="not-dark:**:data-[slot=navigation-menu-viewport]:shadow-foreground/5 **:data-[slot=navigation-menu-viewport]:bg-card **:data-[slot=navigation-menu-viewport]:-left-1.5 **:data-[slot=navigation-menu-viewport]:rounded-3xl data-[slot=navigation-menu-viewport]:top-1 max-lg:hidden">
            <NavigationMenuList className="gap-3">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-3xl grid grid-cols-3 divide-x p-1">
                        <div className="col-span-2 p-3">
                            <span className="text-muted-foreground ml-4 text-xs font-medium">Bootcamps</span>
                            <ul className="mt-2 grid grid-cols-2">
                                {features.map((feature, index) => (
                                    <ListItem
                                        key={index}
                                        href={feature.href}
                                        title={feature.name}
                                        description={feature.description}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="p-3">
                            <span className="text-muted-foreground ml-4 text-xs font-medium">Resources</span>
                            <ul className="mt-2">
                                {useCases.map((useCase, index) => (
                                    <ListItem
                                        key={index}
                                        href={useCase.href}
                                        title={useCase.name}
                                        description={useCase.description}
                                    />
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>About</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-lg grid grid-cols-2 divide-x p-1">
                        <div className="p-3">
                            <span className="text-muted-foreground ml-4 text-xs font-medium">The Experience</span>
                            <ul className="mt-2">
                                {useCases.map((useCase, index) => (
                                    <ListItem
                                        key={index}
                                        href={useCase.href}
                                        title={useCase.name}
                                        description={useCase.description}
                                    />
                                ))}
                            </ul>
                        </div>
                        <div className="p-3">
                            <span className="text-muted-foreground ml-4 text-xs font-medium">More</span>
                            <ul className="mt-2">
                                {contentLinks.map((content, index) => (
                                    <NavigationMenuLink
                                        key={index}
                                        asChild>
                                        <Link
                                            href={content.href}
                                            className="px-3">
                                            <div className="text-foreground text-sm font-medium">{content.name}</div>
                                        </Link>
                                    </NavigationMenuLink>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}>
                        <Link href="/alumni">Alumni</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}>
                        <Link href="/apply">Apply</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({ title, description, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string; title: string; description?: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="gap-0 px-4">
                    <div className="text-foreground text-sm font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-1 text-sm">{description}</p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}