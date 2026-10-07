import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Experience, Skills } from '@/components/home/Experience';
import { Hero } from '@/components/home/Hero';
import { Testimonials } from '@/components/home/Testimonials';
import { Work } from '@/components/home/Work';
import { getContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { homeJsonLd, jsonLdScript } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const { profile } = getContent(locale);
    return pageMetadata({
        locale,
        title: `${profile.name} | ${profile.title}`,
        absoluteTitle: true,
        description: profile.description,
        path: '/',
    });
}

export default async function Home({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(homeJsonLd(locale))} />
            <Hero />
            <Work />
            <Experience />
            <Skills />
            <Testimonials />
            <About />
            <Contact />
        </>
    );
}
