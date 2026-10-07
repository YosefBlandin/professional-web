import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProjectMedia } from '@/components/home/CaseCard';
import { CaseStudyBody, studyKicker } from '@/components/study/CaseStudy';
import { getProject, projects } from '@/content/projects';
import { caseStudyJsonLd, jsonLdScript } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const project = getProject((await params).slug);
    if (!project) return {};
    return pageMetadata({
        title: project.seoTitle,
        description: project.seoDescription,
        path: `/work/${project.slug}`,
    });
}

export default async function CaseStudyPage({ params }: Params) {
    const project = getProject((await params).slug);
    if (!project) notFound();

    return (
        <article className="study-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(caseStudyJsonLd(project))} />
            <div className="wrap">
                <div className="inner">
                    <Link className="btn btn-ghost btn-sm back" href="/#work">
                        <span aria-hidden="true">←</span> All work
                    </Link>
                    <header>
                        <p className="label">{studyKicker(project)}</p>
                        <h1>{project.title}</h1>
                    </header>
                    <ProjectMedia project={project} priority />
                    <CaseStudyBody project={project} />
                </div>
            </div>
        </article>
    );
}
