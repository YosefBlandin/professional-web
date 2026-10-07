import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Experience, Skills } from '@/components/home/Experience';
import { Hero } from '@/components/home/Hero';
import { Testimonials } from '@/components/home/Testimonials';
import { Work } from '@/components/home/Work';
import { profile } from '@/content/profile';
import { homeJsonLd, jsonLdScript } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata({
    title: `${profile.name} | ${profile.title}`,
    absoluteTitle: true,
    description: profile.description,
    path: '/',
});

export default function Home() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(homeJsonLd())} />
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
