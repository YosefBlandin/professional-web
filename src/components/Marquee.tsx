'use client';

import { cn } from '@/lib/utils';

interface MarqueeProps {
    children: React.ReactNode;
    direction?: 'left' | 'right';
    speed?: number;
    pauseOnHover?: boolean;
    className?: string;
}

export function Marquee({
    children,
    direction = 'left',
    speed = 30,
    pauseOnHover = true,
    className,
}: MarqueeProps) {
    return (
        <div className={cn('overflow-hidden', className)}>
            <div
                className={cn(
                    'flex w-max gap-6',
                    pauseOnHover && '[&:hover]:animation-play-state-paused'
                )}
                style={{
                    animation: `marquee ${speed}s linear infinite`,
                    animationDirection: direction === 'right' ? 'reverse' : 'normal',
                    willChange: 'transform',
                }}
            >
                {children}
                {children}
            </div>
        </div>
    );
}
