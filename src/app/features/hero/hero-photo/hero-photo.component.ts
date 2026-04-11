import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-photo',
  standalone: true,
  template: `
    <div class="hero-photo-wrap w-full h-full relative overflow-hidden">

      <img
        src="assets/images/profile.png"
        alt="Juan Camilo Rodríguez Caicedo"
        class="w-full h-full object-cover grayscale"
        style="object-position: 50% 12%"
        onerror="this.style.display='none'"
      />

      <!-- Blend izquierdo: funde la foto con el panel de texto -->
      <div class="hero-fade-left absolute inset-y-0 left-0 w-2/5 pointer-events-none"></div>

      <!-- Vignette inferior -->
      <div class="hero-fade-bottom absolute inset-x-0 bottom-0 h-48 pointer-events-none"></div>

      <!-- Vignette superior -->
      <div class="hero-fade-top absolute inset-x-0 top-0 h-28 pointer-events-none"></div>

    </div>
  `,
})
export class HeroPhotoComponent {}
