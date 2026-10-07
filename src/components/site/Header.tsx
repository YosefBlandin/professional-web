'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { MenuIcon } from './Icons';
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

    useEffect(() => {
        if (!open) return;
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
                menuButton.current?.focus();
            }
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
            <div className="wrap bar">
                <Link className="mark" href="/" aria-label="Yosef Blandin, home">
                    Yosef <i>Blandin</i>
                </Link>
                <div className="bar-actions">
                    <nav className="nav" id="nav" data-open={open} aria-label="Main" onClick={() => setOpen(false)}>
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                        <Link className="btn btn-primary btn-sm" href="/#contact">
                            Get in touch
                        </Link>
                    </nav>
                    <ThemeToggle />
                    <button
                        ref={menuButton}
                        className="icon-btn menu-btn"
                        type="button"
                        aria-controls="nav"
                        aria-expanded={open}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        onClick={() => setOpen((value) => !value)}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>
        </header>
    );
}
