import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3E2C1B',
                    foreground: '#F5F1E8',
                },
                accent: {
                    DEFAULT: '#D2A56E',
                    foreground: '#3E2C1B',
                },
                background: {
                    DEFAULT: '#F5F1E8',
                    foreground: '#444444',
                },
                secondary: {
                    DEFAULT: '#444444',
                    foreground: '#F5F1E8',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [animate],
} satisfies Config;

export default config;
