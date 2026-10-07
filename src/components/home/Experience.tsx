import { useLocale, useTranslations } from 'next-intl';
import { getContent } from '@/content';
import type { Locale } from '@/i18n/routing';

export function Experience() {
    const t = useTranslations('experience');
    const { experience, profile } = getContent(useLocale() as Locale);

    return (
        <section className="section alt" id="experience" aria-labelledby="exp-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">{t('label')}</p>
                    <h2 id="exp-title">{t('title')}</h2>
                    <p>{t('intro')}</p>
                </div>
                <ol className="timeline">
                    {experience.map((item) => (
                        <li className="role" key={item.company}>
                            <span className="when">{item.period}</span>
                            <div>
                                <h3>
                                    {item.role} <span>· {item.company}</span>
                                </h3>
                                <p>{item.summary}</p>
                            </div>
                            {item.status ? (
                                <span className={`pill${item.status.quiet ? ' quiet' : ''}`}>{item.status.label}</span>
                            ) : (
                                <span />
                            )}
                        </li>
                    ))}
                </ol>
                <div className="after-list">
                    <a className="btn btn-ghost btn-sm" href={profile.links.linkedin} target="_blank" rel="noopener">
                        {t('resume')} <span aria-hidden="true">↗</span>
                    </a>
                    <span>{t('education')}</span>
                </div>
            </div>
        </section>
    );
}

export function Skills() {
    const t = useTranslations('skills');
    const { skills } = getContent(useLocale() as Locale);

    return (
        <section className="section" id="skills" aria-labelledby="skills-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">{t('label')}</p>
                    <h2 id="skills-title">{t('title')}</h2>
                    <p>{t('intro')}</p>
                </div>
                <div className="skills">
                    {skills.map((skill) => (
                        <div className="skill" key={skill.group}>
                            <h3>{skill.group}</h3>
                            <ul className="tags">
                                {skill.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
