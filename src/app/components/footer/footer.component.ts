import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  protected readonly quickLinks = [
    { id: 'about', labelKey: 'nav.about' },
    { id: 'services', labelKey: 'nav.services' },
    { id: 'work', labelKey: 'nav.caseStudies' },
    { id: 'contact', labelKey: 'nav.contact' },
  ];

  protected readonly serviceLinks = [
    { id: 'services', label: 'SEO' },
    { id: 'services', label: 'Paid Ads' },
    { id: 'services', label: 'Web Design' },
    { id: 'services', label: 'Analytics' },
  ];

  protected readonly socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { label: 'Instagram', href: 'https://www.instagram.com' },
    { label: 'X', href: 'https://x.com' },
  ];

  protected readonly bookingUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules';

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}