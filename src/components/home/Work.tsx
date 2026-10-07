import { projects } from '@/content/projects';
import { CaseCard } from './CaseCard';

export function Work() {
    return (
        <section className="section" id="work" aria-labelledby="work-title">
            <div className="wrap">
                <div className="section-head">
                    <p className="label">Selected work</p>
                    <h2 id="work-title">Products in production</h2>
                    <p>
                        Six products, from aid payments in the field to a bank’s app in the stores. Each one lists the
                        problem, what I built and what changed.
                    </p>
                </div>
                <ol className="cases">
                    {projects.map((project) => (
                        <CaseCard key={project.slug} project={project} />
                    ))}
                </ol>
            </div>
        </section>
    );
}
