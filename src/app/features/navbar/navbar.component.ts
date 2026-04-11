import {
  Component,
  HostListener,
  OnInit,
  OnDestroy,
  inject,
  signal,
  computed,
} from '@angular/core';
import { ThemeService }    from '../../core/services/theme.service';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header [class]="headerClass()">
      <nav class="flex items-center justify-between px-8 lg:px-16 h-16 max-w-screen-2xl mx-auto">

        <!-- Logo -->
        <button (click)="scrollTo('hero')" [class]="logoClass()">JR</button>

        <!-- Desktop nav links -->
        <ul class="hidden md:flex items-center gap-8 list-none m-0 p-0">
          @for (link of navLinks(); track link.section) {
            <li>
              <button (click)="scrollTo(link.section)" [class]="linkClass(link.section)">
                {{ link.label }}
                <span
                  class="absolute bottom-0 left-0 h-px bg-current transition-all duration-300"
                  [class]="activeSection() === link.section ? 'w-full' : 'w-0 group-hover:w-full'"
                ></span>
              </button>
            </li>
          }
        </ul>

        <!-- Right controls -->
        <div class="flex items-center gap-3">

          <!-- Theme toggle -->
          <button
            (click)="themeSvc.toggle()"
            [class]="themeButtonClass()"
            [attr.aria-label]="isDark() ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
          >
            @if (isDark()) {
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1"     x2="12" y2="3"/>
                <line x1="12" y1="21"    x2="12" y2="23"/>
                <line x1="4.22" y1="4.22"   x2="5.64"  y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1"  y1="12"    x2="3"  y2="12"/>
                <line x1="21" y1="12"    x2="23" y2="12"/>
                <line x1="4.22" y1="19.78"  x2="5.64"  y2="18.36"/>
                <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"/>
              </svg>
            } @else {
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            }
          </button>

          <!-- Resume -->
          <a href="assets/resume.pdf" download="Juan_Camilo_Rodriguez_CV.pdf" [class]="resumeClass()">
            {{ t()['nav.resume'] }} <span class="text-xs ml-0.5">↓</span>
          </a>

          <!-- Hamburger / Close -->
          <button
            class="md:hidden w-8 h-8 flex items-center justify-center transition-colors duration-200"
            [class]="isDark() ? 'text-white' : 'text-black'"
            (click)="menuOpen.set(!menuOpen())"
            aria-label="Toggle menu"
          >
            @if (menuOpen()) {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6"  x2="6"  y2="18"/>
                <line x1="6"  y1="6"  x2="18" y2="18"/>
              </svg>
            } @else {
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="3"  y1="6"  x2="21" y2="6"/>
                <line x1="3"  y1="12" x2="21" y2="12"/>
                <line x1="3"  y1="18" x2="21" y2="18"/>
              </svg>
            }
          </button>
        </div>
      </nav>

      <!-- Mobile menu -->
      @if (menuOpen()) {
        <div class="nav-menu-enter md:hidden border-t px-8 py-6 flex flex-col gap-5"
             [class]="mobileMenuClass()">
          @for (link of navLinks(); track link.section) {
            <button (click)="scrollTo(link.section)" [class]="mobileLinkClass(link.section)">
              {{ link.label }}
            </button>
          }
          <div class="border-t pt-4" [class]="isDark() ? 'border-neutral-800' : 'border-neutral-200'">
            <a
              href="assets/resume.pdf"
              download="Juan_Camilo_Rodriguez_CV.pdf"
              class="text-sm tracking-wide transition-opacity duration-200"
              [class]="isDark() ? 'text-white opacity-50 hover:opacity-100' : 'text-black opacity-50 hover:opacity-100'"
            >{{ t()['nav.resume'] }} ↓</a>
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent implements OnInit, OnDestroy {
  themeSvc = inject(ThemeService);
  langSvc  = inject(LanguageService);

  isDark  = this.themeSvc.isDark;
  t       = this.langSvc.t;

  scrolled      = signal(false);
  activeSection = signal('hero');
  menuOpen      = signal(false);

  private observers: IntersectionObserver[] = [];

  navLinks = computed(() => [
    { label: this.t()['nav.about'],      section: 'hero' },
    { label: this.t()['nav.experience'], section: 'experience' },
    { label: this.t()['nav.projects'],   section: 'projects' },
    { label: this.t()['nav.skills'],     section: 'skills' },
    { label: this.t()['nav.contact'],    section: 'contact' },
  ]);

  headerClass = computed(() => {
    const base = 'fixed top-0 w-full z-50 transition-all duration-300';
    if (this.scrolled()) {
      return this.isDark()
        ? `${base} backdrop-blur-md bg-black/80 border-b border-neutral-800`
        : `${base} backdrop-blur-md bg-white/80 border-b border-neutral-200`;
    }
    return `${base} bg-transparent`;
  });

  logoClass = computed(() => {
    const base = 'font-black text-xl tracking-widest transition-opacity duration-200 hover:opacity-50 cursor-pointer';
    return this.isDark() ? `${base} text-white` : `${base} text-black`;
  });

  themeButtonClass = computed(() => {
    const base = 'w-8 h-8 flex items-center justify-center border transition-all duration-200';
    return this.isDark()
      ? `${base} border-neutral-700 text-white hover:border-neutral-400`
      : `${base} border-neutral-300 text-black hover:border-neutral-600`;
  });

  resumeClass = computed(() => {
    const base = 'hidden md:inline-flex items-center text-sm px-5 py-2 border font-medium tracking-wide transition-all duration-200 no-underline';
    return this.isDark()
      ? `${base} border-white text-white hover:bg-white hover:text-black`
      : `${base} border-black text-black hover:bg-black hover:text-white`;
  });

  mobileMenuClass = computed(() =>
    this.isDark()
      ? 'border-neutral-800 bg-black/95 backdrop-blur-md'
      : 'border-neutral-200 bg-white/95 backdrop-blur-md'
  );

  linkClass(section: string): string {
    const base = 'relative text-sm tracking-wide pb-0.5 transition-colors duration-200 group cursor-pointer';
    const active = this.activeSection() === section;
    return this.isDark()
      ? `${base} ${active ? 'text-white' : 'text-neutral-500 hover:text-white'}`
      : `${base} ${active ? 'text-black' : 'text-neutral-400 hover:text-black'}`;
  }

  mobileLinkClass(section: string): string {
    const base = 'text-left text-sm tracking-wide transition-colors duration-200 cursor-pointer';
    const active = this.activeSection() === section;
    return this.isDark()
      ? `${base} ${active ? 'text-white' : 'text-neutral-500 hover:text-white'}`
      : `${base} ${active ? 'text-black' : 'text-neutral-400 hover:text-black'}`;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 20);
  }

  ngOnInit(): void {
    this.themeSvc.init();
    this.setupObserver();
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }

  scrollTo(section: string): void {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }

  private setupObserver(): void {
    ['hero', 'experience', 'projects', 'skills', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) this.activeSection.set(id); },
        { rootMargin: '-30% 0px -65% 0px' }
      );
      obs.observe(el);
      this.observers.push(obs);
    });
  }
}
