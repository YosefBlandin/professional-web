import { profile } from '@/content/profile';

export function About() {
    return (
        <section className="section" id="about" aria-labelledby="about-title">
            <div className="wrap about-grid">
                <div>
                    <p className="label" style={{ marginBottom: 16 }}>
                        About
                    </p>
                    <h2 id="about-title">Calm interfaces for high-stakes flows.</h2>
                </div>
                <div className="about-copy">
                    <p>
                        I’m a frontend and mobile engineer with 5+ years of experience. For the last three I’ve worked on
                        money: transfers, payouts, cards and receipts, where a confusing screen costs someone real money.
                    </p>
                    <p>
                        I like owning a product end to end, from the first commit to the store release, and I care about
                        the unglamorous parts: error handling, offline states, feature-flagged rollouts and tests.
                    </p>
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
