import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInUp = trigger('fadeInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(40px)' }),
    animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1000ms ease-in', style({ opacity: 1 })),
  ]),
]);
