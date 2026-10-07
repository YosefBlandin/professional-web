const base = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    'aria-hidden': true,
} as const;

export function MoonIcon({ className }: { className?: string }) {
    return (
        <svg {...base} className={className}>
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
        </svg>
    );
}

export function SunIcon({ className }: { className?: string }) {
    return (
        <svg {...base} className={className}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
    );
}

export function MenuIcon() {
    return (
        <svg {...base}>
            <path d="M4 8h16M4 16h16" />
        </svg>
    );
}

export function CloseIcon() {
    return (
        <svg {...base}>
            <path d="M6 6l12 12M18 6L6 18" />
        </svg>
    );
}
