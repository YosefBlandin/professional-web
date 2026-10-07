import { getContent } from '@/content';
import { siteUpdatedAt, siteUrl } from '@/content/profile';
import type { Project } from '@/content/projects';
import type { Locale } from '@/i18n/routing';
import { localizedPath } from './metadata';

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

// Serialise for a <script type="application/ld+json">; escaping `<` keeps "</script>" in content harmless.
export function jsonLdScript(data: object) {
    return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}

export function homeJsonLd(locale: Locale) {
    const { profile } = getContent(locale);
    const pageUrl = `${siteUrl}${localizedPath('/', locale) === '/' ? '' : localizedPath('/', locale)}`;
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': websiteId,
                url: siteUrl,
                name: profile.name,
                inLanguage: ['en', 'es'],
                publisher: { '@id': personId },
            },
            {
                '@type': 'ProfilePage',
                '@id': `${pageUrl}#profile`,
                url: pageUrl,
                name: `${profile.name} | ${profile.title}`,
                inLanguage: locale,
                isPartOf: { '@id': websiteId },
                dateModified: siteUpdatedAt,
                mainEntity: { '@id': personId },
            },
            {
                '@type': 'Person',
                '@id': personId,
                name: profile.name,
                jobTitle: profile.title,
                description: profile.description,
                url: siteUrl,
                image: `${siteUrl}/yosef-blandin.jpg`,
                email: `mailto:${profile.email}`,
                sameAs: [profile.links.linkedin, profile.links.github, profile.links.upwork],
                knowsAbout: [
                    'React Native',
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Mobile payments',
                    'NFC tap-to-pay',
                    'Data visualization',
                ],
                knowsLanguage: ['es', 'en'],
                homeLocation: {
                    '@type': 'Place',
                    address: {
                        '@type': 'PostalAddress',
                        addressLocality: 'Rosario',
                        addressRegion: 'Santa Fe',
                        addressCountry: 'AR',
                    },
                },
                worksFor: { '@type': 'Organization', name: 'AIDONIC' },
            },
        ],
    };
}

export function caseStudyJsonLd(project: Project, locale: Locale, labels: { home: string; work: string }) {
    const url = `${siteUrl}${localizedPath(`/work/${project.slug}`, locale)}`;
    const home = `${siteUrl}${localizedPath('/', locale) === '/' ? '' : localizedPath('/', locale)}`;
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'CreativeWork',
                '@id': `${url}#work`,
                url,
                name: project.title,
                headline: project.seoTitle,
                description: project.seoDescription,
                // OG image routes always carry the locale segment, including English.
                image: `${siteUrl}/${locale}/work/${project.slug}/opengraph-image`,
                author: { '@id': personId },
                about: { '@type': 'Organization', name: project.company },
                keywords: project.tags.join(', '),
                inLanguage: locale,
                dateModified: project.updatedAt,
                isPartOf: { '@id': websiteId },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: labels.home, item: home },
                    { '@type': 'ListItem', position: 2, name: labels.work, item: `${home}#work` },
                    { '@type': 'ListItem', position: 3, name: project.title, item: url },
                ],
            },
        ],
    };
}
