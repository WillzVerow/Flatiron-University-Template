import type { Metadata } from 'next'
import { Header } from '@/components/header'
import FooterSection from '@/components/footer'

export const metadata: Metadata = {
    title: 'Furman University x Flatiron School — Tech Bootcamps',
    description: 'Hands-on bootcamps in AI & Data Science and Cybersecurity for Furman University students. Powered by Flatiron School.',
}

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Header />
            <main
                role="main"
                className="bg-background">
                {children}
            </main>
            <FooterSection />
        </>
    )
}