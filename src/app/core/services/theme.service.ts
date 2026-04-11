import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDark = signal(true);

  init(): void {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }

  toggle(): void {
    const next = !this.isDark();
    this.isDark.set(next);
    document.documentElement.classList.toggle('dark', next);
  }
}
