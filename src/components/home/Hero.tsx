import Image from 'next/image';
import Link from 'next/link';
import portrait from '@/assets/yosef-portrait.jpg';
import { profile, proof } from '@/content/profile';

const portraitAlt = 'Portrait of Yosef Blandin wearing glasses, a black turtleneck and a brown jacket';

export function Hero() {
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
                            Mobile and frontend engineer, <em>focused on payments and banking.</em>
                        </h1>
                        <p className="lede">
                            5+ years shipping <strong>React, React Native, Next.js and TypeScript</strong>, the last three
                            in payments and banking: a bank’s iOS and Android app, and a 14-language aid-payments app NGOs
                            use in the field.
                        </p>
                        <div className="cta-row">
                            <Link className="btn btn-primary" href="#contact">
                                Get in touch
                            </Link>
                            <Link className="btn btn-ghost" href="#work">
                                See selected work{' '}
                                <span className="arrow" aria-hidden="true">
                                    →
                                </span>
                            </Link>
                        </div>
                        <p className="status">
                            <span className="dot" aria-hidden="true" />
                            Open to new roles and freelance work
                        </p>
                    </div>
                    <figure className="portrait">
                        <div className="frame">
                            <Image
                                src={portrait}
                                alt={portraitAlt}
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

            <section className="proof" aria-label="At a glance">
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
