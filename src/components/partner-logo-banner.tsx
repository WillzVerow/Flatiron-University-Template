import Image from 'next/image'

export function PartnerLogoBanner() {
    return (
        <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center px-4 sm:bottom-8">
            <div className="flex items-center gap-6 rounded-2xl border border-white/20 bg-white/40 px-8 py-4 backdrop-blur-xl sm:gap-8 sm:px-12 sm:py-5">
                {/* Left: University logo */}
                <Image
                    src="/furman-logo.svg"
                    alt="Furman University"
                    width={280}
                    height={100}
                    className="h-14 w-auto sm:h-18"
                />

                {/* Vertical divider */}
                <div
                    className="h-14 w-px sm:h-18"
                    style={{ backgroundColor: 'var(--primary)' }}
                />

                {/* Right: "Powered by" + Flatiron logo (dynamically colored) */}
                <div className="flex flex-col items-start gap-1" role="img" aria-label="Powered by Flatiron School">
                    <span aria-hidden="true" className="text-muted-foreground text-base font-medium tracking-wide sm:text-lg">
                        Powered by
                    </span>
                    <div
                        aria-hidden="true"
                        className="h-9 w-48 sm:h-12 sm:w-64"
                        style={{
                            backgroundColor: 'var(--primary)',
                            maskImage: 'url(/flatiron-logo.svg)',
                            WebkitMaskImage: 'url(/flatiron-logo.svg)',
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'left center',
                            WebkitMaskPosition: 'left center',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
