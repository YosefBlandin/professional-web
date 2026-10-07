'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef, useState } from 'react';
import type { Testimonial } from '@/content/testimonials';

export function QuoteCard({ testimonial }: { testimonial: Testimonial }) {
    const quote = useRef<HTMLQuoteElement>(null);
    const [overflows, setOverflows] = useState(false);
    const [expanded, setExpanded] = useState(false);

    // Measure once with the clamp applied; only long quotes get a toggle.
    useLayoutEffect(() => {
        const element = quote.current;
        if (element) setOverflows(element.scrollHeight - element.clientHeight > 4);
    }, []);

    return (
        <figure className={`quote${expanded ? '' : ' clamp'}`}>
            <blockquote ref={quote} lang={testimonial.lang}>
                {testimonial.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
            </blockquote>
            {overflows && (
                <button className="more" type="button" aria-expanded={expanded} onClick={() => setExpanded((value) => !value)}>
                    {expanded ? 'Show less' : 'Read more'}
                </button>
            )}
            <figcaption>
                <Image src={testimonial.image} alt="" width={44} height={44} />
                <span className="who">
                    <b>{testimonial.name}</b>
                    <span>{testimonial.position}</span>
                </span>
            </figcaption>
        </figure>
    );
}
