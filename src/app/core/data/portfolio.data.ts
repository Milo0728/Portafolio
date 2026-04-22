import { Experience, Profile, Project, Skill } from '../models/portfolio.model';

export const PROFILE_DATA: Profile = {
  name: 'Juan Camilo Rodríguez Caicedo',
  role: 'Full Stack Developer',
  bio: 'Desarrollador Full Stack con más de 4 años de experiencia en aplicaciones web. Dominio de Angular, React, Node.js, Flask y Spring Boot. Inglés C1 certificado (IELTS). Actualmente profundizando en machine learning y cloud computing.',
  photo: 'assets/images/profile.png',
  socialLinks: [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/juan-camilo-rodr%C3%ADguez-989030245/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/Milo0728', icon: 'github' },
  ],
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Gobernación del Valle del Cauca — Subsecretaría de Protección y Bienestar Animal',
    role: 'Practicante de Ingeniería de Sistemas',
    period: 'Oct 2025 — Mar 2026',
    description: 'Desarrollo completo de la plataforma web PYBA para seguimiento de indicadores estratégicos, metas y políticas públicas. Frontend en Angular con formularios dinámicos, API REST con Flask, base de datos PostgreSQL. Módulos de estrategias, indicadores, usuarios y autenticación con control de roles. Despliegue en servidor VPS con Git en entorno Linux.',
  },
  {
    company: 'Motul — Rappi',
    role: 'Desarrollador Full Stack',
    period: 'Nov 2024 — Feb 2025',
    description: 'Desarrollo de aplicación web para gestión de aceites automotrices con CRUD completo. Frontend en Angular con filtros dinámicos y diseño UX/UI mejorado. Integración con REST API en arquitectura modular y escalable.',
  },
  {
    company: 'Fundación para el Desarrollo Natural y Científico de Colombia',
    role: 'Digitador',
    period: '2020 — Actualidad',
    description: 'Digitación, organización y sistematización de datos e informes técnicos. Automatización de tareas repetitivas para optimizar procesos internos.',
  },
  {
    company: 'INGEMEDI SAS e INGEKONS SAS',
    role: 'Asistente Administrativo',
    period: '2020 — 2025',
    description: 'Gestión documental, manejo de archivos y seguimiento de proyectos. Coordinación con clientes y proveedores; apoyo en procesos administrativos.',
  },
  {
    company: 'JRIMPORTACIONES SAS',
    role: 'Asistente Administrativo',
    period: '2018 — 2020',
    description: 'Control de inventarios, facturación y atención al cliente. Apoyo en logística y administración de bases de datos.',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'PYBA — Gestión de Indicadores',
    description: 'Plataforma web para la Gobernación del Valle del Cauca que permite el seguimiento de indicadores estratégicos, metas y políticas públicas. Incluye dashboard de cumplimiento, reportes y visualización de datos con autenticación por roles.',
    image: 'assets/images/project-pyba.png',
    technologies: ['Angular', 'Flask', 'PostgreSQL', 'Linux', 'VPS'],
    demoUrl: 'https://gestionindicadoresgov.netlify.app/',
    githubUrl: null,
    githubPrivate: true,
  },
  {
    title: 'Arka Finance',
    description: 'Dashboard fintech de finanzas personales inspirado en "El Hombre Más Rico de Babilonia". Permite gestionar ingresos, gastos, presupuestos y objetivos financieros con análisis en tiempo real.',
    image: 'assets/images/project-arka.png',
    technologies: [
      'Next.js 14',
      'TypeScript',
      'Firebase',
      'Firestore',
      'TailwindCSS',
      'Zustand',
      'Recharts'
    ],
    demoUrl: 'https://arka-finance-app.vercel.app/',
    githubUrl: null,
    githubPrivate: true,
  },
  {
    title: 'FunkoVerse – E-commerce de Funkos',
    description: 'E-commerce especializado en Funko Pops con catálogo dinámico, carrito de compras, autenticación de usuarios y panel administrativo para gestión de productos y pedidos. Incluye simulación de pasarela de pago y almacenamiento en Firebase.',
    image: 'assets/images/project-funko.png',
    technologies: ['Angular', 'Firebase', 'Firestore', 'TypeScript', 'TailwindCSS'],
    demoUrl: 'https://funko-verse.vercel.app/',
    githubUrl: 'https://github.com/Milo0728/funko-verse'
  },
  {
    title: 'NeuroGOL',
    description: 'Análisis emocional de jugadores de fútbol mediante Inteligencia Artificial y Procesamiento de Lenguaje Natural. Proyecto que combina visión por computadora y PLN para medir el estado emocional durante partidos.',
    image: 'assets/images/project-neurogol.png',
    technologies: ['Python', 'TensorFlow', 'Keras', 'NLP'],
    demoUrl: 'https://neuro-gol.netlify.app',
    githubUrl: 'https://github.com/orgs/NeuroGOL/repositories',
  },
  {
    title: 'MotulRappi',
    description: 'Aplicación web para gestión de aceites automotrices con CRUD completo, filtros dinámicos y diseño UX/UI mejorado. Desarrollada para la alianza Motul–Rappi con arquitectura modular y escalable.',
    image: 'assets/images/project-motul.png',
    technologies: ['Angular', 'TypeScript', 'REST API'],
    demoUrl: 'http://motulrappi.com/',
    githubUrl: null,
    githubPrivate: true,
  },
  {
    title: 'Netflix Clone',
    description: 'Réplica funcional de Netflix con integración a API de películas, diseño totalmente responsive y sistema de autenticación de usuarios. Enfocado en replicar la experiencia de usuario de la plataforma original.',
    image: 'assets/images/project-netflix.png',
    technologies: ['React', 'JavaScript', 'REST API', 'CSS'],
    demoUrl: null,
    githubUrl: 'https://github.com/Netflix-App',
  },
  {
    title: 'App de Vuelos',
    description: 'Sistema de reservas de vuelos con buscador avanzado, filtros por precio, aerolínea y horario, y simulación completa del proceso de compra de tiquetes.',
    image: 'assets/images/project-vuelos.png',
    technologies: ['Angular', 'TypeScript', 'Node.js'],
    demoUrl: 'https://flowair.netlify.app/',
    githubUrl: 'https://github.com/orgs/Aerolinea-app/repositories',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Angular', icon: 'angular' },
  { name: 'React', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Python', icon: 'python' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Flask', icon: 'flask' },
  { name: 'Spring Boot', icon: 'spring' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'HTML', icon: 'html' },
  { name: 'CSS', icon: 'css' },
  { name: 'Git', icon: 'git' },
  { name: 'Linux', icon: 'linux' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'Java', icon: 'java' },
  { name: 'NestJS', icon: 'nestjs' },
  { name: 'Express.js', icon: 'express' },
  { name: 'Django', icon: 'django' },
  { name: 'Ionic', icon: 'ionic' },
  { name: 'Bootstrap', icon: 'bootstrap' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Keras', icon: 'keras' },
];
