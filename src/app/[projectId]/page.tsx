'use client';
import { useParams } from 'next/navigation';
import { projects } from '@/mock/projectsMock';
import Image from 'next/image';

import parse from 'html-react-parser';

export default function ProjectPage() {
    const { projectId } = useParams();
    const project = projects.find(
        (project) => project.id === Number(projectId)
    ) as (typeof projects)[number];

    console.log(project);
    return (
        <div className="flex flex-col justify-center gap-4 xl:gap-6 lg:max-w-screen-md mx-auto">
            <h1 className="text-4xl xl:text-5xl font-semibold text-primary text-center">
                {project?.title}
            </h1>
            <p className="text-lg xl:text-xl text-primary text-center font-medium">
                {project?.description}
            </p>
            <Image
                src={project?.image}
                alt={String(project?.title)}
                className="lg:max-w-screen-md"
            />
            <section className="prose mt-2 text-justify">
                {parse(String(project?.post))}
            </section>
        </div>
    );
}
