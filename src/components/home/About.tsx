import { useLocale, useTranslations } from 'next-intl';
import { getContent } from '@/content';
import type { Locale } from '@/i18n/routing';

export function About() {
    const t = useTranslations('about');
    const { profile } = getContent(useLocale() as Locale);

    return (
        <section className="section" id="about" aria-labelledby="about-title">
            <div className="wrap about-grid">
                <div>
                    <p className="label" style={{ marginBottom: 16 }}>
                        {t('label')}
                    </p>
                    <h2 id="about-title">{t('title')}</h2>
                </div>
                <div className="about-copy">
                    <p>{t('p1')}</p>
                    <p>{t('p2')}</p>
                    <dl className="facts">
                        {profile.facts.map((fact) => (
                            <div key={fact.label}>
                                <dt>{fact.label}</dt>
                                <dd>{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <div className="links">
                        <a className="btn btn-ghost btn-sm" href={profile.links.linkedin} target="_blank" rel="noopener">
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                        <a className="btn btn-ghost btn-sm" href={profile.links.github} target="_blank" rel="noopener">
                            GitHub <span aria-hidden="true">↗</span>
                        </a>
                        <a className="btn btn-ghost btn-sm" href={profile.links.upwork} target="_blank" rel="noopener">
                            Upwork <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
