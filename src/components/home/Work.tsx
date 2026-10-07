import { useLocale, useTranslations } from 'next-intl';
import { getContent } from '@/content';
import type { Locale } from '@/i18n/routing';
import { CaseCard } from './CaseCard';

export function Work() {
    const t = useTranslations('work');
    const { projects } = getContent(useLocale() as Locale);

    return (
        <section className="section" id="work" aria-labelledby="work-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">{t('label')}</p>
                    <h2 id="work-title">{t('title')}</h2>
                    <p>{t('intro')}</p>
                </div>
                <ol className="cases">
                    {projects.map((project) => (
                        <CaseCard key={project.slug} project={project} />
                    ))}
                </ol>
            </div>
        </section>
    );
}
