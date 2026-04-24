import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly language = input<'en' | 'de'>('de');

  protected readonly quickLinks = [
    { id: 'about', label: { en: 'About', de: 'Ueber uns' } },
    { id: 'services', label: { en: 'Services', de: 'Leistungen' } },
    { id: 'work', label: { en: 'Case Studies', de: 'Case Studies' } },
    { id: 'contact', label: { en: 'Contact', de: 'Kontakt' } },
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