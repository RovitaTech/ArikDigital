import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
  protected readonly steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We learn about your business, goals, and vision for success',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Our team crafts stunning mockups tailored to your brand',
    },
    {
      number: '03',
      title: 'Develop',
      description: 'We build your site with clean code and smooth interactions',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Go live and watch your digital presence transform your business',
    },
  ];
}