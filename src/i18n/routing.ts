import { defineRouting } from 'next-intl/routing';

// English lives at "/" and Spanish at "/es". Visitors are never redirected by browser language;
// they switch with the language links, and search engines get hreflang alternates.
export const routing = defineRouting({
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
    localeDetection: false,
    // hreflang is emitted in each page's metadata instead of a Link header.
    alternateLinks: false,
});

export type Locale = (typeof routing.locales)[number];
