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
import profile from '@/assets/yosef.jpg';

export async function generateMetadata() {
    return {
        title: 'Yosef Blandin | Frontend Engineer with 4+ years of experience',
        description:
            'Rock-solid stability, quality before speed, standards set high—if that’s your culture, let’s build together.',
    };
}

export default function Home() {
    return (
        <div>
            <section>
                <section className="flex flex-col gap-4 max-w-screen-2xl mx-auto py-10">
                    <h1 className="text-3xl lg:text-5xl font-black text-center mb-4 text-[#3E2C1B]">
                        Software with purpose. <br /> Interfaces that deliver.
                    </h1>
                    <p className="text-center text-md lg:text-xl font-medium text-[#444444]">
                        I partner with product teams to build performant,
                        resilient frontend systems <br /> aligned with long-term
                        vision and measurable outcomes.
                    </p>
                    <section className="flex justify-center gap-x-6 mt-4">
                        <Link href="https://www.upwork.com/freelancers/~0125393fa7ef0842c8?mp_source=share">
                            <Button
                                variant={'outline'}
                                className="bg-white cursor-pointer hover:bg-white/80"
                            >
                                Go to Upwork
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/yosefblandin/">
                            <Button
                                variant={'default'}
                                className="cursor-pointer"
                            >
                                Go to LinkedIn
                            </Button>
                        </Link>
                    </section>
                </section>
            </section>

            <section className="flex flex-col gap-4 max-w-screen-2xl mx-auto py-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4">
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
                    ))}
                </section>
            </section>

            <section className="mt-20  max-w-screen-2xl mx-auto px-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
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
                        <p className="text-primary text-center text-2xl font-medium mb-2">
                            Work ethic and commitment to excellence.
                        </p>

                        <p className="text-primary text-center text-lg">
                            Strong relationship are built on trust and respect
                        </p>

                        <Link href="https://www.linkedin.com/in/yosefblandin/">
                            <Button
                                variant="default"
                                className="h-16 w-60 cursor-pointer mt-4"
                            >
                                See more on LinkedIn
                            </Button>
                        </Link>
                    </div>
                </section>
            </section>

            <section className="bg-[#111111] min-h-96">
                <section className="mt-20  max-w-screen-2xl mx-auto px-4 py-20">
                    <h2 className="text-2xl lg:text-3xl font-bold text-center mb-20 text-white">
                        About me
                    </h2>

                    <section className="flex flex-col lg:flex-row items-center gap-30">
                        <Image
                            src={profile}
                            alt="Profile"
                            className="rounded-full max-w-md"
                        />

                        <section>
                            <h6 className="text-white text-2xl lg:text-4xl font-bold mb-8">
                                Yosef Blandin
                            </h6>
                            <p className="text-white text-md lg:text-lg text-justify">
                                Frontend Engineer with 4+ years of experience
                                crafting high-performance UIs in multiple
                                industries. My work focuses on building robust
                                platforms, real-time dashboards, and data-driven
                                charts using React, Next.js, and TypeScript.
                            </p>

                            <br />

                            <p className="text-white text-md lg:text-lg text-justify">
                                I specialize in translating complex financial
                                data into clean, intuitive interfaces—whether
                                it&apos;s regulatory dashboards, trading
                                insights, or internal analytics tools. I’ve
                                worked with tools like Recharts, D3.js, and
                                Chart.js, and I follow best practices in modular
                                design, performance optimization, and scalable
                                architecture. optimization, and scalable
                                architecture.
                            </p>

                            <br />

                            <p className="text-white text-md lg:text-lg text-justify">
                                If you&apos;re building a fintech platform or
                                need a fast, interactive, and reliable frontend
                                for your data-rich product—let’s connect.
                            </p>
                        </section>
                    </section>
                </section>
            </section>

            {/* <section className="mt-20 max-w-screen-2xl mx-auto px-4 py-20">
                <h2 className="text-3xl font-bold text-center mb-20 text-white">
                    Contact me
                </h2>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <input
                                            placeholder="john@example.com"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl>
                                        <input
                                            placeholder="Subject"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <textarea
                                            placeholder="Message"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </section> */}
        </div>
    );
}
