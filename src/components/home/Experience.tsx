import { experience, skills } from '@/content/experience';
import { profile } from '@/content/profile';

export function Experience() {
    return (
        <section className="section alt" id="experience" aria-labelledby="exp-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">Experience</p>
                    <h2 id="exp-title">5+ years, all remote</h2>
                    <p>Product teams, an agency and a startup, working across time zones from UTC-3.</p>
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
                        Full résumé on LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                    <span>Platzi Frontend Developer, plus 65 certifications (2020 – 2023).</span>
                </div>
            </div>
        </section>
    );
}

export function Skills() {
    return (
        <section className="section" id="skills" aria-labelledby="skills-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">Skills</p>
                    <h2 id="skills-title">Tools I use every week</h2>
                    <p>Grouped by the job they do, not by how long I’ve known them.</p>
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
