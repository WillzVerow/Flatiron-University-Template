'use client'
import { Plus, Minus } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Container } from '@/components/container'

export function Manifesto() {
    const [isFull, setIsFull] = useState(false)
    return (
        <section>
            <Container className="max-lg:**:data-[slot=content]:px-6 border-t-0">
                <div
                    data-state={isFull ? 'full' : 'collapsed'}
                    className="relative mx-auto max-w-2xl">
                    <motion.div
                        className={cn('relative overflow-hidden', !isFull && 'mask-b-from-45%')}
                        initial={{ height: '22rem' }}
                        animate={{ height: isFull ? 'auto' : '22rem' }}
                        exit={{ height: '22rem' }}>
                        <div className="text-muted-foreground space-y-4 text-xl *:leading-relaxed md:text-2xl">
                            <p>
                                Companies are rethinking how they hire. Over <strong className="text-foreground font-medium">70% of hiring managers</strong> now prioritize skills over traditional degrees. The tech industry doesn&apos;t just want credentials — it wants people who can <strong className="text-foreground font-medium">build, analyze, and solve real problems</strong>.
                            </p>
                            <p>
                                That&apos;s why Furman University partnered with <strong className="text-foreground font-medium">Flatiron School</strong> — a leader in tech education with <strong className="text-foreground font-medium">20,000+ careers launched</strong> and an <strong className="text-foreground font-medium">8:1 student-to-teacher ratio</strong>.
                            </p>
                            <p>
                                Our bootcamps in <strong className="text-foreground font-medium">AI &amp; Data Science</strong> and <strong className="text-foreground font-medium">Cybersecurity</strong> are built for Furman students who want hands-on tech skills without leaving campus. Expert-led, project-based, and designed to get you <strong className="text-foreground font-medium">job-ready</strong>.
                            </p>
                            <p>
                                From day one, you&apos;ll have access to <strong className="text-foreground font-medium">dedicated facilitators</strong>, a student services team, and <strong className="text-foreground font-medium">career support</strong> that follows you from enrollment to your first offer. You won&apos;t do this alone.
                            </p>
                            <p>
                                Whether you want to build the next AI model, analyze data for Fortune 500 companies, or defend systems from cyber threats — this is where you <strong className="text-foreground font-medium">start</strong>.
                            </p>
                        </div>
                    </motion.div>
                    <div className="group relative mt-6 w-fit">
                        <CardDecorator className="group-hover:scale-115 border-primary size-2" />
                        <Button
                            onClick={() => setIsFull(!isFull)}
                            className="flex rounded pr-2.5"
                            variant="ghost"
                            size="sm">
                            <span>Read {isFull ? 'Less' : 'More'}</span>
                            {isFull ? (
                                <Minus
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50 duration-300"
                                />
                            ) : (
                                <Plus
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50 duration-300 group-hover:rotate-90"
                                />
                            )}
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

const CardDecorator = ({ className }: { className?: string }) => (
    <>
        <span className={cn('border-primary rounded-tl-xs absolute -left-px -top-px block size-2 border-l border-t', className)}></span>
        <span className={cn('border-primary rounded-tr-xs absolute -right-px -top-px block size-2 border-r border-t', className)}></span>
        <span className={cn('border-primary rounded-bl-xs absolute -bottom-px -left-px block size-2 border-b border-l', className)}></span>
        <span className={cn('border-primary rounded-br-xs absolute -bottom-px -right-px block size-2 border-b border-r', className)}></span>
    </>
)