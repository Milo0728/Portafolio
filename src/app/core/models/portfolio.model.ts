export interface Profile {
  name: string;
  role: string;
  bio: string;
  photo: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string | null;      // null = sin despliegue público
  githubUrl: string | null;    // null = repositorio privado
  githubPrivate?: boolean;     // true = mostrar badge "Privado"
}
