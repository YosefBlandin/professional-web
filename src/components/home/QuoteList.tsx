'use client';

import { useTranslations } from 'next-intl';
import { useState, type ReactNode } from 'react';

// On phones only the first three quotes show until the visitor asks for the rest; CSS does the hiding.
export function QuoteList({ total, children }: { total: number; children: ReactNode }) {
    const t = useTranslations('testimonials');
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <div className="quotes" id="quotes" data-collapsed={!expanded}>
                {children}
            </div>
            <button
                className="btn btn-ghost btn-sm quotes-toggle"
                type="button"
                aria-controls="quotes"
                aria-expanded={expanded}
                onClick={() => setExpanded((value) => !value)}
            >
                {expanded ? t('showFewer') : t('showAll', { count: total })}
            </button>
        </>
    );
}
