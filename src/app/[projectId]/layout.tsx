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
        <section className="flex flex-col gap-x-4 gap-y-2 lg:grid lg:grid-cols-12 lg:grid-rows-12 pt-4 px-10 bg-secondary lg:h-[89vh] lg:overflow-y-hidden">
            <section className="col-start-1 col-end-13 row-start-1 row-end-2">
                <Link href="/">
                    <Button
                        variant="outline"
                        className="cursor-pointer bg-white border-gray-300 hover:bg-gray-100"
                    >
                        <ArrowLeft />
                        Go back
                    </Button>
                </Link>
            </section>

            <section className="col-start-1 col-end-9 lg:h-[80vh] lg:overflow-y-auto bg-white px-8 py-10 rounded-lg shadow-sm">
                {children}
            </section>

            <ul className="col-start-9 col-end-13 px-4 flex flex-col gap-4 lg:h-[80vh] overflow-y-auto shadow-sm bg-white rounded-lg">
                <h2 className="sticky top-0 bg-background px-5 pt-5 pb-3 text-2xl font-semibold">
                    You might like
                </h2>
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
                                    className="aspect-video"
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
    );
}
