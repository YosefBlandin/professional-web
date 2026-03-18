'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

const directionOffsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
};

interface ScrollFadeSectionProps {
    children: React.ReactNode;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    amount?: number;
}

export function ScrollFadeSection({
    children,
    className,
    direction = 'up',
    delay = 0,
    amount = 0.3,
}: ScrollFadeSectionProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const offset = directionOffsets[direction];

    return (
        <motion.div
            className={cn(className)}
            initial={{ opacity: 0, ...offset }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    );
}
