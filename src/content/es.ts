import type { Project } from './projects';

// Spanish copy. Anything not listed here (names, links, images, tags) comes from the English content.

export const profileEs = {
    title: 'Ingeniero Mobile y Frontend',
    timezone: 'Remoto (UTC-3)',
    // 140–160 caracteres.
    description:
        'Ingeniero mobile y frontend en Rosario, Argentina. Más de 5 años creando apps con React Native, React y Next.js, los últimos tres en pagos y banca.',
    facts: [
        { label: 'Ubicación', value: 'Rosario, Argentina · Remoto (UTC-3)' },
        { label: 'Idiomas', value: 'Español (nativo) · Inglés (profesional, B2)' },
        { label: 'Código abierto', value: 'Colaborador de SWC (Rust)' },
        { label: 'Formación', value: 'Platzi Frontend Developer, más 65 certificaciones' },
    ],
};

export const proofEs = [
    { value: '5+', caption: 'años desarrollando productos web y mobile' },
    { value: '500', caption: 'usuarios activos en la app iOS y Android de un banco' },
    { value: '14', caption: 'idiomas, incluido el árabe de derecha a izquierda' },
    { value: '8s→1.5s', caption: 'de carga inicial en el sitio de un cliente, con 13% menos de rebote' },
];

export const experienceEs = [
    {
        period: 'Oct 2025 – Actualidad',
        role: 'Ingeniero Frontend y Mobile',
        company: 'AIDONIC',
        summary: 'App de proveedores de la 1.0 a la 2.1 en 14 idiomas; pagos, control de acceso y el monorepo.',
        status: { label: 'Actual', quiet: false },
    },
    {
        period: 'Oct 2023 – Actualidad',
        role: 'Ingeniero Mobile',
        company: 'Partnet Group',
        summary: 'Lideré la app bancaria Bangente desde el código hasta las dos tiendas; la mantengo desde nov 2025.',
        status: { label: 'Mantenimiento', quiet: true },
    },
    {
        period: 'Ago 2024 – Oct 2025',
        role: 'Ingeniero Frontend',
        company: 'Smart Compliance',
        summary: 'Dashboards de cumplimiento en tiempo real sobre WebSockets, con un mapa de calor de 10k–20k puntos.',
    },
    {
        period: 'Feb 2022 – Sep 2023',
        role: 'Ingeniero Frontend',
        company: 'Turpial Development',
        summary: 'Carga inicial de 8s a 1.5s, buscador farmacéutico con +8% de tráfico, dashboards de estudiantes.',
    },
    {
        period: 'Feb 2021 – Ene 2022',
        role: 'Ingeniero Frontend',
        company: 'Wingoo.io',
        summary: 'Único desarrollador frontend; de Rails a Next.js y TypeScript, 80% menos de CSS sobrante.',
    },
];

export const skillGroupsEs: Record<string, string> = {
    Languages: 'Lenguajes',
    'Web and mobile': 'Web y mobile',
    'Real-time and data': 'Tiempo real y datos',
    'State and UI': 'Estado e interfaz',
    'Testing and delivery': 'Testing y entrega',
    'AI tools and open source': 'Herramientas de IA y código abierto',
};

type ProjectCopy = Pick<
    Project,
    'period' | 'title' | 'seoTitle' | 'seoDescription' | 'problem' | 'outcomes' | 'study'
> & {
    link?: string;
    alt?: string;
    slip?: { label: string; figure: string; caption: string; rows: [string, string][] };
};

