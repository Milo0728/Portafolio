import { Component, inject } from '@angular/core';
import { SkillBadgeComponent } from './skill-badge/skill-badge.component';
import { SKILLS } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillBadgeComponent],
  template: `
    <section id="skills" class="min-h-screen px-6 sm:px-12 lg:px-20 py-16 sm:py-24">

      <h2 class="text-white font-black uppercase text-3xl sm:text-4xl mb-10 sm:mb-16 tracking-tight">
        {{ t()['section.skills'] }}
      </h2>

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        @for (skill of skills; track skill.name) {
          <app-skill-badge [skill]="skill" />
        }
      </div>

    </section>
  `,
})
export class SkillsComponent {
  private langSvc = inject(LanguageService);
  t      = this.langSvc.t;
  skills = SKILLS;
}
