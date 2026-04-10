import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import Link from 'next/link'
import { CardTitle, CardDescription } from '@/components/ui/card'
import { Container } from '@/components/container'

export function Tuition() {
    return (
        <section className="bg-muted/50">
            <Container className="**:data-[slot=content]:pt-12">
                <div className="mb-12 text-center">
                    <h2 className="text-foreground text-4xl font-semibold">Tuition</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Flexible payment options to fit your budget</p>
                </div>
                <div className="@4xl:grid-cols-3 grid border-y *:p-6">
                    <div className="@max-4xl:p-9 row-span-4 grid grid-rows-subgrid gap-8">
                        <div className="self-end">
                            <CardTitle className="text-lg font-medium">Pay Upfront</CardTitle>
                            <div className="text-muted-foreground mt-1 text-balance text-sm">Save the most with a single payment</div>
                        </div>

                        <div>
                            <span className="text-3xl font-semibold">$9,900</span>
                            <div className="text-muted-foreground text-sm">One-time payment</div>
                        </div>
                        <Button
                            asChild
                            variant="outline"
                            className="w-full">
                            <Link href="/apply">Apply Now</Link>
                        </Button>

                        <ul
                            role="list"
                            className="space-y-3 text-sm">
                            {['Best value — lowest total cost', 'Immediate full access', 'No monthly obligations', 'Industry-recognized certificate', 'Career services included'].map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2">
                                    <Check
                                        className="text-muted-foreground size-3"
                                        strokeWidth={3.5}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="ring-foreground/10 bg-card rounded-(--radius) @4xl:my-2 @max-4xl:mx-1 row-span-4 grid grid-rows-subgrid gap-8 border-transparent shadow-xl ring-1 backdrop-blur">
                        <div className="self-end">
                            <CardTitle className="text-lg font-medium">Pay as You Study</CardTitle>
                            <CardDescription className="text-muted-foreground mt-1 text-balance text-sm">Spread payments across the program duration</CardDescription>
                        </div>

                        <div>
                            <span className="text-3xl font-semibold">$13,500</span>
                            <div className="text-muted-foreground text-sm">12 monthly payments of $1,125</div>
                        </div>
                        <Button
                            asChild
                            className="w-full">
                            <Link href="/apply">Apply Now</Link>
                        </Button>

                        <ul
                            role="list"
                            className="space-y-3 text-sm">
                            {['Most popular option', 'No credit check required', 'Interest-free installments', 'Industry-recognized certificate', 'Career services included', 'Flexible monthly payments', 'Full access from day one'].map((item, index) => (
                                <li
                                    key={index}
                                    className="group flex items-center gap-2 first:font-medium">
                                    <Check
                                        className="text-muted-foreground size-3 group-first:hidden"
                                        strokeWidth={3.5}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="@max-4xl:p-9 row-span-4 grid grid-rows-subgrid gap-8">
                        <div className="self-end">
                            <CardTitle className="text-lg font-medium">Financed</CardTitle>
                            <CardDescription className="text-muted-foreground mt-1 text-balance text-sm">Extended financing through our lending partners</CardDescription>
                        </div>

                        <div>
                            <span className="text-3xl font-semibold">$14,900</span>
                            <div className="text-muted-foreground text-sm">As low as $323/mo</div>
                        </div>
                        <Button
                            asChild
                            variant="outline"
                            className="w-full">
                            <Link href="/apply">Apply Now</Link>
                        </Button>

                        <ul
                            role="list"
                            className="space-y-3 text-sm">
                            {['Lowest monthly payment', 'Extended repayment terms', 'Quick approval process', 'Industry-recognized certificate', 'Career services included', 'Start learning immediately', 'Dedicated support team'].map((item, index) => (
                                <li
                                    key={index}
                                    className="group flex items-center gap-2 first:font-medium">
                                    <Check
                                        className="text-muted-foreground size-3 group-first:hidden"
                                        strokeWidth={3.5}
                                    />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}