export const projectsEs: Record<string, ProjectCopy> = {
    aidonic: {
        period: 'Oct 2025 – Actualidad',
        title: 'App de pagos de ayuda humanitaria',
        seoTitle: 'Caso AIDONIC: app de pagos humanitarios en React Native',
        seoDescription:
            'Cómo llevé la app de proveedores de AIDONIC de la 1.0 a la 2.1: 14 idiomas con árabe RTL, login sin conexión, escaneo QR y pagos por transferencia con OCR.',
        problem:
            'Los proveedores de ONG entregan ayuda en efectivo y vales, muchas veces con mala conexión y en muchos idiomas. La app tiene que funcionar siempre.',
        outcomes: [
            'Llevé la app de React Native de la 1.0 a la 2.1 en nueve meses.',
            'Lancé login biométrico y sin conexión, escaneo de QR y tarjetas sin conexión, y comprobantes.',
            'Construí un flujo de pago por transferencia con revisión de comprobantes por OCR, detrás de un feature flag.',
        ],
        slip: {
            label: 'Resumen: app de proveedores de AIDONIC, 14 idiomas incluido el árabe de derecha a izquierda',
            figure: '14 idiomas',
            caption: 'incluido el árabe de derecha a izquierda, con login sin conexión',
            rows: [
                ['Versión', '1.0 → 2.1 en 9 meses'],
                ['Usuarios', '100 proveedores activos'],
                ['Estado', 'En producción'],
            ],
        },
        study: {
            intro: 'Soy el ingeniero frontend y mobile de la app de proveedores, que las ONG usan para entregar ayuda en efectivo y vales. Me encargo de los lanzamientos mobile y de la estabilidad.',
            sections: [
                {
                    heading: 'Qué construí',
                    items: [
                        'Llevé la app (React Native New Architecture, TypeScript) de la 1.0 a la 2.1 en nueve meses. La usan 100 proveedores activos.',
                        'La lancé en 14 idiomas, incluido el árabe de derecha a izquierda, con login biométrico y sin conexión, escaneo de QR y tarjetas sin conexión, y comprobantes.',
                        'Construí el frontend de un flujo de pago por transferencia con revisión de comprobantes por OCR en mobile, web y API, detrás de un feature flag sobre una API retrocompatible.',
                        'Mejoré el OCR para comprobantes en árabe y en PDF, lo que eliminó los falsos errores de cuenta que no coincide.',
                        'Implementé control de acceso por roles en tres frontends y la API (unos 80 PRs de backend en Serverless AWS) y rediseñé el portal de proveedores en Next.js.',
                    ],
                },
                {
                    heading: 'Cómo trabajo ahí',
                    items: [
                        'Lidero la unificación de la app de React Native y dos apps de Next.js en un monorepo con pnpm y Turborepo.',
                        'Trabajo a diario con Claude Code y Cursor, con skills de proyecto para que los agentes sigan las convenciones del equipo.',
                    ],
                },
            ],
        },
    },
    bangente: {
        period: 'Oct 2023 – Actualidad',
        title: 'App bancaria Bangente',
        seoTitle: 'Caso Bangente: app bancaria en React Native y Expo',
        seoDescription:
            'Ingeniero mobile líder de Bangente, la app iOS y Android de un banco con 500 usuarios: transferencias, QR y pago NFC con un módulo Expo propio y cripto en Rust.',
        problem: 'Un banco necesitaba su propia app mobile, desde la primera línea de código hasta la publicación en las dos tiendas.',
        outcomes: [
            'La construí y la publiqué para 500 usuarios activos con EAS Build, pasando por grandes actualizaciones de React Native y Expo.',
            'Desarrollé transferencias, cambio de divisas, pagos con QR y de servicios, tarjetas y plazos fijos.',
            'Agregué pago sin contacto NFC con un módulo nativo propio de Expo y una librería de criptografía en Rust.',
        ],
        link: 'Google Play',
        alt: 'Tres pantallas de la app Bangente: el inicio con las cuentas, el menú de servicios y el login',
        study: {
            intro: 'Fui el ingeniero mobile líder que construyó y publicó la app iOS y Android del banco, desde el código hasta las tiendas. La mantengo desde noviembre de 2025.',
            sections: [
                {
                    heading: 'Pagos y tarjetas',
                    items: [
                        'Transferencias P2P e interbancarias, beneficiarios guardados, cambio de divisas, pagos con QR y pagos de impuestos y servicios.',
                        'Emisión de tarjetas, cambio de PIN, bloqueo de tarjeta y plazos fijos.',
                        'Pago sin contacto NFC/HCE con un módulo nativo propio de Expo escrito en Swift y Kotlin.',
                        'Una librería de criptografía multiplataforma en Rust, conectada a Android con JNI y a iOS con una FFI en C.',
                    ],
                },
                {
                    heading: 'Confiabilidad',
                    items: [
                        'En una app mobile un error cierra toda la app, así que agregué error boundaries en tres niveles: global, pantalla y componente. Los usuarios ven un mensaje claro en lugar de perder la sesión.',
                        'Migré el código de JavaScript a TypeScript y usé Jest con TDD para validar números de cuenta, teléfonos y montos.',
                        'Mantuve sanas las dependencias nativas, porque los errores a nivel nativo no se pueden capturar desde JavaScript.',
                    ],
                },
            ],
        },
    },
    'smart-compliance': {
        period: 'Ago 2024 – Oct 2025',
        title: 'Dashboard de cumplimiento en tiempo real',
        seoTitle: 'Caso Smart Compliance: dashboard en tiempo real con React',
        seoDescription:
            'Un dashboard de cumplimiento en tiempo real con React, Recharts y GraphQL sobre WebSockets, con un mapa de calor D3 de 10k–20k puntos y caché de Apollo.',
        problem:
            'Las empresas siguen cientos de compromisos de regulación ambiental y necesitan ver el riesgo de un vistazo, en un monitor de pared o en el teléfono.',
        outcomes: [
            'Construí un dashboard de múltiples gráficos en tiempo real con React y Recharts sobre WebSockets.',
            'Reduje la carga del servidor con la caché de Apollo Client y patrones de debounce.',
            'Construí un mapa de calor de 10k–20k puntos con simulaciones de fuerza de D3.js, cubierto con tests de Playwright.',
        ],
        link: 'Ver sitio',
        alt: 'Dashboard de Smart Compliance con barras de estado, un gráfico de dispersión de riesgo y barras apiladas',
        study: {
            intro: 'Una plataforma donde las empresas listan y monitorean en tiempo real sus dashboards de regulación ambiental.',
            sections: [
                {
                    heading: 'Visualización de datos',
                    items: [
                        'Un dashboard con muchos gráficos interactivos de Recharts, adaptable desde monitores de pared hasta el teléfono.',
                        'Un mapa de calor de 10k–20k puntos. Agrupé los puntos cercanos con clustering BFS y usé una fuerza de repulsión de D3 para que las etiquetas se lean bien.',
                    ],
                },
                {
                    heading: 'Rendimiento y estado',
                    items: [
                        'Obtuve los datos con Apollo Client y usé reactive variables para el estado compartido.',
                        'Usé debounce y throttle para bajar la carga del servidor, y evité que el Context de React causara renders de más.',
                        'Escribí tests end-to-end con Playwright.',
                    ],
                },
            ],
        },
    },
    'filtration-advice': {
        period: 'Proyecto para cliente',
        title: 'Monitoreo de filtración HVAC',
        seoTitle: 'Caso Filtration Advice: monitoreo HVAC con Angular',
        seoDescription:
            'Monitoreo en tiempo real de filtración HVAC con Angular, RxJS y Chart.js sobre WebSockets, con reportes de análisis en PDF y un formulario por pasos validado.',
        problem:
            'Los equipos de mantenimiento necesitan ver cómo rinden sus filtros de aire y cuánto cuestan, a partir de datos de sensores en vivo y reportes de laboratorio.',
        outcomes: [
            'Construí un dashboard de monitoreo en tiempo real con Angular y Chart.js sobre WebSockets.',
            'Construí reportes de análisis en PDF con pdfjs, dentro de su soporte limitado de CSS.',
            'Construí un formulario de configuración por pasos con Angular Reactive Forms y validación asíncrona.',
        ],
        link: 'Ver sitio',
        alt: 'Página de inicio de Filtration Advice, su software de costo total de la filtración de aire HVAC',
        study: {
            intro: 'Filtration Advice ayuda a las empresas a monitorear y optimizar la filtración de aire HVAC, usando datos en vivo y reportes de laboratorio para bajar costos y ganar eficiencia.',
            sections: [
                {
                    heading: 'Qué construí',
                    items: [
                        'El dashboard principal de monitoreo, alimentado en tiempo real por WebSockets, con gráficos en Chart.js.',
                        'Reportes en PDF que presentan cada análisis. La librería de PDF soporta solo una parte de CSS, así que los diseños requirieron trabajo cuidadoso.',
                        'Un formulario por pasos donde los usuarios describen su sistema de filtración, hecho con Angular Reactive Forms y FormBuilder, con validación asíncrona.',
                    ],
                },
                {
                    heading: 'Calidad',
                    items: [
                        'Testeé componentes y servicios con Jasmine, y los flujos de usuario con Cypress.',
                        'Seguí principios de clean architecture y SOLID para mantener el código a lo largo de las actualizaciones de Angular de la v10 a la v17.',
                    ],
                },
            ],
        },
    },
    turpial: {
        period: 'Feb 2022 – Sep 2023',
        title: 'Trabajo para clientes: velocidad, búsqueda y dashboards',
        seoTitle: 'Caso Turpial: sitios más rápidos, búsqueda y dashboards',
        seoDescription:
            'Trabajo de agencia en Turpial: bajé la carga de un sitio de 8s a 1.5s, construí un buscador farmacéutico en React (+8% de tráfico) y dashboards de Growth Road.',
        problem: 'Trabajo de agencia para varios clientes, donde la velocidad y la búsqueda afectaban directamente el tráfico.',
        outcomes: [
            'Bajé la carga inicial del sitio de un cliente de 8s a 1.5s, y el rebote cayó un 13%.',
            'Construí un buscador farmacéutico en React que subió el tráfico cerca de un 8%.',
            'Construí el dashboard de estudiantes en tiempo real de Growth Road y los reportes PDF por estudiante.',
        ],
        link: 'Growth Road',
        alt: 'Dashboard de estudiantes de Growth Road con un anillo de progreso, gráficos de intereses vocacionales y capítulos del curso',
        study: {
            intro: 'En Turpial trabajé en varios productos de clientes, la mayoría donde el rendimiento y la búsqueda movían el negocio.',
            sections: [
                {
                    heading: 'Rendimiento y búsqueda',
                    items: [
                        'Bajé la carga inicial del sitio de un cliente de 8s a 1.5s. El rebote bajó un 13%.',
                        'Construí un buscador farmacéutico en React que subió el tráfico cerca de un 8%.',
                    ],
                },
                {
                    heading: 'Growth Road',
                    items: [
                        'Growth Road evalúa los intereses vocacionales y el perfil psicométrico de los estudiantes.',
                        'Construí un dashboard de estudiantes en tiempo real con gráficos, y un generador de reportes PDF basado en las notas de cada estudiante.',
                        'Aporté funcionalidades y correcciones al backend en Django.',
                    ],
                },
            ],
        },
    },
    wingoo: {
        period: 'Feb 2021 – Ene 2022',
        title: 'Plataforma de empleo Wingoo',
        seoTitle: 'Caso Wingoo: migración de Rails a Next.js',
        seoDescription:
            'Como único desarrollador frontend de Wingoo, lideré la migración de una plataforma de empleo de vistas Rails a Next.js y TypeScript, y reduje el CSS un 80%.',
        problem: 'Las empresas invitan candidatos con un solo registro, así que nadie tiene que revisar miles de ofertas.',
        outcomes: [
            'Entré como único desarrollador frontend.',
            'Lideré la migración de vistas Rails a Next.js y TypeScript.',
            'Reduje el CSS sobrante un 80%.',
        ],
        link: 'Ver sitio',
        alt: 'Página de inicio de Wingoo: “One application, thousands of jobs opportunities”, con logos de empresas debajo',
        study: {
            intro: 'Entré a Wingoo como su primer y único desarrollador frontend.',
            sections: [
                {
                    heading: 'Qué construí',
                    items: [
                        'Lideré la migración del frontend de la plataforma de Ruby on Rails a Next.js y TypeScript.',
                        'Rehíce los estilos en SASS y reduje el CSS sobrante un 80%.',
                        'Construí los formularios con Formik y compartí estado con React Context.',
                    ],
                },
            ],
        },
    },
};
