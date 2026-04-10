import { ChangeDetectionStrategy, Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarClass: string;
  skills: string[];
}

@Component({
  selector: 'app-team',
  standalone: true,
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  protected readonly team: TeamMember[] = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Leading the vision with 10+ years in digital transformation',
      avatarClass: 'w-24 h-24 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#9D95FF] mb-6 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300',
      skills: ['Strategy', 'Leadership', 'Growth'],
    },
    {
      name: 'Your Name',
      role: 'CTO',
      bio: 'Crafting pixel-perfect experiences with cutting-edge tech',
      avatarClass: 'w-24 h-24 rounded-2xl bg-gradient-to-br from-[#FF6584] to-[#FF95AB] mb-6 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300',
      skills: ['Angular', 'UI/UX', 'Dev'],
    },
    {
      name: 'Marketing Team',
      role: 'Growth & Marketing',
      bio: 'Driving results through data-driven campaigns and outreach',
      avatarClass: 'w-24 h-24 rounded-2xl bg-gradient-to-br from-[#43E8A0] to-[#6FEDB5] mb-6 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300',
      skills: ['Outreach', 'Leads', 'SEO'],
    },
  ];
}