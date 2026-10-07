import type { Metadata, Viewport } from 'next';
import { Inter_Tight, JetBrains_Mono, Source_Serif_4 } from 'next/font/google';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { RevealObserver } from '@/components/site/RevealObserver';
import { themeInitScript } from '@/components/site/ThemeToggle';
import { profile, siteUrl } from '@/content/profile';
import './globals.css';

const sourceSerif = Source_Serif_4({
    variable: '--font-source-serif',
    subsets: ['latin'],
    style: ['normal', 'italic'],
    axes: ['opsz'],
});

const interTight = Inter_Tight({
    variable: '--font-inter-tight',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

const jetBrainsMono = JetBrains_Mono({
    variable: '--font-jetbrains-mono',
    subsets: ['latin'],
    weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: { default: `${profile.name} | ${profile.title}`, template: `%s | ${profile.name}` },
    description: profile.description,
    applicationName: profile.name,
    authors: [{ name: profile.name, url: profile.links.linkedin }],
    openGraph: { type: 'website', siteName: profile.name, locale: 'en_US' },
    twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f6f5f2' },
        { media: '(prefers-color-scheme: dark)', color: '#0e1424' },
    ],
};

export default function RootLayout({
    children,
    modal,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${sourceSerif.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
        >
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>
                <a className="skip" href="#main">
                    Skip to content
                </a>
                <Header />
                <main id="main">{children}</main>
                <Footer />
                {modal}
                <RevealObserver />
            </body>
        </html>
    );
}
