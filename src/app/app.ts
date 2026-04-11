import { Component } from '@angular/core';
import { NavbarComponent }    from './features/navbar/navbar.component';
import { HeroComponent }      from './features/hero/hero.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent }  from './features/projects/projects.component';
import { SkillsComponent }    from './features/skills/skills.component';
import { ContactComponent }   from './features/contact/contact.component';
import { FooterComponent }    from './features/footer/footer.component';
import { LangToggleComponent } from './shared/components/lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
    LangToggleComponent,
  ],
  template: `
    <app-navbar />

    <main>
      <app-hero />
      <app-experience />
      <app-projects />
      <app-skills />
      <app-contact />
    </main>

    <app-footer />
    <app-lang-toggle />
  `,
})
export class App {}
