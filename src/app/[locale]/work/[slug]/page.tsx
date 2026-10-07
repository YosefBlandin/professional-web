import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProjectMedia } from '@/components/home/CaseCard';
import { CaseStudyBody, studyKicker } from '@/components/study/CaseStudy';
import { getProject } from '@/content';
import { projects } from '@/content/projects';
import { Link } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { caseStudyJsonLd, jsonLdScript } from '@/lib/jsonld';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ locale: Locale; slug: string }> };

export function generateStaticParams() {
    return routing.locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale, slug } = await params;
    const project = getProject(slug, locale);
    if (!project) return {};
    return pageMetadata({
        locale,
        title: project.seoTitle,
        description: project.seoDescription,
        path: `/work/${project.slug}`,
    });
}

export default async function CaseStudyPage({ params }: Props) {
    const { locale, slug } = await params;
    setRequestLocale(locale);
    const project = getProject(slug, locale);
    if (!project) notFound();
    const t = await getTranslations();

    return (
        <article className="study-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLdScript(
                    caseStudyJsonLd(project, locale, { home: 'Yosef Blandin', work: t('nav.work') }),
                )}
            />
            <div className="wrap">
                <div className="inner">
                    <Link className="btn btn-ghost btn-sm back" href="/#work">
                        <span aria-hidden="true">←</span> {t('study.allWork')}
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
