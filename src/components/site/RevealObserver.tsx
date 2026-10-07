'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Adds motion to `.reveal` elements below the fold. Content is visible at rest; this never hides anything.
export function RevealObserver() {
    const pathname = usePathname();

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                }
            },
            { rootMargin: '0px 0px -10% 0px' },
        );

        document.querySelectorAll('.reveal').forEach((element) => {
            if (element.getBoundingClientRect().top > window.innerHeight) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [pathname]);

    return null;
}
