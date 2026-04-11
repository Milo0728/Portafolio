import { Component, Input } from '@angular/core';
import { Experience } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  template: `
    <div class="border-t border-neutral-800 py-8">
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-3">
        <h3 class="text-white font-bold text-lg">{{ experience.role }}</h3>
        <span class="text-neutral-400 text-sm shrink-0">{{ experience.period }}</span>
      </div>
      <p class="text-neutral-400 text-sm mb-3 font-medium">{{ experience.company }}</p>
      <p class="text-neutral-400 text-sm leading-relaxed">{{ experience.description }}</p>
    </div>
  `,
})
export class ExperienceItemComponent {
  @Input() experience!: Experience;
}
