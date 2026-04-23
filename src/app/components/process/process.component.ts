import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  templateUrl: './process.component.html',
  styleUrl: './process.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
  readonly language = input<'en' | 'de'>('de');

  protected get steps(): Array<{ number: string; title: string; description: string }> {
    if (this.language() === 'en') {
      return [
        {
          number: '01',
          title: 'First call',
          description: 'Our sales team helps identify the best solution and discusses the full project scope.',
        },
        {
          number: '02',
          title: 'Onboarding',
          description: 'You get a clear overview of the process and all key details you need to know.',
        },
        {
          number: '03',
          title: 'Development',
          description: 'You can relax while our developers build a professional website for your brand.',
        },
        {
          number: '04',
          title: 'Delivery',
          description: 'In exactly 14 days, your brand new website is delivered and ready to launch.',
        },
      ];
    }

    return [
      {
        number: '01',
        title: 'Erstgespraech',
        description: 'Unser Sales-Team findet mit dir die beste Loesung und bespricht den Projektumfang.',
      },
      {
        number: '02',
        title: 'Onboarding',
        description: 'Du bekommst einen klaren Ueberblick ueber den Ablauf und alle Informationen, die du brauchst.',
      },
      {
        number: '03',
        title: 'Entwicklung',
        description: 'Du kannst dich zuruecklehnen, waehrend unser Team deine professionelle Website entwickelt.',
      },
      {
        number: '04',
        title: 'Uebergabe',
        description: 'In genau 14 Tagen erhaeltst du deine brandneue Website - startklar fuer den Livegang.',
      },
    ];
  }
}