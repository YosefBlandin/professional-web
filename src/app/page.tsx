import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { projects } from '@/mock/projectsMock';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <section>
                <section className="flex flex-col gap-4 max-w-screen-2xl mx-auto py-10">
                    <h1 className="text-5xl font-black text-center mb-4 text-[#3E2C1B]">
                        Pleasure for building <br /> software that serves people
                    </h1>
                    <p className="text-center text-xl font-medium text-[#444444]">
                        Rock-solid stability, quality before speed, standards
                        set high—if that’s your{' '}
                        <span className="font-bold">culture</span>, let’s build
                        together.
                    </p>
                </section>
            </section>

            <section className="flex flex-col gap-4 max-w-screen-2xl mx-auto py-10">
                <h2 className="text-3xl font-bold text-center mb-4">
                    Projects Where I Worked
                </h2>

                <section className="flex flex-wrap gap-4">
                    {projects.map((project) => (
                        <Card key={project.id} className="max-w-md">
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
                    ))}
                </section>
            </section>
        </div>
    );
}
