import bangenteImg from '@/assets/bangente2.png';
import scImg from '@/assets/monitoring_app.png';
import faImg from '@/assets/filtrationadvice.png';
import wingooImg from '@/assets/wingoo.png';
import zumetricsImg from '@/assets/zumetrics.png';
import growthRoadImg from '@/assets/growthroad.png';

export const projects = [
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
        post: `
		<p>In Bangente I sharpened my skills mainly on error handling and Typescript. A crash on a web application is very different to a crash on a mobile app, since the app is going to close unexpectedly, the app must be error free. That’s why I learned about the three different levels of error boundaries in React:</p>

<ul className="list-disc pl-12 my-8">
	<li>Global level</li>
	<li>Screen level</li>
	<li>Component level</li>
</ul>

<p>Those three levels must be considered because that allows to catch errors gracefully showing a message to users without interrupting the entire experience. The problem was whenever an error occurred at a native level, it was not possible to catch it, so maintaining a good health in terms of app dependencies was crucial too</p>

<br />

<p>The application was built JavaScript, I rewritten it by using typescript and jest at the same time in order to make it more stable.</p>

<p>A challenge that I still remember was when I was implementing a native library for iOS and Android, that was a great experience and I learned a lot about native debugging techniques, the library was an SDK that receives user information and a QR data string in order to get</p>
		`,
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
