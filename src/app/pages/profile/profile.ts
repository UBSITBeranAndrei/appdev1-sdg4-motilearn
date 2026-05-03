import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  username = signal('');
  memberSince = signal('');
  resourcesViewed = signal(0);
  favoriteCategory = signal('Angular');
  weeklyGoal = signal(5);
  weeklyProgress = signal(3);

  ngOnInit() {
    const user = localStorage.getItem('motilearn_user') ?? 'admin';
    this.username.set(user);
    this.memberSince.set('April 2026');
    this.resourcesViewed.set(Number(localStorage.getItem('resources_viewed') ?? 0));
  }

  getProgressPercent(): number {
    return Math.round((this.weeklyProgress() / this.weeklyGoal()) * 100);
  }

  getCategoryClass(): string {
    const map: Record<string, string> = {
      'Angular': 'tag-angular',
      'TypeScript': 'tag-typescript',
      'Git & GitHub': 'tag-git',
      'Web Design': 'tag-design'
    };
    return map[this.favoriteCategory()] ?? '';
  }
}