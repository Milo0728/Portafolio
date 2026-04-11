import { Component, inject, computed } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  template: `
    <div
      class="fixed bottom-6 right-6 z-40 flex overflow-hidden border text-xs font-bold tracking-widest transition-all duration-300"
      [class]="containerClass()"
      role="group"
      aria-label="Language selector"
    >
      <button
        (click)="langSvc.set('es')"
        class="px-3 py-2 transition-colors duration-200"
        [class]="btnClass('es')"
        aria-label="Español"
      >ES</button>

      <span class="self-stretch w-px" [class]="isDark() ? 'bg-neutral-700' : 'bg-neutral-300'"></span>

      <button
        (click)="langSvc.set('en')"
        class="px-3 py-2 transition-colors duration-200"
        [class]="btnClass('en')"
        aria-label="English"
      >EN</button>
    </div>
  `,
})
export class LangToggleComponent {
  langSvc  = inject(LanguageService);
  themeSvc = inject(ThemeService);

  isDark = this.themeSvc.isDark;

  containerClass = computed(() =>
    this.isDark()
      ? 'border-neutral-700 bg-black/80 backdrop-blur-md'
      : 'border-neutral-300 bg-white/80 backdrop-blur-md shadow-sm'
  );

  btnClass(lang: 'es' | 'en'): string {
    const active = this.langSvc.lang() === lang;
    if (this.isDark()) {
      return active ? 'bg-white text-black' : 'text-neutral-400 hover:text-white';
    }
    return active ? 'bg-black text-white' : 'text-neutral-400 hover:text-black';
  }
}
