'use client';

import { useTranslations } from 'next-intl';
import { MoonIcon, SunIcon } from './Icons';

export const THEME_KEY = 'yb-theme';

// Runs in <head> before paint so a saved theme never flashes the other one.
export const themeInitScript = `try{var t=localStorage.getItem('${THEME_KEY}');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export function ThemeToggle() {
    const t = useTranslations('nav');
    function toggle() {
        const root = document.documentElement;
        const current =
            root.getAttribute('data-theme') ??
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        const next = current === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
            localStorage.setItem(THEME_KEY, next);
        } catch {
            // Storage can be blocked; the theme still applies for this visit.
        }
    }

    return (
        <button className="icon-btn theme-btn" type="button" onClick={toggle} aria-label={t('toggleTheme')}>
            <MoonIcon className="moon" />
            <SunIcon className="sun" />
        </button>
    );
}
