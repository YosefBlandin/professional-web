import { profile, siteUpdatedAt, siteUrl } from '@/content/profile';
import type { Project } from '@/content/projects';

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

// Serialise for a <script type="application/ld+json">; escaping `<` keeps "</script>" in content harmless.
export function jsonLdScript(data: object) {
    return { __html: JSON.stringify(data).replace(/</g, '\\u003c') };
}

export function homeJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebSite',
                '@id': websiteId,
                url: siteUrl,
                name: profile.name,
                inLanguage: 'en',
                publisher: { '@id': personId },
            },
            {
                '@type': 'ProfilePage',
                '@id': `${siteUrl}/#profile`,
                url: siteUrl,
                name: `${profile.name} | ${profile.title}`,
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

export function caseStudyJsonLd(project: Project) {
    const url = `${siteUrl}/work/${project.slug}`;
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
                image: `${url}/opengraph-image`,
                author: { '@id': personId },
                about: { '@type': 'Organization', name: project.company },
                keywords: project.tags.join(', '),
                inLanguage: 'en',
                dateModified: project.updatedAt,
                isPartOf: { '@id': websiteId },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
                    { '@type': 'ListItem', position: 2, name: 'Work', item: `${siteUrl}/#work` },
                    { '@type': 'ListItem', position: 3, name: project.title, item: url },
                ],
            },
        ],
    };
}
