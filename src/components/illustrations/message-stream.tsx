'use client'

import { SmilePlus } from 'lucide-react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

// --- Avatars ---
const WILLZ_AVATAR = '/headshot-willz.jpeg'
const BROOKS_AVATAR = '/headshot-brooks.jpeg'
const HEADSHOT_2 = '/headshot-2.png'

const quickEmojis = ['👍', '❤️', '😂', '🎯', '💡', '🙌']

// --- People ---
type Person = { name: string; avatar: string }

const PEOPLE: Record<string, Person> = {
    john: { name: 'John', avatar: HEADSHOT_2 },
    willz: { name: 'Willz', avatar: WILLZ_AVATAR },
    brooks: { name: 'Brooks', avatar: BROOKS_AVATAR },
}

// --- Conversation Script ---
type MessageStep =
    | {
          type: 'message'
          sender: string
          time: string
          text: string
          reactions: { emoji: string; count: number }[]
      }
    | { type: 'typing'; sender: string; duration: number }
    | { type: 'pause'; duration: number }

const CONVERSATION: MessageStep[] = [
    {
        type: 'message',
        sender: 'john',
        time: '9:14 am',
        text: "Welcome to the cohort! I'm your student advisor — here to help with anything from scheduling to study strategies.",
        reactions: [
            { emoji: '🙌', count: 4 },
            { emoji: '💜', count: 2 },
        ],
    },
    { type: 'pause', duration: 800 },
    { type: 'typing', sender: 'willz', duration: 1400 },
    {
        type: 'message',
        sender: 'willz',
        time: '9:18 am',
        text: "Thanks John! Quick question — I'm juggling a full course load at Furman. Any tips on managing the bootcamp alongside classes?",
        reactions: [{ emoji: '💪', count: 3 }],
    },
    { type: 'pause', duration: 600 },
    { type: 'typing', sender: 'john', duration: 1600 },
    {
        type: 'message',
        sender: 'john',
        time: '9:20 am',
        text: "Great question! Let's set up a 1-on-1 this week. We'll map out a study plan that fits your schedule perfectly.",
        reactions: [
            { emoji: '🔥', count: 5 },
            { emoji: '🙏', count: 3 },
        ],
    },
    { type: 'pause', duration: 800 },
    { type: 'typing', sender: 'brooks', duration: 1800 },
    {
        type: 'message',
        sender: 'brooks',
        time: '9:25 am',
        text: 'John helped me land my first tech interview last month. The career coaching here is next level.',
        reactions: [
            { emoji: '🚀', count: 8 },
            { emoji: '🎉', count: 4 },
        ],
    },
    { type: 'pause', duration: 600 },
    { type: 'typing', sender: 'john', duration: 1400 },
    {
        type: 'message',
        sender: 'john',
        time: '9:28 am',
        text: "So proud of you Brooks! Reminder for everyone — resume review sessions are open. Book your slot in the portal.",
        reactions: [{ emoji: '✅', count: 6 }],
    },
]

const LOOP_PAUSE = 4000

// --- Interactive Reactions ---
const Reaction = ({ emoji, initialCount }: { emoji: string; initialCount: number }) => {
    const [count, setCount] = useState(initialCount)
    return (
        <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-foreground/5 hover:bg-foreground/10 active:scale-95 flex h-7 cursor-pointer items-center gap-1 rounded-full px-2 transition-all">
            <span className="text-base">{emoji}</span>
            <span className="text-xs font-medium">{count}</span>
        </button>
    )
}

