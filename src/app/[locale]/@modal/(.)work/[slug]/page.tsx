import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { CaseStudyBody, studyKicker } from '@/components/study/CaseStudy';
import { StudyModal } from '@/components/study/StudyModal';
import { getProject } from '@/content';
import { projects } from '@/content/projects';
import { routing, type Locale } from '@/i18n/routing';

export function generateStaticParams() {
    return routing.locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export const dynamicParams = false;

export default async function CaseStudyModal({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const project = getProject(slug, locale);
    if (!project) notFound();

    return (
        <StudyModal kicker={studyKicker(project)} title={project.title}>
            <CaseStudyBody project={project} />
        </StudyModal>
    );
}
