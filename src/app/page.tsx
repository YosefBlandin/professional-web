import {
    Card,
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';

import bangenteImg from '@/assets/bangente2.png';
import scImg from '@/assets/monitoring_app.png';
import faImg from '@/assets/filtrationadvice.png';
import wingooImg from '@/assets/wingoo.png';
import zumetricsImg from '@/assets/zumetrics.png';
import growthRoadImg from '@/assets/growthroad.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
    const projects = [
        {
            id: 1,
            title: 'Bangente - Mobile App',
            description:
                'A mobile banking application that allows users to access their accounts and perform various banking transactions.',
            image: bangenteImg,
            technologies: [
                'React Native',
                'Expo (SDK 42–52)',
                'Native Modules Integration (.xcframework, .aar)',
            ],
            link: 'https://play.google.com/store/apps/details?id=com.bangente.movil&hl=en-US',
        },
        {
            id: 2,
            title: 'SC - Monitoring Web App',
            description:
                'Platform where companies can list and monitor their dashboards related to enviromentant regulations in real-time.',
            image: scImg,
            technologies: [
                'React',
                'TailwindCSS',
                'TypeScript',
                'GraphQL',
                'Apollo Client',
            ],
            link: 'https://www.smartcompliance-sia.com/login',
        },
        {
            id: 3,
            title: 'FA - Monitoring Web App',
            description:
                'Air filtration real-time monitoring and optimization of HVAC systems. Leveraging lab reports and data analysis to help companies reduce costs and improve efficiency.',
            image: faImg,
            technologies: ['Angular (v10 - v17)', 'RxJS', 'TypeScript'],
            link: 'https://filtrationadvice.com/air-filtration-management',
        },
        {
            id: 4,
            title: 'Wingoo - HR Platform',
            description:
                'With a single registration and without the need to search and filter among thousands of opportunities, companies invite you through the platform.',
            image: wingooImg,
            technologies: [
                'React (v15)',
                'Next.js',
                'Ruby on Rails',
                'TypeScript',
                'SASS',
            ],
            link: 'https://www.wingoo.io',
        },
        {
            id: 5,
            title: 'Growth Road - Social Media Analytics',
            description:
                'Their mission is to revolutionize education and psychometric profile assessment.',
            image: growthRoadImg,
            technologies: [
                'React (v15)',
                'Next.js',
                'Ruby on Rails',
                'TypeScript',
                'SASS',
            ],
            link: 'https://www.growthroad.es/',
        },
        {
            id: 6,
            title: 'Zumetrics - Social Media Analytics',
            description:
                'Zumetrics is a social media analytics platform that helps businesses understand their audience and improve their social media strategy.',
            image: zumetricsImg,
            technologies: [
                'React (v15)',
                'Next.js',
                'Ruby on Rails',
                'TypeScript',
                'SASS',
            ],
            link: 'https://my.zumetrics.vercel.app/',
        },
    ];

    return (
        <div className="bg-[#F5F1E8]">
            <header className="flex justify-center items-center py-8">
                <p className="text-2xl font-bold text-[#3E2C1B]">
                    Yosef Blandin
                </p>
            </header>
            <section className="bg-[#F5F1E8]">
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
                                <Button
                                    className="cursor-pointer"
                                    variant="default"
                                >
                                    Know more
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </section>
            </section>
        </div>
    );
}
