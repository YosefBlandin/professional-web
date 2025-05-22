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

<p>Those three levels must be considered because that allows to catch errors gracefully showing a message to users without interrupting the entire experience. The problem was whenever an error occurred at a native level, it was not possible to catch it, so maintaining a good health in terms of app dependencies was crucial too.</p>

<br />

<p>The application was built JavaScript, I rewritten it by using typescript and jest at the same time in order to make it more stable.</p>
<br />

<p>It was a very challenging project where a used Redux a lot too, and yet, I don’t understand why so many people are scared about using Redux, it’s an amazing tool, it just has a stepper learning curve, but it’s worth taking it.</p>
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
        post: `
				<p>In Smart Compliances I enhanced my skills on data visualization. I was already familiar with libraries like D3.js and chart.js, but this time I was using Recharts to build a dashboard containing many charts the users can interact with.</p>

				<br />

				<p>The project was built with React, I used Apollo Client to fetch data from the server and I styled the app with TailwindCSS.</p>

				<br />

				<p>The most challenging part was to make the charts responsive, since the app was going to be used in a big screen, but also in a mobile phone, so I had to make sure the charts were going to be displayed correctly in all screen sizes.</p>

				<br />

				<p>I also learned a lot about GraphQL, I didn't know much about it before, but it's a very powerful tool, and I'm going to use it in the future.</p>

				<br />

				<p>Something else I learned was how to use the debounce and throttle functions to avoid overloading the server with requests, and how to use the useEffect hook to fetch data from the server.</p>

				<br />

				<p>Additionally, I didn't know about reactive variables in Apollo Client, so I learned about them and how to use them to store data in the cache.</p>

				<br />

				<p>
					For state management we were using Context API, I was already familiar with it, but this time I learned about how to prevent re-renders when using it.
				</p>

				<br />

				<p>
					The biggest challenge was to make a heatmap chart but very scalable to support a large amount of data, like 10K - 20K points, so I had to learn about Bread-first search algorithm in order to find the nearest points and then create a cluster of points. We had to create a function to set a limit of points a cluster can have, because if we didn't do it, the cluster would be too big.
				</p>

				<br />

				<p>I had to use D3.js to create like a force to repel the points with different states to avoid overlapping.</p>

				<br />

				<p>
					I'm very grateful for the experience I had in Smart Compliances, I learned a lot of things that I didn't know before, and I'm very proud of the work I did there and the team I worked with, they were a wonderful team.
				</p>
				`,
    },
    {
        id: 3,
        title: 'FA - Monitoring Web App',
        description:
            'Air filtration real-time monitoring and optimization of HVAC systems. Leveraging lab reports and data analysis to help companies reduce costs and improve efficiency.',
        image: faImg,
        technologies: ['Angular (v10 - v17)', 'RxJS', 'TypeScript'],
        link: 'https://filtrationadvice.com/air-filtration-management',
        post: `
				<p>
					In Filtration Advice I learned a lot about Angular, RxJS, TypeScript and Chart.js. The main feature was to build a dashboard that was going to be used by the users to monitor the air filtration system. The app was connected using WebSockets, so we were receiving data in real-time.
 				</p>

				<br />

				<p>
					I also learned about the importance of testing, I was already familiar with it, but this time I learned about how to test the components and the services. I was using Jasmine and Cypress.
				</p>

				<br />

				<p>
					One of the biggest challenges was to build a PDF report that was going to be used by the users to show the results of the analysis. It is complex due the limited usage of CSS that the library allows, we were using pdfjs to build the report.
				</p>

				<br />

				<p>
					Another challenge I faced was to build a multi-step form that was going to be used by the users to fill the data of their filtration system. I used Angular Reactive Forms to build the form, and I learned about how to validate the form and how to use the FormBuilder, we had async validations too.
				</p>

				<br />
				
				<p>
					We were following clean architecture principles and SOLID principles. I learned a lot about how to build a scalable and maintainable code.
				</p>
				
				`,
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
        post: `
				<p>
					In Wingoo I learned a lot about React, Next.js, TypeScript and SASS. The main feature was to connect job seekers with companies through job postings inside the platform.
				</p>

				<br />

				<p>
					I was using Ruby on Rails initially, but we decided to migrate to Next.js since the development experience was better, it was difficult to find frontend developers that were familiar with the codebase.
				</p>

				<br />

				<p>
					I was helping to build the new platform from scratch, I was the only frontend developer in the team, so I had to learn a lot about the codebase and the business logic.
				</p>

				<br />

				<p>
					I was using SASS to build the styles and Context API to manage the state. We were using Formik to build the forms. I became more proficient in responsive design here.
				</p>
		`,
    },
    {
        id: 5,
        title: 'Growth Road - Social Media Analytics',
        description:
            'Their mission is to revolutionize education and psychometric profile assessment.',
        image: growthRoadImg,
        technologies: ['Angular (v15 - v17)', 'TypeScript', 'SASS', 'Django'],
        link: 'https://www.growthroad.es/',
        post: `
				<p>
					In Growth Road I continued to learn about Angular, RxJS, TypeScript and Chart.js. The main feature was to build a dashboard that was going to be used by students to monitor their progress and their psychometric profile.
				</p>
				
				<br />

				<p>
					I implement a lot of charts and I built a PDF report fully dynamic based on the grades of the students.
				</p>
				
				<br />

				<p>
					I was helping my team on the backend side too, I was using Django to build new features and fix bugs.
				</p>
				
				<br />

				<p>
					A challenge I remember was to build like a breadcrumb to navigate through the app, I thought it was going to be hard, but it was not. We were using clean architecture principles and SOLID principles.
				</p>`,
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
        post: `
				<p>
					In Zumetrics I learned a lot about React, Next.js, TypeScript and SASS. It was my first job as a frontend developer, here I gained more proficiency in React and Next.js.
				</p>

				<br />

				<p>
					Here I had to build the login and register pages, I learned a lot about how to build a form and how to validate it. I learned about Auth0 to implement the authentication including multi-factor authentication.
				</p>

				<br />

				<p>
					I had to fix bugs related to the charts too, we were using Recharts to build the charts.
				</p>
		`,
    },
];
