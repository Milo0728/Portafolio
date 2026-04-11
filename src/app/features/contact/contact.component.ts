import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="min-h-screen px-12 lg:px-20 py-24">

      <h2 class="text-white font-black uppercase text-4xl mb-4 tracking-tight">
        {{ t()['section.contact'] }}
      </h2>

      <p class="text-neutral-400 text-sm mb-16 max-w-sm">
        {{ t()['contact.subtitle'] }}
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-16">

        <!-- ── Contact info ──────────────────── -->
        <div class="lg:col-span-2 flex flex-col gap-8">

          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center border"
                 [class]="isDark() ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-500'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p class="text-neutral-400 text-xs mb-1 uppercase tracking-widest">{{ t()['contact.info.email'] }}</p>
              <a href="mailto:jcrodriguezc0728@hotmail.com"
                 class="text-white text-sm hover:opacity-60 transition-opacity duration-200 no-underline break-all">
                jcrodriguezc0728&#64;hotmail.com
              </a>
            </div>
          </div>

          <!-- Phone -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center border"
                 [class]="isDark() ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-500'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16.92z"/>
              </svg>
            </div>
            <div>
              <p class="text-neutral-400 text-xs mb-1 uppercase tracking-widest">{{ t()['contact.info.phone'] }}</p>
              <a href="tel:+573214648827"
                 class="text-white text-sm hover:opacity-60 transition-opacity duration-200 no-underline">
                +57 321 464 8827
              </a>
            </div>
          </div>

          <!-- LinkedIn -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center border"
                 [class]="isDark() ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-500'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p class="text-neutral-400 text-xs mb-1 uppercase tracking-widest">LinkedIn</p>
              <a href="https://www.linkedin.com/in/juan-camilo-rodr%C3%ADguez-989030245/"
                 target="_blank" rel="noopener noreferrer"
                 class="text-white text-sm hover:opacity-60 transition-opacity duration-200 no-underline">
                juan-camilo-rodriguez-caicedo
              </a>
            </div>
          </div>

          <!-- Location -->
          <div class="flex items-start gap-4">
            <div class="mt-0.5 shrink-0 w-8 h-8 flex items-center justify-center border"
                 [class]="isDark() ? 'border-neutral-700 text-neutral-400' : 'border-neutral-300 text-neutral-500'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p class="text-neutral-400 text-xs mb-1 uppercase tracking-widest">{{ t()['contact.info.location'] }}</p>
              <p class="text-white text-sm">Cali, Colombia</p>
            </div>
          </div>

        </div>

        <!-- ── Form ──────────────────────────── -->
        <form class="lg:col-span-3 flex flex-col gap-8" (submit)="onSubmit($event)">

          @if (sent()) {
            <div class="border border-indigo-500/40 bg-indigo-500/10 px-6 py-4 text-sm text-white">
              {{ t()['contact.sent'] }}
            </div>
          }

          <!-- Name -->
          <div class="flex flex-col gap-2">
            <label class="text-neutral-400 text-xs uppercase tracking-widest">
              {{ t()['contact.name'] }}
            </label>
            <input
              type="text"
              [(ngModel)]="name" name="name"
              [placeholder]="t()['contact.name.ph']"
              class="contact-input bg-transparent border-b pb-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors duration-200 w-full"
              [class]="isDark() ? 'border-neutral-700 focus:border-white' : 'border-neutral-300 focus:border-black'"
              required
            />
          </div>

          <!-- Email -->
          <div class="flex flex-col gap-2">
            <label class="text-neutral-400 text-xs uppercase tracking-widest">
              {{ t()['contact.email'] }}
            </label>
            <input
              type="email"
              [(ngModel)]="email" name="email"
              [placeholder]="t()['contact.email.ph']"
              class="contact-input bg-transparent border-b pb-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors duration-200 w-full"
              [class]="isDark() ? 'border-neutral-700 focus:border-white' : 'border-neutral-300 focus:border-black'"
              required
            />
          </div>

          <!-- Message -->
          <div class="flex flex-col gap-2">
            <label class="text-neutral-400 text-xs uppercase tracking-widest">
              {{ t()['contact.message'] }}
            </label>
            <textarea
              [(ngModel)]="message" name="message"
              [placeholder]="t()['contact.message.ph']"
              rows="5"
              class="contact-input bg-transparent border-b pb-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none transition-colors duration-200 w-full resize-none"
              [class]="isDark() ? 'border-neutral-700 focus:border-white' : 'border-neutral-300 focus:border-black'"
              required
            ></textarea>
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="self-start px-8 py-3 text-sm font-medium tracking-wide transition-all duration-200"
            [class]="isDark()
              ? 'border border-white text-white hover:bg-white hover:text-black'
              : 'border border-black text-black hover:bg-black hover:text-white'"
          >
            {{ t()['contact.send'] }}
          </button>

        </form>

      </div>
    </section>
  `,
})
export class ContactComponent {
  private langSvc  = inject(LanguageService);
  private themeSvc = inject(ThemeService);

  t      = this.langSvc.t;
  isDark = this.themeSvc.isDark;

  name    = '';
  email   = '';
  message = '';
  sent    = signal(false);

  onSubmit(event: Event): void {
    event.preventDefault();
    if (!this.name || !this.email || !this.message) return;

    const subject = encodeURIComponent('Portfolio Contact — ' + this.name);
    const body    = encodeURIComponent(
      `Nombre / Name: ${this.name}\nEmail: ${this.email}\n\n${this.message}`
    );
    window.open(`mailto:jcrodriguezc0728@hotmail.com?subject=${subject}&body=${body}`);
    this.sent.set(true);
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
