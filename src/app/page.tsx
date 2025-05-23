import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { projects } from '@/mock/projectsMock';
import { testimonialsMock } from '@/mock/testimonialsMock';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { truncateWithEllipsis } from '@/lib/utils';
import { Star } from 'lucide-react';

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

            <section className="mt-20  max-w-screen-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Trusted by
                </h2>

                <section className="relative">
                    <ul className="grid justify-center justify-items-center xl:justify-items-start lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {testimonialsMock.map((testimonial) => (
                            <li
                                className="max-w-lg w-full h-full"
                                key={testimonial.id}
                            >
                                <Card className="h-full">
                                    <CardHeader className="flex justify-between">
                                        <p className="text-sm text-gray-600 font-medium">
                                            {testimonial.date}
                                        </p>

                                        <div className="flex gap-1">
                                            <Star className="text-primary fill-yellow-200 stroke-[1px]" />
                                            <Star className="text-primary fill-yellow-200 stroke-[1px]" />
                                            <Star className="text-primary fill-yellow-200 stroke-[1px]" />
                                            <Star className="text-primary fill-yellow-200 stroke-[1px]" />
                                            <Star className="text-primary fill-yellow-200 stroke-[1px]" />
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-primary text-md">
                                            {truncateWithEllipsis(
                                                testimonial.text,
                                                250
                                            )}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="flex gap-x-4 justify-start mt-auto pt-6">
                                        <article className="flex gap-4">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="rounded-full max-w-16"
                                                objectFit="fill"
                                            />
                                            <div className="flex flex-col justify-center gap-1">
                                                <span className="text-primary font-bold">
                                                    {testimonial.name}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {testimonial.position}
                                                </span>
                                            </div>
                                        </article>
                                    </CardFooter>
                                </Card>
                            </li>
                        ))}
                    </ul>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center justify-end bg-gradient-to-t from-white to-250% h-[50%] pb-60">
                        <p className="text-primary text-2xl font-medium mb-2">
                            Work ethic and commitment to excellence.
                        </p>

                        <p className="text-primary text-lg">
                            Strong relationship are built on trust and respect
                        </p>

                        <Button
                            variant="default"
                            className="h-16 w-60 cursor-pointer mt-4"
                        >
                            See more on LinkedIn
                        </Button>
                    </div>
                </section>
            </section>

            <section className="mt-20  max-w-screen-2xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Contact me
                </h2>
            </section>
        </div>
    );
}
