'use client';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { projects } from '@/mock/projectsMock';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProjectLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { projectId } = useParams();

    const projectsFiltered = projects.filter(
        (project) => project.id !== Number(projectId)
    );

    return (
        <section className="flex flex-col gap-x-4 gap-y-2 pt-4 px-4 lg:px-10">
            <section>
                <Link href="/">
                    <Button
                        variant="neon-outline"
                        className="cursor-pointer"
                    >
                        <ArrowLeft />
                        Go back
                    </Button>
                </Link>
            </section>

            <section className="bg-card lg:px-8 py-10 rounded-lg border border-border">
                {children}
            </section>

            <section className="mt-20">
                <h2 className="sticky top-0 bg-background px-5 pt-5 pb-3 text-3xl font-semibold text-center lg:text-left font-[family-name:var(--font-space-grotesk)]">
                    You might like
                </h2>
                <ul className="px-4 flex justify-center lg:justify-start flex-wrap gap-4 rounded-lg">
                    {projectsFiltered.map((project) => (
                        <li key={project.id}>
                            <Card className="max-w-md lg:max-w-xl">
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription>
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="aspect-video rounded-md"
                                        objectFit="cover"
                                    />
                                </CardContent>
                                <CardFooter className="flex gap-x-4 justify-end">
                                    <Link href={project.link}>
                                        <Button
                                            className="cursor-pointer"
                                            variant="link"
                                        >
                                            Visit
                                        </Button>
                                    </Link>
                                    <Link href={`/${project.id}`}>
                                        <Button
                                            className="cursor-pointer"
                                            variant="default"
                                        >
                                            Know more
                                        </Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}
