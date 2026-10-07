export const profile = {
    name: 'Yosef Blandin',
    title: 'Mobile & Frontend Engineer',
    eyebrow: 'Mobile & Frontend Engineer · Fintech · Remote (UTC-3)',
    email: 'yosefleanb@gmail.com',
    description:
        'Mobile and frontend engineer with 5+ years shipping React, React Native, Next.js and TypeScript products, the last three in payments and banking.',
    links: {
        linkedin: 'https://www.linkedin.com/in/yosefblandin/',
        github: 'https://github.com/YosefBlandin',
        upwork: 'https://www.upwork.com/freelancers/~0125393fa7ef0842c8?mp_source=share',
    },
    facts: [
        { label: 'Based', value: 'Remote, UTC-3' },
        { label: 'Languages', value: 'Spanish (native) · English (professional working, B2)' },
        { label: 'Open source', value: 'Contributor to SWC (Rust)' },
        { label: 'Education', value: 'Platzi Frontend Developer, plus 65 certifications' },
    ],
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const proof = [
    { value: '5+', caption: 'years shipping web and mobile products' },
    { value: '500', caption: 'active users on a bank’s iOS and Android app' },
    { value: '14', caption: 'languages, including right-to-left Arabic' },
    { value: '8s→1.5s', caption: 'initial load on a client site, bounce rate down 13%' },
];
