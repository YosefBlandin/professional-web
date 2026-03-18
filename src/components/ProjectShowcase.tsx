'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { type StaticImageData } from 'next/image';
import { Button } from '@/components/ui/button';
import { ParallaxImage } from '@/components/ParallaxImage';
import { ScrollFadeSection } from '@/components/ScrollFadeSection';
import { cn } from '@/lib/utils';

interface Project {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    technologies: string[];
    link: string;
}

interface ProjectShowcaseProps {
    project: Project;
    index: number;
    isLast: boolean;
}

const tagContainerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.4,
        },
    },
};

const tagVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3, ease: 'easeOut' as const },
    },
};

export function ProjectShowcase({ project, index, isLast }: ProjectShowcaseProps) {
    const isEven = index % 2 === 0;
    const shouldReduceMotion = useReducedMotion();

    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            <div
                className={cn(
                    'flex flex-col lg:flex-row items-center gap-8 lg:gap-16 min-h-[60vh] py-16',
                    !isEven && 'lg:flex-row-reverse'
                )}
            >
                {/* Image Side */}
                <div className="w-full lg:w-[60%]">
                    <ParallaxImage
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl aspect-video w-full object-cover"
                        containerClassName="rounded-xl"
                        offset={30}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-[40%] flex flex-col gap-4">
                    <ScrollFadeSection direction={isEven ? 'right' : 'left'}>
                        <h3 className="text-2xl lg:text-4xl font-bold font-[family-name:var(--font-space-grotesk)]">
                            {project.title}
                        </h3>
                    </ScrollFadeSection>

                    <ScrollFadeSection direction="up" delay={0.2}>
                        <p className="text-muted-foreground text-md lg:text-lg">
                            {project.description}
                        </p>
                    </ScrollFadeSection>

                    <motion.div
                        className="flex flex-wrap gap-2"
                        variants={shouldReduceMotion ? undefined : tagContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {project.technologies.map((tech) => (
                            <motion.span
                                key={tech}
                                variants={shouldReduceMotion ? undefined : tagVariants}
                                className="text-xs px-2 py-1 rounded-full border border-primary/30 text-primary/80"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>

                    <ScrollFadeSection direction="up" delay={0.5}>
                        <div className="flex gap-4 mt-2">
                            <Link href={project.link}>
                                <Button variant="neon-outline" className="cursor-pointer">
                                    Visit
                                </Button>
                            </Link>
                            <Link href={`/${project.id}`}>
                                <Button variant="neon" className="cursor-pointer">
                                    Know more
                                </Button>
                            </Link>
                        </div>
                    </ScrollFadeSection>
                </div>
            </div>

            {/* Divider between projects */}
            {!isLast && (
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mx-auto"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ originX: 0.5 }}
                />
            )}
        </div>
    );
}
