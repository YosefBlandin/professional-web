import type { MetadataRoute } from 'next';
import { siteUpdatedAt, siteUrl } from '@/content/profile';
import { projects } from '@/content/projects';
import { routing } from '@/i18n/routing';
import { languageAlternates, localizedPath } from '@/lib/metadata';

// Every page is listed once per language, each entry carrying the hreflang alternates.
export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        { path: '/', lastModified: siteUpdatedAt, changeFrequency: 'monthly' as const, priority: 1 },
        ...projects.map((project) => ({
            path: `/work/${project.slug}`,
            lastModified: project.updatedAt,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        })),
    ];
    const absolute = (path: string) => `${siteUrl}${path === '/' ? '' : path}`;

    return pages.flatMap(({ path, ...entry }) =>
        routing.locales.map((locale) => ({
            url: absolute(localizedPath(path, locale)),
            ...entry,
            alternates: {
                languages: Object.fromEntries(
                    Object.entries(languageAlternates(path)).map(([lang, href]) => [lang, absolute(href)]),
                ),
            },
        })),
    );
}
