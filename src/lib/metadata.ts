import type { Metadata } from 'next';
import { profile } from '@/content/profile';
import { routing, type Locale } from '@/i18n/routing';

const ogLocale: Record<Locale, string> = { en: 'en_US', es: 'es_AR' };

// English is unprefixed ("/work/x"); other locales get a prefix ("/es/work/x").
export function localizedPath(path: string, locale: Locale) {
    if (locale === routing.defaultLocale) return path;
    return path === '/' ? `/${locale}` : `/${locale}${path}`;
}

export function languageAlternates(path: string) {
    return {
        ...Object.fromEntries(routing.locales.map((locale) => [locale, localizedPath(path, locale)])),
        'x-default': localizedPath(path, routing.defaultLocale),
    };
}

// Next merges metadata per top-level key, so a page that sets `openGraph` or `twitter` replaces the
// layout's object entirely. Building every page's metadata here keeps those objects complete.
export function pageMetadata({
    locale,
    title,
    description,
    path,
    absoluteTitle = false,
}: {
    locale: Locale;
    title: string;
    description: string;
    path: string;
    absoluteTitle?: boolean;
}): Metadata {
    const socialTitle = absoluteTitle ? title : `${title} | ${profile.name}`;
    const url = localizedPath(path, locale);
    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        alternates: { canonical: url, languages: languageAlternates(path) },
        openGraph: {
            type: 'website',
            siteName: profile.name,
            locale: ogLocale[locale],
            alternateLocale: routing.locales.filter((other) => other !== locale).map((other) => ogLocale[other]),
            url,
            title: socialTitle,
            description,
        },
        twitter: { card: 'summary_large_image', title: socialTitle, description },
    };
}
