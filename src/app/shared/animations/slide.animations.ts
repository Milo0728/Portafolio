import { animate, style, transition, trigger } from '@angular/animations';

export const slideInRight = trigger('slideInRight', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(60px)' }),
    animate('800ms 200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30px)' }),
    animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);
