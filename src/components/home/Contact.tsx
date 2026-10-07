import { CopyButton } from '@/components/site/CopyButton';
import { profile } from '@/content/profile';
import { ContactForm } from './ContactForm';

export function Contact() {
    return (
        <section className="section contact" id="contact" aria-labelledby="contact-title">
            <div className="wrap contact-grid">
                <div>
                    <p className="label" style={{ marginBottom: 16 }}>
                        Contact
                    </p>
                    <h2 id="contact-title">
                        Building something with <em>money</em> in it?
                    </h2>
                    <div className="email-row">
                        <a className="email" href={`mailto:${profile.email}`}>
                            {profile.email}
                        </a>
                        <CopyButton text={profile.email} />
                    </div>
                    <p className="hint">I usually reply within one working day.</p>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
