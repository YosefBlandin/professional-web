import { projects } from '@/mock/projectsMock';
import Image from 'next/image';
import parse from 'html-react-parser';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ projectId: string }>;
}) {
    const { projectId } = await params;
    const project = projects.find(
        (project) => project.id === Number(projectId)
    ) as (typeof projects)[number];

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ projectId: string }>;
}) {
    const { projectId } = await params;
    const project = projects.find(
        (project) => project.id === Number(projectId)
    ) as (typeof projects)[number];

    return (
        <div className="flex flex-col justify-center gap-4 xl:gap-6 lg:max-w-screen-md mx-auto">
            <h1 className="text-4xl xl:text-5xl font-semibold text-center font-[family-name:var(--font-space-grotesk)] neon-text-primary">
                {project?.title}
            </h1>
            <p className="text-lg xl:text-xl text-muted-foreground text-center font-medium">
                {project?.description}
            </p>
            <Image
                src={project?.image}
                alt={String(project?.title)}
                className="lg:max-w-screen-md rounded-lg"
            />
            <section className="prose prose-invert mt-2 text-justify text-foreground [&_p]:text-foreground [&_li]:text-foreground">
                {parse(String(project?.post))}
            </section>
        </div>
    );
}
