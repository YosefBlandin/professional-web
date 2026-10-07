import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('notFound');
    return { title: t('metaTitle'), robots: { index: false } };
}

export default function NotFound() {
    const t = useTranslations('notFound');
    return (
        <section className="section" aria-labelledby="nf-title">
            <div className="wrap not-found">
                <p className="label">404</p>
                <h1 id="nf-title">{t('title')}</h1>
                <p className="lede">{t('body')}</p>
                <div className="cta-row">
                    <Link className="btn btn-primary" href="/#work">
                        {t('seeWork')}
                    </Link>
                    <Link className="btn btn-ghost" href="/#contact">
                        {t('getInTouch')}
                    </Link>
                </div>
            </div>
        </section>
    );
}
