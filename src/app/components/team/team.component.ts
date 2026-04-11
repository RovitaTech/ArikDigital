import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  imagePosition: string;
}

interface TeamCarouselMember {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  protected showGroupsView = false;

  protected readonly team: TeamMember[] = [
    {
      name: 'Emirhan',
      role: 'CEO',
      description: 'Shapes vision and long-term company direction.',
      image: '/assets/images/ceo.webp',
      imagePosition: '50% 18%',
    },
    {
      name: 'Arsalan',
      role: 'CTO',
      description: 'Owns architecture, performance, and product technology.',
      image: '/assets/images/cto.webp',
      imagePosition: '50% 38%',
    },
    {
      name: 'Mariam Noor',
      role: 'Marketing Lead',
      description: 'Builds campaigns that convert attention into growth.',
      image: '/assets/images/marketing.webp',
      imagePosition: '50% 20%',
    },
  ];

  protected readonly ourTeamMembers: TeamCarouselMember[] = [
    {
      name: 'Emirhan',
      role: 'CEO',
      image: '/assets/images/ceo.webp',
    },
    {
      name: 'Mariam Noor',
      role: 'Marketing Lead',
      image: '/assets/images/marketing.webp',
    },
    {
      name: 'Arsalan',
      role: 'CTO',
      image: '/assets/images/ceo.webp',
    },
    {
      name: 'Nadia Rehman',
      role: 'Content Lead',
      image: '/assets/images/marketing.webp',
    },
    {
      name: 'Hassan Ali',
      role: 'Frontend Engineer',
      image: '/assets/images/ceo.webp',
    },
    {
      name: 'Lara Ahmed',
      role: 'UI Designer',
      image: '/assets/images/marketing.webp',
    },
    {
      name: 'Omar Khan',
      role: 'Product Manager',
      image: '/assets/images/ceo.webp',
    },
    {
      name: 'Bilal Saeed',
      role: 'Growth Manager',
      image: '/assets/images/marketing.webp',
    },
  ];

  protected readonly firstRowMembers = this.ourTeamMembers.slice(0, 4);
  protected readonly secondRowMembers = this.ourTeamMembers.slice(4, 8);

  protected openGroupsView(): void {
    this.showGroupsView = true;
  }

  protected openCardsView(): void {
    this.showGroupsView = false;
  }
}
