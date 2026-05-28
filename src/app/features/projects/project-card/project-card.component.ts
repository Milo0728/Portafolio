import { Component, Input, inject } from '@angular/core';
import { Project } from '../../../core/models/portfolio.model';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="h-full border border-neutral-800 hover:border-indigo-500/40 transition-colors duration-300 flex flex-col">

      <!-- Image -->
      <div class="overflow-hidden bg-neutral-900 aspect-video">
        <img
          [src]="project.image"
          [alt]="project.title"
          class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          onerror="this.style.display='none'"
        />
      </div>

      <!-- Content -->
      <div class="p-5 sm:p-6 flex flex-col flex-1">

        <h3 class="text-white font-bold text-base sm:text-lg mb-3 line-clamp-2">{{ project.title }}</h3>

        <p class="text-neutral-400 text-sm leading-relaxed mb-5 line-clamp-4">{{ project.description }}</p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-2 mb-6">
          @for (tech of project.technologies; track tech) {
            <span class="border border-neutral-700 text-neutral-300 text-xs px-3 py-1">{{ tech }}</span>
          }
        </div>

        <!-- Buttons — only rendered when there is at least one action -->
        @if (hasButtons) {
          <div class="flex gap-3 mt-auto">

            <!-- Demo -->
            @if (project.demoUrl) {
              <a
                [href]="project.demoUrl"
                target="_blank" rel="noopener noreferrer"
                class="flex-1 text-center bg-white text-black text-sm font-medium py-2 px-4 hover:bg-neutral-200 transition-colors duration-200 no-underline"
              >{{ t()['card.demo'] }}</a>
            } @else if (project.githubUrl || project.githubPrivate) {
              <!-- "No deploy" badge only when there IS a github button next to it -->
              <span class="flex-1 text-center border border-neutral-800 text-neutral-600 text-xs py-2 px-4 flex items-center justify-center gap-1.5 cursor-default">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                </svg>
                {{ t()['card.no.demo'] }}
              </span>
            }

            <!-- GitHub -->
            @if (project.githubUrl) {
              <a
                [href]="project.githubUrl"
                target="_blank" rel="noopener noreferrer"
                class="flex-1 text-center border border-neutral-600 text-white text-sm font-medium py-2 px-4 hover:border-white transition-colors duration-200 no-underline"
              >{{ t()['card.github'] }}</a>
            } @else if (project.githubPrivate) {
              <span class="flex-1 text-center border border-neutral-800 text-neutral-600 text-xs py-2 px-4 flex items-center justify-center gap-1.5 cursor-default">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                {{ t()['card.private'] }}
              </span>
            }

          </div>
        }

      </div>
    </div>
  `,
})
export class ProjectCardComponent {
  @Input() project!: Project;
  private langSvc = inject(LanguageService);
  t = this.langSvc.t;

  get hasButtons(): boolean {
    return !!(this.project.demoUrl || this.project.githubUrl || this.project.githubPrivate);
  }
}
