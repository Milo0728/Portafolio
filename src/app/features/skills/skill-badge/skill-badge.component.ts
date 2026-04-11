import { Component, Input } from '@angular/core';
import { Skill } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  template: `
    <div class="skill-badge group flex flex-col items-center gap-3 p-5 border border-neutral-800 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all duration-200 cursor-default">

      <div class="w-9 h-9 flex items-center justify-center">
        <img
          [src]="iconUrl"
          [alt]="skill.name"
          class="w-full h-full object-contain skill-icon"
          [class.skill-icon-mono]="isMono"
          loading="lazy"
          onerror="this.style.opacity='0.2'"
        />
      </div>

      <p class="skill-badge-label text-neutral-400 text-xs font-medium text-center transition-colors duration-200 group-hover:text-white">
        {{ skill.name }}
      </p>

    </div>
  `,
})
export class SkillBadgeComponent {
  @Input() skill!: Skill;

  /** devicon key overrides (icon field → devicon folder/key name) */
  private static readonly keyMap: Record<string, string> = {
    tailwind:   'tailwindcss',
    html:       'html5',
    css:        'css3',
    nodejs:     'nodejs',
    spring:     'spring',
    nestjs:     'nestjs',
    tensorflow: 'tensorflow',
    postgresql: 'postgresql',
    mongodb:    'mongodb',
    express:    'express',
    django:     'django',
    ionic:      'ionic',
    bootstrap:  'bootstrap',
    figma:      'figma',
    keras:      'keras',
  };

  /** devicon variant overrides (icon field → variant suffix instead of 'original') */
  private static readonly variantMap: Record<string, string> = {
    django:   'plain',      // django-plain.svg has the visible green logo
    express:  'original',   // white but handled by monoIcons
    keras:    'original',
  };

  /** White/monochrome icons — inverted in light mode via CSS */
  private static readonly monoIcons = new Set([
    'flask', 'linux', 'express', 'nextjs',
  ]);

  get iconUrl(): string {
    const key     = SkillBadgeComponent.keyMap[this.skill.icon] ?? this.skill.icon;
    const variant = SkillBadgeComponent.variantMap[this.skill.icon] ?? 'original';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-${variant}.svg`;
  }

  get isMono(): boolean {
    return SkillBadgeComponent.monoIcons.has(this.skill.icon);
  }
}
