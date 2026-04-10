import { ChangeDetectionStrategy, Component } from '@angular/core';

interface PlanItem {
  name: string;
  price: string;
  period: string;
  maintenance: string;
  features: string[];
  badge?: string;
  containerClass: string;
  buttonClass: string;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingComponent {
  protected readonly plans: PlanItem[] = [
    {
      name: 'Starter',
      price: '€499',
      period: 'one-time',
      maintenance: '€49/mo maintenance',
      features: ['Up to 5 pages', 'Mobile responsive', 'Contact form', 'SEO basics', '2 revisions'],
      containerClass: 'relative bg-gradient-to-b from-[#13131C] to-[#0F0F16] rounded-2xl p-8 transition-all duration-300 border border-white/[0.08] hover:-translate-y-2',
      buttonClass: 'w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all border-2 border-white/[0.1] bg-white/[0.02] text-white hover:bg-white/[0.08] hover:border-white/[0.2] hover:-translate-y-0.5',
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
      containerClass: 'relative bg-gradient-to-b from-[#13131C] to-[#0F0F16] rounded-2xl p-8 transition-all duration-300 border-2 border-[#6C63FF] shadow-[0_0_60px_rgba(108,99,255,0.25)] md:-translate-y-6 md:scale-105',
      buttonClass: 'w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all bg-gradient-to-r from-[#6C63FF] to-[#5B52E8] text-white hover:shadow-lg hover:shadow-[#6C63FF]/30 hover:-translate-y-0.5',
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
      containerClass: 'relative bg-gradient-to-b from-[#13131C] to-[#0F0F16] rounded-2xl p-8 transition-all duration-300 border border-white/[0.08] hover:-translate-y-2',
      buttonClass: 'w-full py-3.5 rounded-xl font-semibold text-[15px] transition-all border-2 border-white/[0.1] bg-white/[0.02] text-white hover:bg-white/[0.08] hover:border-white/[0.2] hover:-translate-y-0.5',
    },
  ];

  protected scrollToSection(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}