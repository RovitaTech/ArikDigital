import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ClientLogo {
  name: string;
  widthClass: string;
  text: string;
  stroke?: boolean;
}

@Component({
  selector: 'app-clients',
  standalone: true,
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientsComponent {
  protected readonly clients: ClientLogo[] = [
    { name: 'Meta', widthClass: 'w-24', text: 'Meta' },
    { name: 'Amazon', widthClass: 'w-28', text: 'amazon', stroke: true },
    { name: 'Google', widthClass: 'w-28', text: 'Google' },
    { name: 'Stripe', widthClass: 'w-24', text: 'Stripe' },
    { name: 'Shopify', widthClass: 'w-28', text: 'Shopify' },
    { name: 'Netflix', widthClass: 'w-28', text: 'NETFLIX' },
  ];
}