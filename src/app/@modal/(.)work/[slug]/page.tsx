import { notFound } from 'next/navigation';
import { CaseStudyBody, studyKicker } from '@/components/study/CaseStudy';
import { StudyModal } from '@/components/study/StudyModal';
import { getProject, projects } from '@/content/projects';

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default async function CaseStudyModal({ params }: { params: Promise<{ slug: string }> }) {
    const project = getProject((await params).slug);
    if (!project) notFound();

    return (
        <StudyModal kicker={studyKicker(project)} title={project.title}>
            <CaseStudyBody project={project} />
        </StudyModal>
    );
}
