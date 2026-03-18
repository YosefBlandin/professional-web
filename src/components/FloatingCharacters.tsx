'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FloatingChar {
    char: string;
    position: string; // Tailwind positioning classes
    size?: string;
    delay?: number;
}

interface FloatingCharactersProps {
    characters: FloatingChar[];
    color?: 'primary' | 'accent' | 'tertiary';
    className?: string;
}

export function FloatingCharacters({
    characters,
    color = 'primary',
    className,
}: FloatingCharactersProps) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    return (
        <div ref={ref} className={cn('absolute inset-0 overflow-hidden pointer-events-none select-none', className)} aria-hidden="true">
            {characters.map((item, i) => (
                <FloatingChar
                    key={`${item.char}-${i}`}
                    char={item.char}
                    position={item.position}
                    size={item.size}
                    color={color}
                    delay={item.delay ?? i * 0.5}
                    scrollYProgress={scrollYProgress}
                    shouldReduceMotion={shouldReduceMotion}
                />
            ))}
        </div>
    );
}

function FloatingChar({
    char,
    position,
    size = 'text-[8rem] md:text-[10rem]',
    color,
    delay,
    scrollYProgress,
    shouldReduceMotion,
}: {
    char: string;
    position: string;
    size?: string;
    color: string;
    delay: number;
    scrollYProgress: MotionValue<number>;
    shouldReduceMotion: boolean | null;
}) {
    const y = useTransform(scrollYProgress, [0, 1], [-20, 20]);

    const colorClass = {
        primary: 'text-primary/[0.12]',
        accent: 'text-accent/[0.12]',
        tertiary: 'text-tertiary/[0.12]',
    }[color] ?? 'text-primary/[0.12]';

    return (
        <motion.span
            className={cn(
                'absolute font-black animate-neon-pulse',
                size,
                position,
                colorClass,
            )}
            style={{
                y: shouldReduceMotion ? 0 : y,
                animationDelay: `${delay}s`,
            }}
        >
            {char}
        </motion.span>
    );
}
