import { projects } from '@/mock/projectsMock';
import { testimonialsMock } from '@/mock/testimonialsMock';
import profile from '@/assets/yosef.jpg';
import { HeroScene } from '@/components/scenes/HeroScene';
import { TestimonialsScene } from '@/components/scenes/TestimonialsScene';
import { AboutScene } from '@/components/scenes/AboutScene';
import { ProjectShowcase } from '@/components/ProjectShowcase';
import { ScrollFadeSection } from '@/components/ScrollFadeSection';
import { FloatingCharacters } from '@/components/FloatingCharacters';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const workCharacters = [
    { char: '智', position: 'top-[5%] left-[3%]', size: 'text-[7rem] md:text-[9rem]', delay: 0 },
    { char: '信', position: 'bottom-[8%] right-[4%]', size: 'text-[6rem] md:text-[8rem]', delay: 0.5 },
];

export async function generateMetadata() {
    return {
        title: 'Yosef Blandin | Frontend Engineer with 4+ years of experience',
        description: `Yosef Blandin is a frontend engineer with 4+ years of experience. Focused on building performant, resilient frontend systems aligned with long-term vision and measurable outcomes.`,
        generator: 'Next.js',
        applicationName: 'Yosef Blandin Professional Website',
        referrer: 'origin-when-cross-origin',
        keywords: [
            'Next.js',
            'React',
            'JavaScript',
            'TypeScript',
            'Yosef Blandin',
            'Blandin',
            'Yosef',
            'Frontend Engineer',
            'Frontend Developer',
            'Data Visualization',
            'Chart.js',
            'D3.js',
            'Recharts',
        ],
        authors: [{ name: 'Yosef Blandin' }],
    };
}

const featuredProjects = projects.slice(0, 3);

export default function Home() {
    return (
        <main>
            {/* Scene 1 — Dramatic Intro */}
            <HeroScene />

            {/* Scene 2 — Selected Work */}
            <section id="work" className="py-20 relative">
                <FloatingCharacters characters={workCharacters} color="primary" />

                <ScrollFadeSection className="flex items-center gap-4 mb-16 max-w-screen-2xl mx-auto px-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                    <h2 className="text-2xl lg:text-3xl font-bold text-center font-[family-name:var(--font-space-grotesk)]">
                        Selected Work
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
                </ScrollFadeSection>

                {featuredProjects.map((project, index) => (
                    <ProjectShowcase
                        key={project.id}
                        project={project}
                        index={index}
                        isLast={index === featuredProjects.length - 1}
                    />
                ))}

                <ScrollFadeSection className="text-center mt-12">
                    <Link href="#work">
                        <Button variant="neon-outline" className="cursor-pointer">
                            See all projects
                        </Button>
                    </Link>
                </ScrollFadeSection>
            </section>

            {/* Scene 3 — Social Proof */}
            <TestimonialsScene testimonials={testimonialsMock} />

            {/* Scene 4 — About + Connect */}
            <AboutScene profileImage={profile} />
        </main>
    );
}