const Picker = () => {
    const [open, setOpen] = useState(false)
    const [added, setAdded] = useState<{ emoji: string; count: number }[]>([])

    return (
        <>
            {added.map((a) => (
                <Reaction key={a.emoji} emoji={a.emoji} initialCount={a.count} />
            ))}
            <div className="relative">
                <button
                    onClick={() => setOpen(!open)}
                    className="bg-foreground/5 hover:bg-foreground/10 active:scale-95 flex h-7 cursor-pointer items-center gap-1 rounded-full px-2 transition-all">
                    <SmilePlus className="size-4" />
                </button>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 4 }}
                            transition={{ duration: 0.15 }}
                            className="bg-card ring-border shadow-black/10 absolute bottom-full left-0 z-10 mb-2 flex gap-1 rounded-xl p-1.5 shadow-lg ring-1">
                            {quickEmojis.map((emoji) => (
                                <button
                                    key={emoji}
                                    onClick={() => {
                                        setAdded((prev) => {
                                            const e = prev.find((a) => a.emoji === emoji)
                                            if (e) return prev.map((a) => (a.emoji === emoji ? { ...a, count: a.count + 1 } : a))
                                            return [...prev, { emoji, count: 1 }]
                                        })
                                        setOpen(false)
                                    }}
                                    className="cursor-pointer rounded-lg p-1 text-lg transition-colors hover:bg-black/5 hover:scale-110 active:scale-90">
                                    {emoji}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

// --- Main Component ---
export const MessageStreamIllustration = () => {
    const [visibleSteps, setVisibleSteps] = useState<number[]>([])
    const [activeTyping, setActiveTyping] = useState<string | null>(null)
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])
    const scrollRef = useRef<HTMLDivElement>(null)

    // Sequencer engine — schedules all timeouts in one pass, loops forever
    useEffect(() => {
        function runSequence() {
            setVisibleSteps([])
            setActiveTyping(null)

            const timeouts: ReturnType<typeof setTimeout>[] = []
            let cumulativeDelay = 600

            CONVERSATION.forEach((step, index) => {
                if (step.type === 'typing') {
                    const showTyping = setTimeout(() => setActiveTyping(step.sender), cumulativeDelay)
                    timeouts.push(showTyping)
                    cumulativeDelay += step.duration
                    const hideTyping = setTimeout(() => setActiveTyping(null), cumulativeDelay)
                    timeouts.push(hideTyping)
                } else if (step.type === 'pause') {
                    cumulativeDelay += step.duration
                } else {
                    const showStep = setTimeout(() => {
                        setVisibleSteps((prev) => [...prev, index])
                    }, cumulativeDelay)
                    timeouts.push(showStep)
                    cumulativeDelay += 400
                }
            })

            const restart = setTimeout(runSequence, cumulativeDelay + LOOP_PAUSE)
            timeouts.push(restart)
            timeoutsRef.current = timeouts
        }

        runSequence()
        return () => timeoutsRef.current.forEach(clearTimeout)
    }, [])

    // Auto-scroll on new messages or typing indicator
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth',
            })
        }
    }, [visibleSteps, activeTyping])

    return (
        <div aria-hidden className="min-w-xs">
            <style>{`
                @keyframes msg-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes bounce-dot {
                    0%, 60%, 100% { transform: translateY(0); }
                    30% { transform: translateY(-3px); }
                }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>

            <div className="relative">
                {/* Top fade */}
                <div
                    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12"
                    style={{ background: 'linear-gradient(to bottom, #F5F2EF 0%, #F5F2EF 20%, transparent 100%)' }}
                />
                <div ref={scrollRef} className="hide-scrollbar h-96 overflow-y-auto">
                <div className="flex flex-col gap-4 pt-12">
                    {CONVERSATION.map((step, index) => {
                        if (step.type !== 'message' || !visibleSteps.includes(index)) return null
                        const person = PEOPLE[step.sender]
                        return (
                            <div key={index} className="animate-[msg-in_0.45s_ease-out_both]">
                                <div className="grid grid-cols-[auto_1fr] gap-2.5">
                                    <div className="before:border-foreground/20 shadow-black/6.5 relative size-9 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border">
                                        <Image src={person.avatar} alt={person.name} width={56} height={56} />
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex items-end gap-1">
                                            <div className="text-sm font-medium">{person.name}</div>
                                            <div className="text-foreground/50 text-xs">{step.time}</div>
                                        </div>
                                        <div>
                                            <div className="text-foreground/65 text-sm/6">{step.text}</div>
                                            <div className="text-muted-foreground mt-3 flex flex-wrap gap-2">
                                                {step.reactions.map((r) => (
                                                    <Reaction key={r.emoji} emoji={r.emoji} initialCount={r.count} />
                                                ))}
                                                <Picker />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    {/* Typing indicator */}
                    {activeTyping && (
                        <div className="animate-[msg-in_0.35s_ease-out_both]">
                            <div className="grid grid-cols-[auto_1fr] gap-2.5">
                                <div className="before:border-foreground/20 shadow-black/6.5 relative size-9 overflow-hidden rounded-full shadow-md before:absolute before:inset-0 before:rounded-full before:border">
                                    <Image src={PEOPLE[activeTyping].avatar} alt={PEOPLE[activeTyping].name} width={56} height={56} />
                                </div>
                                <div className="space-y-1.5">
                                    <div className="text-sm font-medium">{PEOPLE[activeTyping].name}</div>
                                    <div className="bg-foreground/5 inline-flex items-center gap-1 rounded-2xl px-4 py-2.5">
                                        <span className="bg-foreground/40 inline-block size-1.5 animate-[bounce-dot_1.4s_ease-in-out_infinite] rounded-full" />
                                        <span className="bg-foreground/40 inline-block size-1.5 animate-[bounce-dot_1.4s_ease-in-out_0.2s_infinite] rounded-full" />
                                        <span className="bg-foreground/40 inline-block size-1.5 animate-[bounce-dot_1.4s_ease-in-out_0.4s_infinite] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            </div>
        </div>
    )
}

export default MessageStreamIllustration
