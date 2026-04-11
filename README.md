# Portfolio — Juan Camilo Rodríguez Caicedo

Personal portfolio built with **Angular 21** and **Tailwind CSS**.

## Tech Stack

- [Angular 21](https://angular.dev) — standalone components, signals
- [Tailwind CSS 3](https://tailwindcss.com) — utility-first styling
- [TypeScript 5.9](https://www.typescriptlang.org)
- Angular Animations — fade, slide & stagger transitions

## Features

- **Bilingual** — English / Spanish toggle (i18n without external libraries)
- **Dark / Light theme** — persisted via `localStorage`
- Sections: Hero, Experience, Projects, Skills, Contact
- Responsive design — mobile-first

## Project Structure

```
src/app/
├── core/
│   ├── data/          # Static portfolio content (projects, experience, skills)
│   ├── i18n/          # Translation strings (en/es)
│   ├── models/        # TypeScript interfaces
│   └── services/      # ThemeService, LanguageService
├── features/
│   ├── hero/
│   ├── navbar/
│   ├── experience/
│   ├── projects/
│   ├── skills/
│   ├── contact/
│   └── footer/
└── shared/
    ├── animations/    # Reusable Angular animation factories
    └── components/    # LangToggle, etc.
```

## Getting Started

```bash
npm install
npm start        # dev server → http://localhost:4200
npm run build    # production build → dist/
npm test         # unit tests
```

## Projects Showcased

| Project | Stack |
|---|---|
| PYBA — Gestión de Indicadores | Angular · Flask · PostgreSQL |
| NeuroGOL | Python · TensorFlow · Keras · NLP |
| MotulRappi | Angular · TypeScript · REST API |
| Netflix Clone | React · JavaScript · REST API |
| Analify | Python · Spotify API · Machine Learning |
| App de Vuelos | Angular · TypeScript · Node.js |

## License

Private repository — all rights reserved © 2025 Juan Camilo Rodríguez Caicedo.
