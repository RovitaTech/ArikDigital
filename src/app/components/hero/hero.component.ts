import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly animateIn = input(false);
  readonly language = input<'en' | 'de'>('de');
  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';
}