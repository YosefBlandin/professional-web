import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { projects } from '@/mock/projectsMock';
import { testimonialsMock } from '@/mock/testimonialsMock';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { truncateWithEllipsis } from '@/lib/utils';
import { Star } from 'lucide-react';
import profile from '@/assets/yosef.jpg';

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

export default function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative overflow-hidden">
                <p
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[14rem] lg:text-[18rem] font-black font-[family-name:var(--font-space-grotesk)] text-accent/[0.04] select-none pointer-events-none whitespace-nowrap"
                >
                    ENGINEER
                </p>

                <section className="relative flex flex-col gap-4 max-w-screen-2xl mx-auto py-20 lg:py-28 px-4">
                    <h1 className="text-3xl lg:text-5xl font-black text-center mb-4 font-[family-name:var(--font-space-grotesk)] neon-text-primary">
                        Software with purpose. <br /> Interfaces that deliver.
                    </h1>
                    <p className="text-center text-md lg:text-xl font-medium text-muted-foreground">
                        I partner with product teams to build performant,
                        resilient frontend systems <br /> aligned with long-term
                        vision and measurable outcomes.
                    </p>

                    <p className="text-center text-sm lg:text-base mt-2 tracking-wide">
                        <span className="neon-text-tertiary-light">
                            Hablo Espa&ntilde;ol
                        </span>
                        <span className="text-muted-foreground mx-2">/</span>
                        <span className="neon-text-primary-light">
                            I speak English
                        </span>
                        <span className="text-muted-foreground mx-2">/</span>
                        <span className="neon-text-accent-light">
                            我说中文
                        </span>
                    </p>

                    <section className="flex justify-center gap-x-6 mt-6">
                        <Link href="https://www.upwork.com/freelancers/~0125393fa7ef0842c8?mp_source=share">
                            <Button
                                variant="neon-outline"
                                className="cursor-pointer"
                            >
                                Go to Upwork
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/yosefblandin/">
                            <Button
                                variant="neon"
                                className="cursor-pointer"
                            >
                                Go to LinkedIn
                            </Button>
                        </Link>
                    </section>
                </section>
            </section>

            {/* Projects Section */}
            <section id="projects" className="flex flex-col gap-4 max-w-screen-2xl mx-auto py-10 px-4">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/30" />
                    <h2 className="text-2xl lg:text-3xl font-bold text-center font-[family-name:var(--font-space-grotesk)]">
                        Projects Where I Worked
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/30" />
                </div>

                <section className="grid justify-center justify-items-center xl:justify-items-start lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            className="w-full h-full max-w-md lg:max-w-lg"
                        >
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-3">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="aspect-video rounded-md"
                                    objectFit="cover"
                                />
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded-full border border-primary/30 text-primary/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex gap-x-4 justify-end">
                                <Link href={project.link}>
                                    <Button
                                        className="cursor-pointer"
                                        variant="link"
                                    >
                                        Visit
                                    </Button>
                                </Link>
                                <Link href={`/${project.id}`}>
                                    <Button
                                        className="cursor-pointer"
                                        variant="default"
                                    >
                                        Know more
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </section>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="mt-20 max-w-screen-2xl mx-auto px-4">
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent to-accent/30" />
                    <h2 className="text-2xl lg:text-3xl font-bold text-center font-[family-name:var(--font-space-grotesk)]">
                        Trusted by
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent to-accent/30" />
                </div>

                <section className="relative">
                    <ul className="grid justify-center justify-items-center xl:justify-items-start lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {testimonialsMock.map((testimonial) => (
                            <li
                                className="max-w-lg w-full h-full"
                                key={testimonial.id}
                            >
                                <Card className="h-full">
                                    <CardHeader className="flex justify-between">
                                        <p className="text-sm text-muted-foreground font-medium">
                                            {testimonial.date}
                                        </p>

                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="text-primary fill-primary/30 stroke-[1px]"
                                                />
                                            ))}
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-foreground text-md">
                                            {truncateWithEllipsis(
                                                testimonial.text,
                                                250
                                            )}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="flex gap-x-4 justify-start mt-auto pt-6">
                                        <article className="flex gap-4">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-full max-w-16"
                                                objectFit="fill"
                                            />
                                            <div className="flex flex-col justify-center gap-1">
                                                <span className="text-primary font-bold">
                                                    {testimonial.name}
                                                </span>
                                                <span className="text-sm text-muted-foreground">
                                                    {testimonial.position}
                                                </span>
                                            </div>
                                        </article>
                                    </CardFooter>
                                </Card>
                            </li>
                        ))}
                    </ul>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-end bg-gradient-to-t from-background to-250% h-[50%] pb-60">
                        <p className="neon-text-primary text-center text-2xl font-medium mb-2 font-[family-name:var(--font-space-grotesk)]">
                            Work ethic and commitment to excellence.
                        </p>

                        <p className="text-muted-foreground text-center text-lg">
                            Strong relationships are built on trust and respect
                        </p>

                        <Link href="https://www.linkedin.com/in/yosefblandin/">
                            <Button
                                variant="neon"
                                className="h-16 w-60 cursor-pointer mt-4"
                            >
                                See more on LinkedIn
                            </Button>
                        </Link>
                    </div>
                </section>
            </section>

            {/* About Me Section */}
            <section id="about" className="bg-card min-h-96">
                <section className="mt-20 max-w-screen-2xl mx-auto px-4 py-20">
                    <div className="flex items-center gap-4 mb-20">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-tertiary/30" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-center font-[family-name:var(--font-space-grotesk)]">
                            About me
                        </h2>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-tertiary/30" />
                    </div>

                    <section className="flex flex-col lg:flex-row items-center gap-30">
                        <div className="relative">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary via-accent to-tertiary opacity-30 blur-md" />
                            <Image
                                src={profile}
                                alt="Profile"
                                className="relative rounded-full max-w-sm lg:max-w-md ring-2 ring-primary/30"
                            />
                        </div>

                        <section>
                            <h6 className="text-2xl lg:text-4xl font-bold mb-8 font-[family-name:var(--font-space-grotesk)] neon-text-primary">
                                Yosef Blandin
                            </h6>
                            <p className="text-foreground text-md lg:text-lg text-justify">
                                Frontend Engineer with 4+ years of experience
                                crafting high-performance UIs in multiple
                                industries. Native Spanish speaker, fluent in
                                English, and conversational in Mandarin Chinese.
                                My work focuses on building robust
                                platforms, real-time dashboards, and data-driven
                                charts using React, Next.js, and TypeScript.
                            </p>

                            <br />

                            <p className="text-foreground text-md lg:text-lg text-justify">
                                I specialize in translating complex financial
                                data into clean, intuitive interfaces&mdash;whether
                                it&apos;s regulatory dashboards, trading
                                insights, or internal analytics tools. I&apos;ve
                                worked with tools like Recharts, D3.js, and
                                Chart.js, and I follow best practices in modular
                                design, performance optimization, and scalable
                                architecture.
                            </p>

                            <br />

                            <p className="text-foreground text-md lg:text-lg text-justify">
                                If you&apos;re building a fintech platform or
                                need a fast, interactive, and reliable frontend
                                for your data-rich product&mdash;let&apos;s connect.
                            </p>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
}
