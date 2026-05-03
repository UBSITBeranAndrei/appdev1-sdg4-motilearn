import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

const APPDEV_RESOURCES: Post[] = [
  // Angular
  { id: 1, title: 'Angular Official Documentation', body: 'The complete guide to building Angular applications. Covers components, directives, services, routing, and more.', userId: 1 },
  { id: 2, title: 'Angular Tutorial: Tour of Heroes', body: 'A step-by-step tutorial from the Angular team that walks you through building a real-world Angular app.', userId: 1 },
  { id: 3, title: 'Angular Signals Guide', body: 'Learn how to use Angular Signals for reactive state management — a modern alternative to RxJS-heavy patterns.', userId: 1 },
  { id: 4, title: 'Angular Routing & Navigation', body: 'Master Angular Router including lazy loading, route guards, parameterized routes, and navigation strategies.', userId: 1 },
  { id: 5, title: 'Angular Component Communication', body: 'Learn @Input(), @Output(), EventEmitter, and service-based communication between Angular components.', userId: 1 },
  { id: 6, title: 'Angular Forms: Template & Reactive', body: 'A comprehensive guide to both template-driven and reactive forms in Angular with validation techniques.', userId: 1 },
  // TypeScript
  { id: 7, title: 'TypeScript Official Handbook', body: 'The definitive guide to TypeScript. Covers types, interfaces, generics, decorators, and advanced patterns.', userId: 2 },
  { id: 8, title: 'TypeScript for JavaScript Developers', body: 'A beginner-friendly guide to transitioning from JavaScript to TypeScript with practical examples.', userId: 2 },
  { id: 9, title: 'TypeScript Interfaces vs Types', body: 'Understand the difference between interfaces and type aliases in TypeScript and when to use each.', userId: 2 },
  { id: 10, title: 'TypeScript Generics Explained', body: 'Learn how to write reusable and type-safe code using TypeScript generics with real-world examples.', userId: 2 },
  { id: 11, title: 'TypeScript Decorators Deep Dive', body: 'Explore how decorators work in TypeScript and how Angular uses them for components, services, and more.', userId: 2 },
  { id: 12, title: 'TypeScript Strict Mode Best Practices', body: 'Enable strict mode in TypeScript and learn how to write safer, more reliable code with better type inference.', userId: 2 },
  // Git & GitHub
  { id: 13, title: 'Git & GitHub Full Beginner Guide', body: 'Learn Git from scratch — init, add, commit, push, pull, branching, and merging explained simply.', userId: 3 },
  { id: 14, title: 'Git Branching Strategies', body: 'Explore popular branching strategies like Git Flow, trunk-based development, and feature branching.', userId: 3 },
  { id: 15, title: 'Pull Requests & Code Reviews', body: 'Learn how to create effective pull requests, write meaningful descriptions, and conduct productive code reviews.', userId: 3 },
  { id: 16, title: 'Resolving Git Merge Conflicts', body: 'A practical guide to understanding and resolving merge conflicts in Git when collaborating with a team.', userId: 3 },
  { id: 17, title: 'GitHub Actions CI/CD Basics', body: 'Automate your workflows with GitHub Actions — set up CI/CD pipelines to test and deploy your Angular app.', userId: 3 },
  { id: 18, title: 'Writing Good Commit Messages', body: 'Learn the conventional commits standard and how to write clear, meaningful commit messages for your projects.', userId: 3 },
  // Web Design
  { id: 19, title: 'CSS Grid & Flexbox Complete Guide', body: 'Master modern CSS layout techniques with CSS Grid and Flexbox — the foundation of responsive web design.', userId: 4 },
  { id: 20, title: 'Responsive Web Design Principles', body: 'Learn how to build websites that look great on all screen sizes using media queries and fluid layouts.', userId: 4 },
  { id: 21, title: 'UI/UX Design Fundamentals', body: 'Understand core UI/UX principles including visual hierarchy, color theory, typography, and user-centered design.', userId: 4 },
  { id: 22, title: 'CSS Animations & Transitions', body: 'Bring your web pages to life with CSS animations, keyframes, transitions, and transform effects.', userId: 4 },
  { id: 23, title: 'Design Systems & Component Libraries', body: 'Learn how to build and use design systems — consistent, reusable UI components that scale across projects.', userId: 4 },
  { id: 24, title: 'Web Accessibility (a11y) Guide', body: 'Make your web apps accessible to everyone by following WCAG guidelines, semantic HTML, and ARIA roles.', userId: 4 },
];

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  getPosts(): Observable<Post[]> {
    return of(APPDEV_RESOURCES);
  }

  getPostById(id: number): Observable<Post> {
    const post = APPDEV_RESOURCES.find(r => r.id === id) ?? {} as Post;
    return of(post);
  }
}