import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  protected readonly services: ServiceItem[] = [
    {
      title: 'Custom Web Development',
      description: 'Bespoke websites crafted to perfection, built with modern tech stacks',
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
      description: 'High-converting pages optimized for campaigns and product launches',
      icon: 'zap',
      color: '#43E8A0',
      tag: 'Fast delivery',
    },
    {
      title: 'Brand Identity & Design',
      description: 'Complete visual systems that make your brand unforgettable',
      icon: 'palette',
      color: '#FFC107',
      tag: null,
    },
    {
      title: 'SEO & Performance',
      description: 'Get discovered on search engines and dominate your market',
      icon: 'trending',
      color: '#6C63FF',
      tag: null,
    },
    {
      title: 'Ongoing Support',
      description: 'Dedicated maintenance to keep your site fast, secure, and updated',
      icon: 'wrench',
      color: '#FF6584',
      tag: null,
    },
  ];
}