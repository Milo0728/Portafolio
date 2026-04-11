export type Lang = 'en' | 'es';

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  es: {
    /* ── Navbar ─────────────────────────── */
    'nav.about':      'Sobre Mí',
    'nav.experience': 'Experiencia',
    'nav.projects':   'Proyectos',
    'nav.skills':     'Habilidades',
    'nav.contact':    'Contacto',
    'nav.resume':     'Hoja de Vida',

    /* ── Hero ───────────────────────────── */
    'hero.role': 'Desarrollador Full Stack',
    'hero.bio':  'Más de 4 años de experiencia en desarrollo de aplicaciones web. Especializado en Angular, React, Node.js, Flask y Spring Boot. Inglés C1 certificado (IELTS – British Council). Egresado de Ingeniería de Sistemas — USB Cali.',

    /* ── Sections ───────────────────────── */
    'section.experience': 'Experiencia',
    'section.projects':   'Proyectos',
    'section.skills':     'Habilidades',
    'section.contact':    'Contacto',

    /* ── Project card ───────────────────── */
    'card.demo':    'Demo ↗',
    'card.github':  'GitHub ↗',
    'card.private': 'Privado',
    'card.no.demo': 'Sin Deploy',

    /* ── Contact ────────────────────────── */
    'contact.subtitle':      '¿Tienes un proyecto en mente? Hablemos.',
    'contact.info.email':    'Correo',
    'contact.info.phone':    'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.name':          'Nombre',
    'contact.name.ph':       'Tu nombre',
    'contact.email':         'Correo electrónico',
    'contact.email.ph':      'tu@correo.com',
    'contact.message':       'Mensaje',
    'contact.message.ph':    '¿En qué puedo ayudarte?',
    'contact.send':          'Enviar mensaje',
    'contact.sent':          'Mensaje enviado. ¡Gracias!',

    /* ── Footer ─────────────────────────── */
    'footer.role':   'Desarrollador Full Stack',
    'footer.rights': '© 2025 Juan Camilo Rodríguez Caicedo. Todos los derechos reservados.',
    'footer.made':   'Hecho con Angular',
  },

  en: {
    /* ── Navbar ─────────────────────────── */
    'nav.about':      'About Me',
    'nav.experience': 'Experience',
    'nav.projects':   'Projects',
    'nav.skills':     'Skills',
    'nav.contact':    'Contact',
    'nav.resume':     'Resume',

    /* ── Hero ───────────────────────────── */
    'hero.role': 'Full Stack Developer',
    'hero.bio':  '4+ years of experience building web applications. Specialized in Angular, React, Node.js, Flask and Spring Boot. C1 English certified (IELTS – British Council). Systems Engineering graduate — USB Cali.',

    /* ── Sections ───────────────────────── */
    'section.experience': 'Experience',
    'section.projects':   'Projects',
    'section.skills':     'Skills',
    'section.contact':    'Contact',

    /* ── Project card ───────────────────── */
    'card.demo':    'Demo ↗',
    'card.github':  'GitHub ↗',
    'card.private': 'Private',
    'card.no.demo': 'No Deploy',

    /* ── Contact ────────────────────────── */
    'contact.subtitle':      'Have a project in mind? Let\'s talk.',
    'contact.info.email':    'Email',
    'contact.info.phone':    'Phone',
    'contact.info.location': 'Location',
    'contact.name':          'Name',
    'contact.name.ph':       'Your name',
    'contact.email':         'Email address',
    'contact.email.ph':      'you@email.com',
    'contact.message':       'Message',
    'contact.message.ph':    'How can I help you?',
    'contact.send':          'Send message',
    'contact.sent':          'Message sent. Thank you!',

    /* ── Footer ─────────────────────────── */
    'footer.role':   'Full Stack Developer',
    'footer.rights': '© 2025 Juan Camilo Rodríguez Caicedo. All rights reserved.',
    'footer.made':   'Built with Angular',
  },
};
