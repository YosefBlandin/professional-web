import type { StaticImageData } from 'next/image';
import angelRosendo from '@/assets/testimonials/angel-rosendo.jpeg';
import miguelBastidas from '@/assets/testimonials/miguel-bastidas.jpeg';
import javierValero from '@/assets/testimonials/javier-valero.jpeg';
import haesslerLeon from '@/assets/testimonials/haessler-leon.jpeg';
import jesusBeltran from '@/assets/testimonials/jesus-beltran.jpeg';
import marioPena from '@/assets/testimonials/mario-pena.jpeg';
import albertVierma from '@/assets/testimonials/albert-vierma.jpeg';

export type Testimonial = {
    name: string;
    position: string;
    image: StaticImageData;
    paragraphs: string[];
    lang?: string;
};

export const testimonials: Testimonial[] = [
    {
        name: 'Miguel Bastidas Moreno',
        position: 'CRO Developer (Adobe Target + Dynamic Yield) · managed Yosef',
        image: miguelBastidas,
        paragraphs: [
            'I had the privilege of managing Yosef during his work as a frontend developer on our team. Without hesitation, I can say that he stands out as one of the most exceptional developers I have ever worked with.',
            'His dedication and professionalism were evident in the two key projects he contributed to, namely ‘Nsur’ and ‘Snap’. Not only did Yosef consistently deliver his work punctually, but he also took the initiative to propose and execute performance enhancements for our websites.',
            'Beyond his technical expertise, Yosef is an organized individual who adds immense value to the work environment, making it a joy for his colleagues.',
            'I wholeheartedly recommend Yosef for any frontend development work and am confident that he will be a valuable asset to any team.',
        ],
    },
    {
        name: 'Angel Rosendo',
        position: 'CEO at Filtration Advice Inc. / LPD Technologies',
        image: angelRosendo,
        paragraphs: ['Good team member. Proactive and responsible.'],
    },
    {
        name: 'Jesus Beltran',
        position: 'Software Engineer',
        image: jesusBeltran,
        paragraphs: [
            'Yosef is a incredible software developer, he has amazing communication skills, he’s always eager to help and resolve any problematic that comes through, driven by his passion to always be better he always delivers and excels at his craft.',
            'Working with him was such a nice experience, i learned a lot from frontend out of him, our clients were always happy with his performance, he develops at a fast pace and at high quality, every project would benefit from having a top profile like his.',
            'As a person he’s always a good talk, charismatic and kind.',
        ],
    },
    {
        name: 'Javier Alejandro Valero Rivero',
        position: 'Systems Engineer',
        image: javierValero,
        paragraphs: [
            'Yosef demonstrated a high capacity for analysis, performance and responsibility. He was up to all assigned tasks and was always willing to collaborate and solve technical problems presented in Software development. He adapted very quickly to the workflow, managed to maintain stability and delivered quality results during his stay on the project. As a person he is an excellent teammate, he is a good friend, has a good sense of humor and without a doubt, he is someone I would have back on my work team.',
        ],
    },
    {
        name: 'Mario Jesus Peña Prado',
        position: 'Senior Backend Developer',
        image: marioPena,
        paragraphs: [
            'Great partner with good knowledge of web frontend. He is very disciplined, and responsible, willing to give more than necessary to achieve the goals set.',
        ],
    },
    {
        name: 'Haessler León',
        position: 'Software Engineer',
        image: haesslerLeon,
        paragraphs: [
            'I have had the chance to meet Yosef since many time and he has been both as a good friend as teammate. His skills in problem resolution and his capability to learn is something I admire. He is a person very focused on his work, always willing to complete his tasks responsibly and in the shortest possible time.',
            'Definitely, sharing with Yosef as a co-worker has been a pleasure for me.',
        ],
    },
    {
        name: 'Albert Vierma',
        position: 'Sales Development Representative',
        image: albertVierma,
        lang: 'es',
        paragraphs: [
            'Excelente profesional como pocos me he encontrado en mi vida. Persona integra, capaz y con dos de las virtudes lo cual lo caracteriza como individuo honesto y perseverante. Uno de los mejores en su área y con las capacidades y el coeficiente para ser siempre pieza clave en cualquier proyecto en el cual se le involucre.',
        ],
    },
];
