'use client'

import { AnimatePresence, motion } from 'motion/react'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Container } from '@/components/container'

const logoGroups = [
    {
        label: 'energy leaders',
        logos: [
            { name: 'ExxonMobil', src: '/logos/01-exxonmobil.png' },
            { name: 'Energy Transfer', src: '/logos/04-energy-transfer.png' },
            { name: 'Phillips 66', src: '/logos/13-phillips66.png' },
            { name: 'ConocoPhillips', src: '/logos/17-conocophillips.png' },
        ],
    },
    {
        label: 'tech giants',
        logos: [
            { name: 'Google', src: '/logos/21-google.png' },
            { name: 'Apple', src: '/logos/25-apple.png' },
            { name: 'Meta', src: '/logos/23-meta.png' },
            { name: 'Microsoft', src: '/logos/33-microsoft.png' },
        ],
    },
    {
        label: 'finance and real estate',
        logos: [
            { name: 'Charles Schwab', src: '/logos/08-charles-schwab.png' },
            { name: 'CBRE', src: '/logos/06-cbre.png' },
            { name: 'McKesson', src: '/logos/02-mckesson.png' },
            { name: 'Kimberly-Clark', src: '/logos/11-kimberly-clark.png' },
        ],
    },
    {
        label: 'aerospace and innovation',
        logos: [
            { name: 'NASA', src: '/logos/18-nasa.png' },
            { name: 'SpaceX', src: '/logos/19-spacex.png' },
            { name: 'Tesla', src: '/logos/15-tesla.png' },
            { name: 'OpenAI', src: '/logos/32-openai.png' },
        ],
    },
    {
        label: 'entertainment leaders',
        logos: [
            { name: 'Netflix', src: '/logos/22-netflix.png' },
            { name: 'Spotify', src: '/logos/24-spotify.png' },
            { name: 'YouTube', src: '/logos/20-youtube.png' },
            { name: 'Walt Disney', src: '/logos/36-disney.png' },
        ],
    },
    {
        label: 'gaming studios',
        logos: [
            { name: 'Activision', src: '/logos/29-activision.png' },
            { name: 'Ubisoft', src: '/logos/30-ubisoft.png' },
            { name: 'Blizzard', src: '/logos/31-blizzard.png' },
            { name: 'Twitch', src: '/logos/26-twitch.png' },
        ],
    },
    {
        label: 'digital platforms',
        logos: [
            { name: 'TikTok', src: '/logos/27-tiktok.png' },
            { name: 'GitHub', src: '/logos/28-github.png' },
            { name: 'Airbnb', src: '/logos/34-airbnb.png' },
            { name: 'Oracle', src: '/logos/14-oracle.png' },
        ],
    },
    {
        label: 'travel and services',
        logos: [
            { name: 'American Airlines', src: '/logos/05-american-airlines.png' },
            { name: 'Southwest', src: '/logos/07-southwest.png' },
            { name: 'AECOM', src: '/logos/12-aecom.png' },
            { name: 'Tenet Health', src: '/logos/09-tenet-health.png' },
        ],
    },
    {
        label: 'hardware and telecom',
        logos: [
            { name: 'Dell Technologies', src: '/logos/16-dell.png' },
            { name: 'Texas Instruments', src: '/logos/10-texas-instruments.png' },
            { name: 'AT&T', src: '/logos/03-att.png' },
            { name: 'Sony', src: '/logos/35-sony.png' },
        ],
    },
]

export function LogoCloud() {
    const [currentGroup, setCurrentGroup] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentGroup((prev) => (prev + 1) % logoGroups.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <Container className="bg-background lg:**:data-[slot=content]:py-16">
            <div className="mx-auto mb-12 max-w-xl text-balance text-center md:mb-16">
                <p className="text-muted-foreground mt-4 md:text-lg">
                    Our graduates go on to work at{' '}
                    {logoGroups.map((group, i) => (
                        <span
                            key={group.label}
                            className={`transition-colors duration-200 ${i === currentGroup ? 'text-foreground' : ''}`}>
                            {group.label}
                            {i < logoGroups.length - 1 ? ', ' : ''}
                        </span>
                    ))}
                    <span className={`transition-colors duration-200 ${currentGroup === logoGroups.length - 1 ? 'text-foreground' : ''}`}>
                        {' '}and more
                    </span>
                </p>
            </div>
            <div className="perspective-dramatic mx-auto grid max-w-5xl grid-cols-2 items-center gap-8 md:h-10 md:grid-cols-4">
                <AnimatePresence
                    initial={false}
                    mode="popLayout">
                    {logoGroups[currentGroup].logos.map((logo, i) => (
                        <motion.div
                            key={`${currentGroup}-${i}`}
                            className="flex items-center justify-center"
                            initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -24, filter: 'blur(6px)', scale: 0.5 }}
                            transition={{ delay: i * 0.05, duration: 1, type: 'spring', bounce: 0.2 }}>
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={120}
                                height={40}
                                className="h-6 w-auto object-contain md:h-8"
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </Container>
    )
}
