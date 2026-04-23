import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface PlanItem {
  name: string;
  price: string;
  period: string;
  maintenance: string;
  features: string[];
  badge?: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  readonly language = input<'en' | 'de'>('de');
  protected activePlanIndex = 1;

  protected get plans(): PlanItem[] {
    if (this.language() === 'en') {
      return [
        {
          name: 'Start',
          price: 'from EUR 890',
          period: 'one-time',
          maintenance: 'EUR 89 / month maintenance',
          features: ['Up to 5 pages', 'Responsive on all devices', 'Contact form', 'SEO basics', '2 revision rounds'],
        },
        {
          name: 'Growth',
          price: 'from EUR 1,690',
          period: 'one-time',
          maintenance: 'EUR 149 / month maintenance',
          features: [
            'Up to 15 pages',
            'Custom animations',
            'CMS or blog system',
            'Advanced SEO',
            'Analytics setup',
            'Unlimited revisions',
          ],
          badge: 'Most popular',
        },
        {
          name: 'Premium',
          price: 'from EUR 2,990',
          period: 'one-time',
          maintenance: 'EUR 249 / month maintenance',
          features: [
            'Unlimited pages',
            'E-commerce and checkout',
            'Payment integrations',
            'Custom integrations',
            'Priority support',
            'Dedicated project contact',
          ],
        },
      ];
    }

    return [
      {
        name: 'Start',
        price: 'ab 890 EUR',
        period: 'einmalig',
        maintenance: '89 EUR / Monat Betreuung',
        features: ['Bis zu 5 Seiten', 'Responsive auf allen Geraeten', 'Kontaktformular', 'SEO-Basis', '2 Korrekturrunden'],
      },
      {
        name: 'Wachstum',
        price: 'ab 1.690 EUR',
        period: 'einmalig',
        maintenance: '149 EUR / Monat Betreuung',
        features: [
          'Bis zu 15 Seiten',
          'Individuelle Animationen',
          'CMS oder Blog-System',
          'Erweiterte SEO-Optimierung',
          'Analytics-Einrichtung',
          'Unbegrenzte Korrekturen',
        ],
        badge: 'Am beliebtesten',
      },
      {
        name: 'Premium',
        price: 'ab 2.990 EUR',
        period: 'einmalig',
        maintenance: '249 EUR / Monat Betreuung',
        features: [
          'Unbegrenzte Seiten',
          'E-Commerce und Checkout',
          'Zahlungsanbieter-Integration',
          'Individuelle Schnittstellen',
          'Priorisierter Support',
          'Fester Projektansprechpartner',
        ],
      },
    ];
  }

  protected setActivePlan(index: number): void {
    this.activePlanIndex = index;
  }

  protected isActive(index: number): boolean {
    return this.activePlanIndex === index;
  }

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}