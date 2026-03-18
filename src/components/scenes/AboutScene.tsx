'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { type StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { ScrollFadeSection } from '@/components/ScrollFadeSection';
import { FloatingCharacters } from '@/components/FloatingCharacters';

const aboutCharacters = [
    { char: '礼', position: 'top-[10%] right-[6%]', size: 'text-[7rem] md:text-[10rem]', delay: 0.2 },
];

interface AboutSceneProps {
    profileImage: StaticImageData;
}

const ctaVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.6,
        },
    },
};

const ctaItemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: 'easeOut' as const },
    },
};

export function AboutScene({ profileImage }: AboutSceneProps) {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="about" className="bg-card relative">
            <FloatingCharacters characters={aboutCharacters} color="tertiary" />

            <div className="min-h-screen flex items-center max-w-screen-2xl mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 w-full">
                    {/* Profile Image */}
                    <ScrollFadeSection direction="left" className="relative flex-shrink-0">
                        <motion.div
                            className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-tertiary blur-md"
                            initial={shouldReduceMotion ? { opacity: 0.3 } : { opacity: 0 }}
                            whileInView={{ opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                        />
                        <Image
                            src={profileImage}
                            alt="Yosef Blandin"
                            className="relative rounded-full max-w-xs lg:max-w-sm ring-2 ring-primary/30"
                        />
                    </ScrollFadeSection>

                    {/* Bio + CTAs */}
                    <div className="flex flex-col gap-6">
                        <ScrollFadeSection direction="right">
                            <h2 className="text-3xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] neon-text-primary">
                                Yosef Blandin
                            </h2>
                        </ScrollFadeSection>

                        <ScrollFadeSection direction="right" delay={0.15}>
                            <p className="text-foreground text-md lg:text-lg text-justify">
                                Frontend Engineer with 4+ years of experience
                                crafting high-performance UIs across multiple
                                industries. I specialize in translating complex
                                data into clean, intuitive interfaces — whether
                                it&apos;s real-time dashboards, trading insights,
                                or analytics platforms — using React, Next.js,
                                and TypeScript.
                            </p>
                        </ScrollFadeSection>

                        <ScrollFadeSection direction="right" delay={0.3}>
                            <p className="text-center text-sm lg:text-base tracking-wide">
                                <span className="neon-text-tertiary-light">
                                    Hablo Espa&ntilde;ol
                                </span>
                                <span className="text-muted-foreground mx-2">/</span>
                                <span className="neon-text-primary-light">
                                    I speak English
                                </span>
                                <span className="text-muted-foreground mx-2">/</span>
                                <span className="neon-text-accent-light">
                                    我说中文
                                </span>
                            </p>
                        </ScrollFadeSection>

                        <motion.div
                            className="flex gap-4 mt-2"
                            variants={shouldReduceMotion ? undefined : ctaVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={shouldReduceMotion ? undefined : ctaItemVariants}>
                                <Link href="https://www.upwork.com/freelancers/~0125393fa7ef0842c8?mp_source=share">
                                    <Button variant="neon-outline" className="cursor-pointer">
                                        Go to Upwork
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div variants={shouldReduceMotion ? undefined : ctaItemVariants}>
                                <Link href="https://www.linkedin.com/in/yosefblandin/">
                                    <Button variant="neon" className="cursor-pointer">
                                        Go to LinkedIn
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Closing gradient line */}
            <motion.div
                className="h-px bg-gradient-to-r from-primary via-accent to-tertiary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ originX: 0.5 }}
            />

            {/* Minimal footer */}
            <footer className="py-8 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Yosef Blandin
            </footer>
        </section>
    );
}
