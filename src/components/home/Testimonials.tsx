import { useLocale, useTranslations } from 'next-intl';
import { profile } from '@/content/profile';
import { testimonials } from '@/content/testimonials';
import { QuoteCard } from './QuoteCard';
import { QuoteList } from './QuoteList';

export function Testimonials() {
    const t = useTranslations('testimonials');
    const locale = useLocale();

    return (
        <section className="section alt" id="testimonials" aria-labelledby="t-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">{t('label')}</p>
                    <h2 id="t-title">{t('title')}</h2>
                    {/* A quote from Miguel Bastidas Moreno's recommendation; kept in its original English. */}
                    <p className="lead-quote" lang={locale === 'en' ? undefined : 'en'}>
                        “One of the most exceptional developers I have ever worked with.”
                    </p>
                </div>
                <QuoteList total={testimonials.length}>
                    {testimonials.map((testimonial) => (
                        <QuoteCard key={testimonial.name} testimonial={testimonial} />
                    ))}
                </QuoteList>
                <p className="after-list">
                    <a className="textlink" href={profile.links.linkedin} target="_blank" rel="noopener">
                        {t('linkedin')} <span aria-hidden="true">↗</span>
                    </a>
                </p>
            </div>
        </section>
    );
}
