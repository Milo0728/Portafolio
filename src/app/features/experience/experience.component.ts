import { Component, inject } from '@angular/core';
import { ExperienceItemComponent } from './experience-item/experience-item.component';
import { EXPERIENCES } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceItemComponent],
  template: `
    <section id="experience" class="min-h-screen px-12 lg:px-20 py-24">

      <h2 class="text-white font-black uppercase text-4xl mb-16 tracking-tight">
        {{ t()['section.experience'] }}
      </h2>

      @for (exp of experiences; track exp.company) {
        <app-experience-item [experience]="exp" />
      }

    </section>
  `,
})
export class ExperienceComponent {
  private langSvc = inject(LanguageService);
  t = this.langSvc.t;
  experiences = EXPERIENCES;
}
