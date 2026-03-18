'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/Marquee';
import { ScrollFadeSection } from '@/components/ScrollFadeSection';
import { FloatingCharacters } from '@/components/FloatingCharacters';
import { truncateWithEllipsis } from '@/lib/utils';

const testimonialCharacters = [
    { char: '仁', position: 'top-[20%] left-[5%]', size: 'text-[7rem] md:text-[10rem]', delay: 0.3 },
];

interface Testimonial {
    id: number;
    name: string;
    position: string;
    image: StaticImageData;
    text: string;
    date: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <article className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 hover:shadow-[var(--glow-accent)] transition-all duration-300">
            <p className="text-foreground text-sm mb-4 leading-relaxed">
                {truncateWithEllipsis(testimonial.text, 200)}
            </p>
            <div className="flex items-center gap-3">
                <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-10 h-10 object-cover"
                />
                <div>
                    <span className="text-primary font-semibold text-sm block">
                        {testimonial.name}
                    </span>
                    <span className="text-muted-foreground text-xs">
                        {testimonial.position}
                    </span>
                </div>
            </div>
        </article>
    );
}

interface TestimonialsSceneProps {
    testimonials: Testimonial[];
}

export function TestimonialsScene({ testimonials }: TestimonialsSceneProps) {
    const row1 = testimonials.slice(0, 4);
    const row2 = testimonials.slice(4);

    return (
        <section id="testimonials" className="bg-card py-20 overflow-hidden relative">
            <FloatingCharacters characters={testimonialCharacters} color="accent" />

            <ScrollFadeSection className="max-w-screen-2xl mx-auto px-4 mb-12">
                <div className="flex items-center gap-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/30" />
                    <h2 className="text-2xl lg:text-3xl font-bold text-center font-[family-name:var(--font-space-grotesk)]">
                        What People Say
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/30" />
                </div>
            </ScrollFadeSection>

            <div className="flex flex-col gap-6 mb-16">
                <Marquee direction="left" speed={35}>
                    {row1.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </Marquee>

                <Marquee direction="right" speed={40}>
                    {row2.map((t) => (
                        <TestimonialCard key={t.id} testimonial={t} />
                    ))}
                </Marquee>
            </div>

            <ScrollFadeSection className="max-w-screen-2xl mx-auto px-4 text-center">
                <p className="neon-text-primary text-2xl font-medium mb-2 font-[family-name:var(--font-space-grotesk)]">
                    Work ethic and commitment to excellence.
                </p>
                <p className="text-muted-foreground text-lg mb-6">
                    Strong relationships are built on trust and respect
                </p>
                <Link href="https://www.linkedin.com/in/yosefblandin/">
                    <Button variant="neon" className="h-12 px-8 cursor-pointer">
                        See more on LinkedIn
                    </Button>
                </Link>
            </ScrollFadeSection>
        </section>
    );
}
