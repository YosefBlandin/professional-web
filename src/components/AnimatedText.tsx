'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
    text: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
    staggerDelay?: number;
    delay?: number;
    once?: boolean;
}

const containerVariants = {
    hidden: {},
    visible: (delay: number) => ({
        transition: {
            staggerChildren: 0.04,
            delayChildren: delay,
        },
    }),
};

const charVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        rotateX: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut' as const,
        },
    },
};

export function AnimatedText({
    text,
    className,
    as: Tag = 'h1',
    delay = 0,
    once = true,
}: AnimatedTextProps) {
    const shouldReduceMotion = useReducedMotion();
    const MotionTag = motion.create(Tag);

    if (shouldReduceMotion) {
        return <Tag className={className}>{text}</Tag>;
    }

    return (
        <MotionTag
            className={cn(className)}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once }}
            custom={delay}
            aria-label={text}
        >
            {text.split('').map((char, i) => (
                <motion.span
                    key={`${char}-${i}`}
                    variants={charVariants}
                    style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
                    aria-hidden="true"
                >
                    {char}
                </motion.span>
            ))}
        </MotionTag>
    );
}
