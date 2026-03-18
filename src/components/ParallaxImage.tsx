'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

interface ParallaxImageProps {
    src: StaticImageData | string;
    alt: string;
    className?: string;
    containerClassName?: string;
    offset?: number;
    sizes?: string;
}

export function ParallaxImage({
    src,
    alt,
    className,
    containerClassName,
    offset = 30,
    sizes,
}: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const shouldReduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

    return (
        <div ref={ref} className={cn('overflow-hidden', containerClassName)}>
            <motion.div style={{ y: shouldReduceMotion ? 0 : y }}>
                <Image
                    src={src}
                    alt={alt}
                    className={cn(className)}
                    sizes={sizes}
                />
            </motion.div>
        </div>
    );
}
