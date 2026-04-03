import { cn } from '@/lib/utils'
import Image from 'next/image'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/furman-logo.svg"
            alt="Furman University Center for Innovative Leadership"
            width={280}
            height={100}
            className={cn('h-12 w-auto', className)}
            priority
        />
    )
}

export const LogoIcon = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/furman-logo.svg"
            alt="Furman University"
            width={40}
            height={40}
            className={cn('size-8', className)}
        />
    )
}
