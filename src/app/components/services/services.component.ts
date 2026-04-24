import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

type ServiceIcon = 'globe' | 'cart' | 'zap' | 'palette' | 'trending' | 'wrench';

interface ServiceItem {
  title: string;
  description: string;
  icon: ServiceIcon;
  color: string;
  tag: string | null;
  preview: string;
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
  protected readonly activeIndex = signal(0);

  protected setActive(index: number): void {
    if (index < 0 || index >= this.services.length) {
      return;
    }

    this.activeIndex.set(index);
  }

  protected activeService(): ServiceItem {
    return this.services[this.activeIndex()] ?? this.services[0];
  }

  protected get services(): ServiceItem[] {
    if (this.language() === 'en') {
      return [
        {
          title: 'SEO Content',
          description: 'Search-focused content systems designed to increase rankings and qualified traffic',
          icon: 'globe',
          color: '#6C63FF',
          tag: 'Most popular',
          preview: '/assets/images/ceo.webp',
        },
        {
          title: 'Branding',
          description: 'Positioning, verbal identity, and visual direction for memorable brand presence',
          icon: 'palette',
          color: '#FFC107',
          tag: null,
          preview: '/assets/images/marketing.webp',
        },
        {
          title: 'UI/UX Design',
          description: 'Conversion-first user journeys and interfaces tailored for modern customer behavior',
          icon: 'palette',
          color: '#43E8A0',
          tag: null,
          preview: '/assets/images/cto.webp',
        },
        {
          title: 'Advertising',
          description: 'Creative and channel strategy for high-impact campaigns across digital platforms',
          icon: 'trending',
          color: '#FF6584',
          tag: 'High impact',
          preview: '/assets/images/ceo.webp',
        },
        {
          title: 'Paid Ads',
          description: 'Performance campaigns optimized weekly for lower CAC and stronger ROAS',
          icon: 'cart',
          color: '#FF6584',
          tag: 'High ROI',
          preview: '/assets/images/marketing.webp',
        },
        {
          title: 'Social Media',
          description: 'Brand-aware social content and paid social loops that convert',
          icon: 'zap',
          color: '#43E8A0',
          tag: 'Fast delivery',
          preview: '/assets/images/cto.webp',
        },
        {
          title: 'Web Design',
          description: 'Premium interfaces with conversion-first architecture across devices',
          icon: 'zap',
          color: '#FFC107',
          tag: null,
          preview: '/assets/images/ceo.webp',
        },
        {
          title: 'Analytics',
          description: 'Unified dashboards and event tracking that clarify growth bottlenecks',
          icon: 'wrench',
          color: '#FF6584',
          tag: null,
          preview: '/assets/images/cto.webp',
        },
      ];
    }

    return [
      {
        title: 'SEO Content',
        description: 'SEO-orientierte Content-Systeme fuer bessere Rankings und qualifizierten Traffic',
        icon: 'globe',
        color: '#6C63FF',
        tag: 'Am beliebtesten',
        preview: '/assets/images/ceo.webp',
      },
      {
        title: 'Branding',
        description: 'Positionierung, Markenbotschaft und visuelle Richtung fuer einen starken Auftritt',
        icon: 'palette',
        color: '#FFC107',
        tag: null,
        preview: '/assets/images/marketing.webp',
      },
      {
        title: 'UI/UX Design',
        description: 'Conversion-orientierte User Journeys und Interfaces fuer moderne Nutzererwartungen',
        icon: 'palette',
        color: '#43E8A0',
        tag: null,
        preview: '/assets/images/cto.webp',
      },
      {
        title: 'Advertising',
        description: 'Kreative Kampagnenstrategie fuer starke Wirkung auf allen digitalen Kanaelen',
        icon: 'trending',
        color: '#FF6584',
        tag: 'Hohe Wirkung',
        preview: '/assets/images/ceo.webp',
      },
      {
        title: 'Paid Ads',
        description: 'Performance-Kampagnen mit laufender Optimierung fuer besseren ROAS',
        icon: 'cart',
        color: '#FF6584',
        tag: 'Hoher ROI',
        preview: '/assets/images/marketing.webp',
      },
      {
        title: 'Social Media',
        description: 'Content- und Paid-Social-Strategien fuer Reichweite mit Ergebnis',
        icon: 'zap',
        color: '#43E8A0',
        tag: 'Schnelle Lieferung',
        preview: '/assets/images/cto.webp',
      },
      {
        title: 'Web Design',
        description: 'Premium Webdesign mit Fokus auf Conversion und mobile Experience',
        icon: 'zap',
        color: '#FFC107',
        tag: null,
        preview: '/assets/images/ceo.webp',
      },
      {
        title: 'Analytics',
        description: 'Tracking und Dashboards, die echte Entscheidungsgrundlagen liefern',
        icon: 'wrench',
        color: '#FF6584',
        tag: null,
        preview: '/assets/images/cto.webp',
      },
    ];
  }
}