import { Injectable, signal, computed } from '@angular/core';
import { Lang, TRANSLATIONS } from '../i18n/translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('es');

  /** Reactive dictionary for the active language */
  t = computed(() => TRANSLATIONS[this.lang()]);

  toggle(): void {
    this.lang.set(this.lang() === 'es' ? 'en' : 'es');
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }
}
