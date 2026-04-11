import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

export const staggerFadeIn = trigger('staggerFadeIn', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger(80, [
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ], { optional: true }),
  ]),
]);
