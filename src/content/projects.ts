import type { StaticImageData } from 'next/image';
import bangenteImg from '@/assets/bangente2.png';
import scImg from '@/assets/monitoring_app.png';
import faImg from '@/assets/filtrationadvice.png';
import growthRoadImg from '@/assets/growthroad.png';
import wingooImg from '@/assets/wingoo.png';

type Media =
    | { kind: 'image'; src: StaticImageData; file: string; alt: string }
    | { kind: 'slip'; figure: string; caption: string; rows: [string, string][]; label: string };

export type Project = {
    slug: string;
    company: string;
    period: string;
    title: string;
    seoTitle: string;
    // 140–160 characters: role, problem, stack and result.
    seoDescription: string;
    updatedAt: string;
    problem: string;
    outcomes: string[];
    tags: string[];
    link?: { href: string; label: string };
    media: Media;
    study: { intro: string; sections: { heading: string; items: string[] }[] };
};

export const projects: Project[] = [
    {
        slug: 'aidonic',
        company: 'AIDONIC',
        period: 'Oct 2025 – Present',
        title: 'Aid-payments vendor app',
        seoTitle: 'AIDONIC case study: aid-payments app in React Native',
        seoDescription:
            'How I took AIDONIC’s React Native vendor app from 1.0 to 2.1: 14 languages with RTL Arabic, offline login, QR scanning and OCR bank-transfer payouts.',
        updatedAt: '2026-10-07',
        problem:
            'NGO vendors hand out cash and voucher aid, often with poor connectivity and in many languages. The app has to work every time.',
        outcomes: [
            'Took the React Native app from 1.0 to 2.1 in nine months.',
            'Shipped biometric and offline login, QR and offline-card scanning, and receipts.',
            'Built a bank-transfer payout flow with OCR receipt review, behind a feature flag.',
        ],
        tags: ['React Native (New Arch)', 'TypeScript', 'Next.js', 'Serverless AWS', 'Turborepo'],
        media: {
            kind: 'slip',
            label: 'Summary card: AIDONIC vendor app, 14 languages including right-to-left Arabic',
            figure: '14 languages',
            caption: 'including right-to-left Arabic, with offline login',
            rows: [
                ['Release', '1.0 → 2.1 in 9 months'],
                ['Users', '100 active vendors'],
                ['Status', 'In production'],
            ],
        },
        study: {
            intro: 'I’m the frontend and mobile engineer on the vendor app, which NGO vendors use to deliver cash and voucher aid. I own mobile releases and stability.',
            sections: [
                {
                    heading: 'What I built',
                    items: [
                        'Took the app (React Native New Architecture, TypeScript) from 1.0 to 2.1 in nine months. 100 active vendors use it.',
                        'Shipped it in 14 languages, including right-to-left Arabic, with biometric and offline login, QR and offline-card scanning, and receipts.',
                        'Built the frontend of a bank-transfer payout flow with OCR receipt review across mobile, web and API, behind a feature flag on a backwards-compatible API.',
                        'Improved OCR for Arabic and PDF receipts, which removed false account-mismatch errors.',
                        'Shipped role-based access control across three frontends and the API (about 80 backend PRs on Serverless AWS) and redesigned the Next.js vendor portal.',
                    ],
                },
                {
                    heading: 'How I work there',
                    items: [
                        'Lead the move of the React Native app and two Next.js apps into one monorepo with pnpm and Turborepo.',
                        'Work daily with Claude Code and Cursor, with project skills so agents follow team conventions.',
                    ],
                },
            ],
        },
    },
    {
        slug: 'bangente',
        company: 'Partnet Group',
        period: 'Oct 2023 – Present',
        title: 'Bangente banking app',
        seoTitle: 'Bangente case study: banking app in React Native and Expo',
        seoDescription:
            'Lead mobile engineer on Bangente, a bank’s iOS and Android app with 500 users: transfers, QR and NFC tap-to-pay via a custom Expo module and Rust crypto.',
        updatedAt: '2026-10-07',
        problem: 'A bank needed its own mobile app, from the first line of code to release in both stores.',
        outcomes: [
            'Built and shipped it to 500 active users with EAS Build, through major React Native and Expo upgrades.',
            'Built transfers, currency exchange, QR and bill payments, cards and fixed-term deposits.',
            'Added NFC tap-to-pay through a custom Expo native module and a Rust cryptography library.',
        ],
        tags: ['React Native', 'Expo · EAS', 'Swift', 'Kotlin', 'Rust', 'Redux'],
        link: {
            href: 'https://play.google.com/store/apps/details?id=com.bangente.movil&hl=en-US',
            label: 'Google Play',
        },
        media: {
            kind: 'image',
            src: bangenteImg,
            file: 'bangente2.png',
            alt: 'Three Bangente app screens: the home screen with accounts, the services menu, and the login screen',
        },
        study: {
            intro: 'I was the lead mobile engineer who built and shipped the bank’s iOS and Android app, from code to store release. I’ve maintained it since November 2025.',
            sections: [
                {
                    heading: 'Payments and cards',
                    items: [
                        'P2P and interbank transfers, saved beneficiaries, currency exchange, QR payments, and tax and utility bill payments.',
                        'Card issuance, PIN change, card lock and fixed-term deposits.',
                        'NFC/HCE tap-to-pay through a custom Expo native module written in Swift and Kotlin.',
                        'A cross-platform Rust cryptography library, bridged to Android through JNI and to iOS through a C FFI.',
                    ],
                },
                {
                    heading: 'Reliability',
                    items: [
                        'A crash in a mobile app closes the whole app, so I added error boundaries at three levels: global, screen and component. Users see a clear message instead of losing their session.',
                        'Migrated the codebase from JavaScript to TypeScript, and used Jest with TDD for account number, phone and amount validation.',
                        'Kept native dependencies healthy, because errors at the native level can’t be caught from JavaScript.',
                    ],
                },
            ],
        },
    },
    {
        slug: 'smart-compliance',
        company: 'Smart Compliance',
        period: 'Aug 2024 – Oct 2025',
        title: 'Real-time compliance dashboard',
        seoTitle: 'Smart Compliance case study: real-time React dashboard',
        seoDescription:
            'A real-time compliance dashboard in React, Recharts and GraphQL over WebSockets, with a D3 heat-map of 10k–20k points and Apollo caching to cut load.',
        updatedAt: '2026-10-07',
        problem:
            'Companies track hundreds of environmental-regulation commitments and need to see risk at a glance, on a wall monitor or a phone.',
        outcomes: [
            'Built a real-time, multi-chart dashboard in React and Recharts over WebSockets.',
            'Cut server load with Apollo Client caching and debounce patterns.',
            'Built a heat-map of 10k–20k points with D3.js force simulations, covered by Playwright tests.',
        ],
        tags: ['React', 'TypeScript', 'GraphQL · Apollo', 'Recharts', 'D3.js', 'Playwright'],
        link: { href: 'https://www.smartcompliance-sia.com/login', label: 'Visit site' },
        media: {
            kind: 'image',
            src: scImg,
            file: 'monitoring_app.png',
            alt: 'Smart Compliance dashboard with execution status bars, a risk scatter plot and stacked bar charts',
        },
        study: {
            intro: 'A platform where companies list and monitor their environmental-regulation dashboards in real time.',
            sections: [
                {
                    heading: 'Data visualization',
                    items: [
                        'A dashboard of many interactive Recharts charts, responsive from wall-sized monitors down to mobile.',
                        'A heat-map of 10k–20k points. I grouped nearby points with BFS clustering and used a D3 repel force so labels stay readable.',
                    ],
                },
                {
                    heading: 'Performance and state',
                    items: [
                        'Fetched data with Apollo Client and used reactive variables for shared state.',
                        'Used debounce and throttle to cut server load, and kept React Context from causing extra re-renders.',
                        'Wrote end-to-end tests with Playwright.',
                    ],
                },
            ],
        },
    },
    {
        slug: 'filtration-advice',
        company: 'Filtration Advice',
        period: 'Client project',
        title: 'HVAC filtration monitoring',
        seoTitle: 'Filtration Advice case study: HVAC monitoring in Angular',
        seoDescription:
            'Real-time HVAC filtration monitoring in Angular, RxJS and Chart.js over WebSockets, with PDF analysis reports and a multi-step form with async checks.',
        updatedAt: '2026-10-07',
        problem:
            'Facilities teams need to see how their air filters perform and what they cost, from live sensor data and lab reports.',
        outcomes: [
            'Built a real-time monitoring dashboard in Angular and Chart.js over WebSockets.',
            'Built PDF analysis reports with pdfjs, working within its limited CSS support.',
            'Built a multi-step setup form with Angular Reactive Forms and async validation.',
        ],
        tags: ['Angular', 'RxJS', 'TypeScript', 'Chart.js', 'Jasmine', 'Cypress'],
        link: { href: 'https://filtrationadvice.com/air-filtration-management', label: 'Visit site' },
        media: {
            kind: 'image',
            src: faImg,
            file: 'filtrationadvice.png',
            alt: 'Filtration Advice home page for its HVAC air-filtration total-cost-of-ownership software',
        },
        study: {
            intro: 'Filtration Advice helps companies monitor and optimize their HVAC air filtration, using live data and lab reports to cut costs and improve efficiency.',
            sections: [
                {
                    heading: 'What I built',
                    items: [
                        'The main monitoring dashboard, fed in real time over WebSockets, with charts in Chart.js.',
                        'PDF reports that present each analysis. The PDF library supports only a small part of CSS, so the layouts took careful work.',
                        'A multi-step form where users describe their filtration system, built with Angular Reactive Forms and FormBuilder, including async validation.',
                    ],
                },
                {
                    heading: 'Quality',
                    items: [
                        'Tested components and services with Jasmine, and user flows with Cypress.',
                        'Followed clean architecture and SOLID principles to keep the codebase maintainable across Angular upgrades from v10 to v17.',
                    ],
                },
            ],
        },
    },
    {
        slug: 'turpial',
        company: 'Turpial Development',
        period: 'Feb 2022 – Sep 2023',
        title: 'Client work: speed, search and dashboards',
        seoTitle: 'Turpial case study: faster sites, search and dashboards',
        seoDescription:
            'Agency work at Turpial: cut a client site’s load from 8s to 1.5s, built a React pharma search (+8% traffic) and Growth Road’s student dashboards.',
        updatedAt: '2026-10-07',
        problem: 'Agency work for several clients, where speed and search directly affected traffic.',
        outcomes: [
            'Cut a client site’s initial load from 8s to 1.5s, and bounce rate fell 13%.',
            'Built a React pharmaceutical search that lifted traffic by about 8%.',
            'Built Growth Road’s real-time student dashboard and per-student PDF reports.',
        ],
        tags: ['React', 'Angular', 'TypeScript', 'SASS', 'Django'],
        link: { href: 'https://www.growthroad.es/', label: 'Growth Road' },
        media: {
            kind: 'image',
            src: growthRoadImg,
            file: 'growthroad.png',
            alt: 'Growth Road student dashboard with a progress ring, vocational-interest charts and course chapters',
        },
        study: {
            intro: 'At Turpial I worked across several client products, most of them where performance and search drove the business.',
            sections: [
                {
                    heading: 'Performance and search',
                    items: [
                        'Cut a client site’s initial load from 8s to 1.5s. Bounce rate went down 13%.',
                        'Built a React pharmaceutical search that lifted traffic by about 8%.',
                    ],
                },
                {
                    heading: 'Growth Road',
                    items: [
                        'Growth Road assesses students’ vocational interests and psychometric profiles.',
                        'Built a real-time student dashboard with charts, and a PDF report generator driven by each student’s grades.',
                        'Contributed features and bug fixes to the Django backend.',
                    ],
                },
            ],
        },
    },
    {
        slug: 'wingoo',
        company: 'Wingoo.io',
        period: 'Feb 2021 – Jan 2022',
        title: 'Wingoo job-matching platform',
        seoTitle: 'Wingoo case study: Rails to Next.js migration',
        seoDescription:
            'As Wingoo’s sole frontend developer, I led the move of a job-matching platform from Rails views to Next.js and TypeScript and cut CSS bloat by 80%.',
        updatedAt: '2026-10-07',
        problem: 'Companies invite candidates through one registration, so nobody has to search thousands of listings.',
        outcomes: [
            'Joined as the only frontend developer.',
            'Led the migration from Rails views to Next.js and TypeScript.',
            'Cut CSS bloat by 80%.',
        ],
        tags: ['Next.js', 'React', 'TypeScript', 'SASS', 'Formik'],
        link: { href: 'https://www.wingoo.io', label: 'Visit site' },
        media: {
            kind: 'image',
            src: wingooImg,
            file: 'wingoo.png',
            alt: 'Wingoo home page: “One application, thousands of jobs opportunities”, with partner logos below',
        },
        study: {
            intro: 'I joined Wingoo as its first and only frontend developer.',
            sections: [
                {
                    heading: 'What I built',
                    items: [
                        'Led the migration of the platform’s frontend from Ruby on Rails to Next.js and TypeScript.',
                        'Rebuilt the styles in SASS and cut CSS bloat by 80%.',
                        'Built the forms with Formik and shared state with React Context.',
                    ],
                },
            ],
        },
    },
];

export function getProject(slug: string) {
    return projects.find((project) => project.slug === slug);
}
