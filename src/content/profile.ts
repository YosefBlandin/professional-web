export const profile = {
    name: 'Yosef Blandin',
    title: 'Mobile & Frontend Engineer',
    location: 'Rosario, Argentina',
    timezone: 'Remote (UTC-3)',
    email: 'yosefleanb@gmail.com',
    // 140–160 characters: shown as the home meta description and in social previews.
    description:
        'Mobile and frontend engineer in Rosario, Argentina. 5+ years building React Native, React and Next.js apps, the last three for payments and banking.',
    links: {
        linkedin: 'https://www.linkedin.com/in/yosefblandin/',
        github: 'https://github.com/YosefBlandin',
        upwork: 'https://www.upwork.com/freelancers/~0125393fa7ef0842c8?mp_source=share',
    },
    facts: [
        { label: 'Based', value: 'Rosario, Argentina · Remote (UTC-3)' },
        { label: 'Languages', value: 'Spanish (native) · English (professional working, B2)' },
        { label: 'Open source', value: 'Contributor to SWC (Rust)' },
        { label: 'Education', value: 'Platzi Frontend Developer, plus 65 certifications' },
    ],
};

export const productionHost = 'yosefblandin.com';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${productionHost}`;

// Bump when page content changes; feeds sitemap lastmod and ProfilePage dateModified.
export const siteUpdatedAt = '2026-10-07';

export const proof = [
    { value: '5+', caption: 'years shipping web and mobile products' },
    { value: '500', caption: 'active users on a bank’s iOS and Android app' },
    { value: '14', caption: 'languages, including right-to-left Arabic' },
    { value: '8s→1.5s', caption: 'initial load on a client site, bounce rate down 13%' },
];
