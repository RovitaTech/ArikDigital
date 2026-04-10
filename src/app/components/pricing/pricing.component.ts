import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  protected activePlanIndex = 1;

  protected readonly plans: PlanItem[] = [
    {
      name: 'Starter',
      price: '€499',
      period: 'one-time',
      maintenance: '€49/mo maintenance',
      features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'SEO basics', '2 revisions'],
    },
    {
      name: 'Growth',
      price: '€1,199',
      period: 'one-time',
      maintenance: '€99/mo maintenance',
      features: [
        'Up to 15 pages',
        'Custom animations',
        'Blog/CMS',
        'Advanced SEO',
        'Analytics',
        'Unlimited revisions',
      ],
      badge: 'Most popular',
    },
    {
      name: 'Premium',
      price: '€2,499',
      period: 'one-time',
      maintenance: '€199/mo maintenance',
      features: [
        'Unlimited pages',
        'E-commerce',
        'Payments',
        'Custom integrations',
        'Priority support',
        'Dedicated manager',
      ],
    },
  ];

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