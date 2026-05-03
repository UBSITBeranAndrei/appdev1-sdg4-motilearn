import { Component, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Bookmark {
  id: number;
  title: string;
  category: string;
  viewedAt: string;
}

interface RoadmapStep {
  step: number;
  title: string;
  description: string;
  topics: string[];
  icon: string;
  completed: boolean;
}

@Component({
  selector: 'app-learn',
  imports: [RouterLink],
  templateUrl: './learn.html',
  styleUrl: './learn.css'
})
export class Learn implements OnInit {
  bookmarks = signal<Bookmark[]>([]);

  roadmap: RoadmapStep[] = [
    {
      step: 1,
      title: 'Version Control Basics',
      description: 'Start your journey by mastering Git and GitHub.',
      topics: ['Git init, add, commit', 'Branching & merging', 'Pull requests', 'GitHub workflows'],
      icon: '🔧',
      completed: true
    },
    {
      step: 2,
      title: 'TypeScript Fundamentals',
      description: 'Learn the language that powers Angular development.',
      topics: ['Types & interfaces', 'Generics', 'Decorators', 'Strict mode'],
      icon: '📘',
      completed: true
    },
    {
      step: 3,
      title: 'Angular Core Concepts',
      description: 'Dive into components, services, and Angular architecture.',
      topics: ['Components & templates', 'Services & DI', 'Routing', 'Signals'],
      icon: '⚡',
      completed: false
    },
    {
      step: 4,
      title: 'Web Design & UI',
      description: 'Make your apps look great with modern CSS techniques.',
      topics: ['CSS Grid & Flexbox', 'Responsive design', 'Animations', 'Accessibility'],
      icon: '🎨',
      completed: false
    },
    {
      step: 5,
      title: 'Full Stack Integration',
      description: 'Connect your Angular app to real APIs and backends.',
      topics: ['HttpClient & REST', 'Async pipe', 'Error handling', 'Authentication'],
      icon: '🚀',
      completed: false
    }
  ];

  ngOnInit() {
    const stored = localStorage.getItem('motilearn_bookmarks');
    if (stored) {
      this.bookmarks.set(JSON.parse(stored));
    }
  }

  removeBookmark(id: number) {
    const updated = this.bookmarks().filter(b => b.id !== id);
    this.bookmarks.set(updated);
    localStorage.setItem('motilearn_bookmarks', JSON.stringify(updated));
  }

  getTagClass(category: string): string {
    const map: Record<string, string> = {
      'Angular': 'tag-angular',
      'TypeScript': 'tag-typescript',
      'Git & GitHub': 'tag-git',
      'Web Design': 'tag-design'
    };
    return map[category] ?? '';
  }
}