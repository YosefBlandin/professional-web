import { About } from '@/components/home/About';
import { Contact } from '@/components/home/Contact';
import { Experience, Skills } from '@/components/home/Experience';
import { Hero } from '@/components/home/Hero';
import { Testimonials } from '@/components/home/Testimonials';
import { Work } from '@/components/home/Work';
import { profile, siteUrl } from '@/content/profile';

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    description: profile.description,
    email: `mailto:${profile.email}`,
    url: siteUrl,
    knowsLanguage: ['es', 'en'],
    sameAs: [profile.links.linkedin, profile.links.github, profile.links.upwork],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') }}
            />
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
