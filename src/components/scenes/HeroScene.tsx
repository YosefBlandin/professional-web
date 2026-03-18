'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AnimatedText } from '@/components/AnimatedText';
import { FloatingCharacters } from '@/components/FloatingCharacters';
import { cn } from '@/lib/utils';

const heroCharacters = [
    { char: '道', position: 'top-[10%] right-[8%]', size: 'text-[8rem] md:text-[12rem]', delay: 0 },
    { char: '德', position: 'bottom-[15%] left-[5%]', size: 'text-[7rem] md:text-[10rem]', delay: 0.7 },
];

export function HeroScene() {
    const sectionRef = useRef<HTMLElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const bgTextY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

    // ~0.04s * 13 chars + 0.3s buffer
    const subtitleDelay = 0.85;
    const valueDelay = subtitleDelay + 0.5;

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated gradient mesh background */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    background:
                        'radial-gradient(ellipse at 20% 50%, var(--primary), transparent 50%), radial-gradient(ellipse at 80% 50%, var(--accent), transparent 50%)',
                    backgroundSize: '200% 200%',
                    animation: shouldReduceMotion ? 'none' : 'gradient-mesh 8s ease infinite',
                }}
            />

            {/* Floating Chinese characters */}
            <FloatingCharacters characters={heroCharacters} color="primary" />

            {/* Orbiting rings */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                    opacity: shouldReduceMotion ? 0.08 : contentOpacity,
                    // Scale down the opacity for the rings
                }}
            >
                <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full border border-primary/10"
                    style={{
                        animation: shouldReduceMotion ? 'none' : 'orbit 20s linear infinite',
                        boxShadow: '0 0 15px rgba(255, 51, 51, 0.08)',
                    }}
                />
                <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[700px] md:h-[700px] lg:w-[950px] lg:h-[950px] rounded-full border border-accent/8"
                    style={{
                        animation: shouldReduceMotion ? 'none' : 'orbit 30s linear infinite reverse',
                        boxShadow: '0 0 15px rgba(180, 74, 255, 0.06)',
                    }}
                />
                <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] lg:w-[1200px] lg:h-[1200px] rounded-full border border-tertiary/5"
                    style={{
                        animation: shouldReduceMotion ? 'none' : 'orbit 40s linear infinite',
                        boxShadow: '0 0 15px rgba(0, 255, 136, 0.04)',
                    }}
                />
            </motion.div>

            {/* Calligraphic brush strokes (SVG) */}
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                aria-hidden="true"
                preserveAspectRatio="none"
                viewBox="0 0 1200 800"
            >
                <defs>
                    <filter id="stroke-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="6" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Stroke 1: flowing curve from top-left to center-right */}
                <path
                    d="M 50 150 Q 200 80, 400 200 T 800 300"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    opacity="0.3"
                    filter="url(#stroke-glow)"
                    style={{
                        strokeDasharray: 1200,
                        strokeDashoffset: shouldReduceMotion ? 0 : undefined,
                        ['--stroke-length' as string]: 1200,
                        animation: shouldReduceMotion ? 'none' : 'stroke-draw 2.5s ease-out 0.5s forwards',
                    }}
                    strokeDashoffset={shouldReduceMotion ? 0 : 1200}
                />
                {/* Stroke 2: sweeping curve from bottom-right to center-left */}
                <path
                    d="M 1150 650 Q 900 720, 700 580 T 300 500"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.25"
                    filter="url(#stroke-glow)"
                    style={{
                        strokeDasharray: 1100,
                        strokeDashoffset: shouldReduceMotion ? 0 : undefined,
                        ['--stroke-length' as string]: 1100,
                        animation: shouldReduceMotion ? 'none' : 'stroke-draw 2.5s ease-out 1s forwards',
                    }}
                    strokeDashoffset={shouldReduceMotion ? 0 : 1100}
                />
            </svg>

            {/* Background ENGINEER text with parallax */}
            <motion.p
                aria-hidden="true"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] lg:text-[18rem] font-black font-[family-name:var(--font-space-grotesk)] text-accent/[0.04] select-none pointer-events-none whitespace-nowrap"
                style={{ y: shouldReduceMotion ? 0 : bgTextY }}
            >
                ENGINEER
            </motion.p>

            {/* Main content */}
            <motion.div
                className="relative z-10 flex flex-col items-center gap-4 px-4"
                style={{
                    opacity: shouldReduceMotion ? 1 : contentOpacity,
                    y: shouldReduceMotion ? 0 : contentY,
                }}
            >
                <AnimatedText
                    text="Yosef Blandin"
                    as="h1"
                    className="text-4xl md:text-6xl lg:text-8xl font-black font-[family-name:var(--font-space-grotesk)] neon-text-primary text-center"
                />

                <motion.p
                    className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium text-center"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' as const, delay: subtitleDelay }}
                >
                    Software Engineer
                </motion.p>

                <motion.p
                    className="text-sm md:text-base lg:text-lg text-muted-foreground/70 text-center max-w-xl"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' as const, delay: valueDelay }}
                >
                    Building performant interfaces for data-driven products
                </motion.p>
            </motion.div>

            {/* Scroll indicator */}
            <div
                className={cn(
                    'absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground',
                    !shouldReduceMotion && 'animate-scroll-hint'
                )}
            >
                <ChevronDown className="size-6" />
            </div>
        </section>
    );
}
