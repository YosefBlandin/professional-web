import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/content/projects';

export function ProjectMedia({ project, priority = false }: { project: Project; priority?: boolean }) {
    const { media } = project;

    if (media.kind === 'slip') {
        return (
            <div className="media slip" role="img" aria-label={media.label}>
                <p className="figure">
                    {media.figure}
                    <small>{media.caption}</small>
                </p>
                <dl>
                    {media.rows.map(([term, value]) => (
                        <div key={term}>
                            <dt>{term}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        );
    }

    return (
        <div className="media">
            <Image src={media.src} alt={media.alt} sizes="(max-width: 860px) 100vw, 640px" priority={priority} />
        </div>
    );
}

export function ProjectLink({ project }: { project: Project }) {
    if (!project.link) return null;
    return (
        <a className="textlink" href={project.link.href} target="_blank" rel="noopener">
            {project.link.label} <span aria-hidden="true">↗</span>
        </a>
    );
}

export function CaseCard({ project }: { project: Project }) {
    return (
        <li className="case reveal">
            <ProjectMedia project={project} />
            <div className="case-body">
                <div className="case-meta">
                    <span className="label">{project.company}</span>
                    <span className="label">{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="case-problem">{project.problem}</p>
                <ul className="outcomes">
                    {project.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                    ))}
                </ul>
                <ul className="tags">
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                    {/* Phones show four tags; the full list is in the case study. */}
                    {project.tags.length > 4 && (
                        <li className="tags-more" aria-hidden="true">
                            +{project.tags.length - 4}
                        </li>
                    )}
                </ul>
                <div className="case-actions">
                    <Link className="btn btn-ghost btn-sm" href={`/work/${project.slug}`} scroll={false}>
                        Read case study{' '}
                        <span className="arrow" aria-hidden="true">
                            →
                        </span>
                    </Link>
                    <ProjectLink project={project} />
                </div>
            </div>
        </li>
    );
}
