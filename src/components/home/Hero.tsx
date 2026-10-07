import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import portrait from '@/assets/yosef-portrait.jpg';
import { getContent } from '@/content';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/i18n/routing';

export function Hero() {
    const t = useTranslations('hero');
    const tNav = useTranslations('nav');
    const { profile, proof } = getContent(useLocale() as Locale);

    return (
        <>
            <section className="hero" aria-labelledby="hero-title">
                <div className="wrap hero-grid">
                    <div className="hero-copy">
                        {/* Phones: a compact portrait beside the name, so the headline and CTA fit the first screen. */}
                        <div className="hero-id" aria-hidden="true">
                            <div className="avatar">
                                <Image src={portrait} alt="" sizes="(max-width: 760px) 88px, 1px" priority />
                            </div>
                            <div className="hero-id-text">
                                <p className="label">{profile.name}</p>
                                <p className="label">{profile.title}</p>
                                <p className="hero-id-place">
                                    {profile.location} · {profile.timezone}
                                </p>
                            </div>
                        </div>
                        <h1 id="hero-title">
                            <span className="label hero-name">
                                {profile.name} · {profile.location}
                            </span>
                            {t.rich('headline', { em: (chunks) => <em>{chunks}</em> })}
                        </h1>
                        <p className="lede">{t.rich('lede', { strong: (chunks) => <strong>{chunks}</strong> })}</p>
                        <div className="cta-row">
                            <Link className="btn btn-primary" href="/#contact">
                                {tNav('getInTouch')}
                            </Link>
                            <Link className="btn btn-ghost" href="/#work">
                                {t('seeWork')}{' '}
                                <span className="arrow" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </div>
                        <p className="status">
                            <span className="dot" aria-hidden="true" />
                            {t('status')}
                        </p>
                    </div>
                    <figure className="portrait">
                        <div className="frame">
                            <Image
                                src={portrait}
                                alt={t('portraitAlt')}
                                sizes="(max-width: 760px) 1px, 440px"
                                placeholder="blur"
                                priority
                            />
                        </div>
                        <figcaption>
                            <span className="label">{profile.timezone}</span>
                            <span className="label">ES · EN</span>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className="proof" aria-label={t('atAGlance')}>
                <ul className="wrap">
                    {proof.map((item) => (
                        <li key={item.value}>
                            <span className="num">{item.value}</span>
                            <span className="cap">{item.caption}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
