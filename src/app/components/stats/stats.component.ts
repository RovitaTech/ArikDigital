import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  readonly language = input<'en' | 'de'>('de');

  protected get stats(): Array<{ number: string; label: string }> {
    if (this.language() === 'en') {
      return [
        { number: '98%', label: 'Client retention' },
        { number: '10+', label: 'Years of work experience' },
        { number: '14d', label: 'Guaranteed launch in 14d' },
      ];
    }

    return [
      { number: '98%', label: 'Kundenbindung' },
      { number: '10+', label: 'Jahre Berufserfahrung' },
      { number: '14d', label: 'Garantierter Launch in 14 Tagen' },
    ];
  }
}