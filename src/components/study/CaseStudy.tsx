import { ProjectLink } from '@/components/home/CaseCard';
import type { Project } from '@/content/projects';

export function studyKicker(project: Project) {
    return `${project.company} · ${project.period}`;
}

export function CaseStudyBody({ project }: { project: Project }) {
    return (
        <div className="study-body">
            <p>{project.study.intro}</p>
            {project.study.sections.map((section) => (
                <section key={section.heading} className="contents">
                    <h3>{section.heading}</h3>
                    <ul>
                        {section.items.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
            <ul className="tags" aria-label="Technologies">
                {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
            {project.link && (
                <div className="case-actions">
                    <ProjectLink project={project} />
                </div>
            )}
        </div>
    );
}
