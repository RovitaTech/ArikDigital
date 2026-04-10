import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  protected readonly stats = [
    { number: '120+', label: 'Websites delivered' },
    { number: '98%', label: 'Client satisfaction' },
    { number: '3x', label: 'Average traffic growth' },
    { number: '7 days', label: 'Average launch time' },
  ];
}