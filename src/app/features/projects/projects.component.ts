import { Component, inject } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { PROJECTS } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="projects" class="min-h-screen px-12 lg:px-20 py-24">

      <h2 class="text-white font-black uppercase text-4xl mb-16 tracking-tight">
        {{ t()['section.projects'] }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (project of projects; track project.title) {
          <app-project-card [project]="project" />
        }
      </div>

    </section>
  `,
})
export class ProjectsComponent {
  private langSvc = inject(LanguageService);
  t = this.langSvc.t;
  projects = PROJECTS;
}
