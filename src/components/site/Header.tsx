'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Link, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { CloseIcon, MenuIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    { href: '/#work', key: 'work' },
    { href: '/#experience', key: 'experience' },
    { href: '/#testimonials', key: 'testimonials' },
    { href: '/#about', key: 'about' },
] as const;

// Links to the same page in the other language. A plain link: visitors are never redirected by browser language.
function LanguageSwitch({ className }: { className: string }) {
    const t = useTranslations('nav');
    const locale = useLocale();
    const pathname = usePathname();
    return (
        <div className={className} role="group" aria-label={t('language')}>
            {routing.locales.map((other) =>
                other === locale ? (
                    <span key={other} aria-current="true">
                        {other.toUpperCase()}
                    </span>
                ) : (
                    <Link key={other} href={pathname} locale={other} hrefLang={other} lang={other} title={t('switchTo')}>
                        {other.toUpperCase()}
                    </Link>
                ),
            )}
        </div>
    );
}

export function Header() {
    const t = useTranslations('nav');
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // While the menu sheet is open it behaves like a modal: the page behind is inert and doesn't scroll.
    useEffect(() => {
        if (!open) return;
        const background = [document.getElementById('main'), document.querySelector('.site-footer')];
        background.forEach((element) => element?.setAttribute('inert', ''));
        document.documentElement.classList.add('menu-open');

        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                menuButton.current?.focus();
            }
        };
        const closeOnDesktop = window.matchMedia('(min-width: 861px)');
        const onResize = () => closeOnDesktop.matches && setOpen(false);
        document.addEventListener('keydown', onKey);
        closeOnDesktop.addEventListener('change', onResize);

        return () => {
            background.forEach((element) => element?.removeAttribute('inert'));
            document.documentElement.classList.remove('menu-open');
            document.removeEventListener('keydown', onKey);
            closeOnDesktop.removeEventListener('change', onResize);
        };
    }, [open]);

    // A tap on a link or on the empty part of the sheet closes it.
    function onNavClick(event: MouseEvent<HTMLElement>) {
        const target = event.target as HTMLElement;
        if (target.closest('a') || target === event.currentTarget) setOpen(false);
    }

    return (
        <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
            <div className="wrap bar">
                <Link className="mark" href="/" aria-label={t('home')}>
                    Yosef <i>Blandin</i>
                </Link>
                <div className="bar-actions">
                    <nav className="nav" id="nav" data-open={open} aria-label={t('main')} onClick={onNavClick}>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                {t(item.key)}
                            </Link>
                        ))}
                        <Link className="btn btn-primary btn-sm nav-cta" href="/#contact">
                            {t('getInTouch')}
                        </Link>
                        <div className="nav-theme">
                            <span>{t('theme')}</span>
                            <ThemeToggle />
                        </div>
                        <div className="nav-theme">
                            <span>{t('language')}</span>
                            <LanguageSwitch className="lang-switch" />
                        </div>
                    </nav>
                    <LanguageSwitch className="lang-switch bar-lang" />
                    <div className="bar-theme">
                        <ThemeToggle />
                    </div>
                    <Link className="btn btn-primary btn-sm header-cta" href="/#contact">
                        {t('getInTouch')}
                    </Link>
                    <button
                        ref={menuButton}
                        className="icon-btn menu-btn"
                        type="button"
                        aria-controls="nav"
                        aria-expanded={open}
                        aria-label={open ? t('closeMenu') : t('openMenu')}
                        onClick={() => setOpen((value) => !value)}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
        </header>
    );
}
