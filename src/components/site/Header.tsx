'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { CloseIcon, MenuIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
    { href: '/#work', label: 'Work' },
    { href: '/#experience', label: 'Experience' },
    { href: '/#testimonials', label: 'Testimonials' },
    { href: '/#about', label: 'About' },
];

export function Header() {
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
                <Link className="mark" href="/" aria-label="Yosef Blandin, home">
                    Yosef <i>Blandin</i>
                </Link>
                <div className="bar-actions">
                    <nav className="nav" id="nav" data-open={open} aria-label="Main" onClick={onNavClick}>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                        <Link className="btn btn-primary btn-sm nav-cta" href="/#contact">
                            Get in touch
                        </Link>
                        <div className="nav-theme">
                            <span>Theme</span>
                            <ThemeToggle />
                        </div>
                    </nav>
                    <div className="bar-theme">
                        <ThemeToggle />
                    </div>
                    <Link className="btn btn-primary btn-sm header-cta" href="/#contact">
                        Get in touch
                    </Link>
                    <button
                        ref={menuButton}
                        className="icon-btn menu-btn"
                        type="button"
                        aria-controls="nav"
                        aria-expanded={open}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((value) => !value)}
                    >
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>
            </div>
        </header>
    );
}
