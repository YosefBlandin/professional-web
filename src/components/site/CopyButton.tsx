'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function CopyButton({ text, label, className = 'btn btn-ghost btn-sm' }: { text: string; label?: string; className?: string }) {
    const t = useTranslations('contact');
    const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

    function flash(next: 'copied' | 'failed') {
        setState(next);
        window.setTimeout(() => setState('idle'), 1800);
    }

    function fallback() {
        const area = document.createElement('textarea');
        area.value = text;
        area.setAttribute('readonly', '');
        area.style.position = 'fixed';
        area.style.opacity = '0';
        document.body.appendChild(area);
        area.select();
        try {
            flash(document.execCommand('copy') ? 'copied' : 'failed');
        } catch {
            flash('failed');
        }
        area.remove();
    }

    function copy() {
        if (navigator.clipboard?.writeText) {
            navigator.clipboard.writeText(text).then(() => flash('copied'), fallback);
        } else {
            fallback();
        }
    }

    return (
        <button className={className} type="button" onClick={copy} aria-live="polite">
            {state === 'copied' ? t('copied') : state === 'failed' ? t('selectAndCopy') : (label ?? t('copy'))}
        </button>
    );
}
