import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type ServiceIcon = 'globe' | 'cart' | 'zap' | 'palette' | 'trending' | 'wrench';

interface ServiceItem {
  title: string;
  description: string;
  icon: ServiceIcon;
  color: string;
  tag: string | null;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  readonly language = input<'en' | 'de'>('de');

  protected get services(): ServiceItem[] {
    if (this.language() === 'en') {
      return [
        {
          title: 'Custom Web Development',
          description: 'Bespoke websites crafted with modern stacks and clean implementation',
          icon: 'globe',
          color: '#6C63FF',
          tag: 'Most popular',
        },
        {
          title: 'E-commerce Solutions',
          description: 'Complete online stores with seamless checkout and payment integration',
          icon: 'cart',
          color: '#FF6584',
          tag: 'High ROI',
        },
        {
          title: 'Landing Pages',
          description: 'High-converting pages for campaigns, offers, and product launches',
          icon: 'zap',
          color: '#43E8A0',
          tag: 'Fast delivery',
        },
        {
          title: 'Branding & Design',
          description: 'Cohesive visual systems that make your brand unforgettable',
          icon: 'palette',
          color: '#FFC107',
          tag: null,
        },
        {
          title: 'SEO & Performance',
          description: 'Rank better, load faster, and stay visible long-term',
          icon: 'trending',
          color: '#6C63FF',
          tag: null,
        },
        {
          title: 'Ongoing Support',
          description: 'Continuous support so your site stays fast, secure, and up to date',
          icon: 'wrench',
          color: '#FF6584',
          tag: null,
        },
      ];
    }

    return [
      {
        title: 'Individuelle Webentwicklung',
        description: 'Massgeschneiderte Websites mit modernem Tech-Stack und sauberer Umsetzung',
        icon: 'globe',
        color: '#6C63FF',
        tag: 'Am beliebtesten',
      },
      {
        title: 'E-Commerce Loesungen',
        description: 'Komplette Online-Shops mit nahtloser Kasse und Zahlungsintegration',
        icon: 'cart',
        color: '#FF6584',
        tag: 'Hoher ROI',
      },
      {
        title: 'Landingpages',
        description: 'Konversionsstarke Seiten fuer Kampagnen, Angebote und Produktlaunches',
        icon: 'zap',
        color: '#43E8A0',
        tag: 'Schnelle Lieferung',
      },
      {
        title: 'Branding & Design',
        description: 'Konsistente visuelle Systeme, die deine Marke unverwechselbar machen',
        icon: 'palette',
        color: '#FFC107',
        tag: null,
      },
      {
        title: 'SEO & Performance',
        description: 'Besser gefunden werden, schneller laden und nachhaltig sichtbar bleiben',
        icon: 'trending',
        color: '#6C63FF',
        tag: null,
      },
      {
        title: 'Laufende Betreuung',
        description: 'Kontinuierliche Pflege, damit deine Website schnell, sicher und aktuell bleibt',
        icon: 'wrench',
        color: '#FF6584',
        tag: null,
      },
    ];
  }
}