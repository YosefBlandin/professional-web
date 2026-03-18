import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
    variable: '--font-space-grotesk',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Yosef Blandin | Frontend Engineer',
    description:
        'Frontend Engineer with 4+ years of experience building performant, resilient frontend systems aligned with long-term vision and measurable outcomes.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
            >
                <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
                    <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4 py-4">
                        <Link href="/" className="text-xl font-bold font-[family-name:var(--font-space-grotesk)] neon-text-primary">
                            Yosef Blandin
                        </Link>
                        <nav className="hidden sm:flex gap-6">
                            <a
                                href="#projects"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Projects
                            </a>
                            <a
                                href="#testimonials"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                Testimonials
                            </a>
                            <a
                                href="#about"
                                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                                About
                            </a>
                        </nav>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                </header>
                {children}
            </body>
        </html>
    );
}
