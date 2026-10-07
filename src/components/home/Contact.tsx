import { useTranslations } from 'next-intl';
import { CopyButton } from '@/components/site/CopyButton';
import { profile } from '@/content/profile';
import { ContactForm } from './ContactForm';

export function Contact() {
    const t = useTranslations('contact');
    return (
        <section className="section contact" id="contact" aria-labelledby="contact-title">
            <div className="wrap contact-grid">
                <div>
                    <p className="label" style={{ marginBottom: 16 }}>
                        {t('label')}
                    </p>
                    <h2 id="contact-title">{t.rich('title', { em: (chunks) => <em>{chunks}</em> })}</h2>
                    <div className="email-row">
                        <a className="email" href={`mailto:${profile.email}`}>
                            {profile.email}
                        </a>
                        <CopyButton text={profile.email} />
                    </div>
                    <p className="hint">{t('hint')}</p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
