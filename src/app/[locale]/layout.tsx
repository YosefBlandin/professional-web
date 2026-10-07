import type { Metadata, Viewport } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { RevealObserver } from '@/components/site/RevealObserver';
import { themeInitScript } from '@/components/site/ThemeToggle';
import { getContent } from '@/content';
import { siteUrl } from '@/content/profile';
import { routing } from '@/i18n/routing';
import { fontVariables } from '../fonts';
import '../globals.css';

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) return {};
    const { profile } = getContent(locale);
    return {
        metadataBase: new URL(siteUrl),
        title: { default: `${profile.name} | ${profile.title}`, template: `%s | ${profile.name}` },
        description: profile.description,
        applicationName: profile.name,
        authors: [{ name: profile.name, url: profile.links.linkedin }],
        openGraph: { type: 'website', siteName: profile.name },
        twitter: { card: 'summary_large_image' },
    };
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#f6f5f2' },
        { media: '(prefers-color-scheme: dark)', color: '#0e1424' },
    ],
};

export default async function LocaleLayout({
    children,
    modal,
    params,
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();
    setRequestLocale(locale);
    const t = await getTranslations('nav');

    return (
        <html lang={locale} suppressHydrationWarning className={fontVariables}>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
            </head>
            <body>
                <NextIntlClientProvider>
                    <a className="skip" href="#main">
                        {t('skip')}
                    </a>
                    <Header />
                    <main id="main">{children}</main>
                    <Footer />
                    {modal}
                    <RevealObserver />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
