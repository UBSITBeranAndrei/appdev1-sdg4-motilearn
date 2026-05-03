import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';

const APPDEV_RESOURCES: Post[] = [
  // Angular
  {
    id: 1,
    title: 'Angular Official Documentation',
    body: 'The official Angular documentation is the most comprehensive and up-to-date resource for learning Angular. It covers everything from setting up your first project to advanced topics like change detection, signals, and server-side rendering. Whether you are a beginner or an experienced developer, the docs provide guides, API references, and best practices to help you build production-ready applications.',
    userId: 1,
    url: 'https://angular.dev',
    topics: ['Components & Templates', 'Directives', 'Services & DI', 'Routing', 'Signals', 'HTTP Client'],
    level: 'All Levels'
  },
  {
    id: 2,
    title: 'Angular Tutorial: Tour of Heroes',
    body: 'Tour of Heroes is the official step-by-step tutorial from the Angular team. It walks you through building a complete Angular application from scratch, teaching you core concepts like components, services, routing, and HTTP communication along the way. This is the best starting point for anyone new to Angular who wants hands-on experience.',
    userId: 1,
    url: 'https://angular.dev/tutorials/learn-angular',
    topics: ['Project Setup', 'Components', 'Services', 'Routing', 'HTTP', 'Observables'],
    level: 'Beginner'
  },
  {
    id: 3,
    title: 'Angular Signals Guide',
    body: 'Angular Signals is a modern reactive primitive introduced in Angular 16+ that provides a simpler and more efficient way to manage state in your applications. This guide covers how to create signals, computed values, and effects, and how they compare to traditional RxJS-based patterns. Signals make Angular apps more predictable and easier to debug.',
    userId: 1,
    url: 'https://angular.dev/guide/signals',
    topics: ['signal()', 'computed()', 'effect()', 'State Management', 'Reactivity'],
    level: 'Intermediate'
  },
  {
    id: 4,
    title: 'Angular Routing & Navigation',
    body: 'Angular Router is a powerful client-side navigation system that lets you build single-page applications with multiple views. This guide covers everything from basic route configuration to advanced topics like lazy loading, route guards, parameterized routes, and nested routing. Mastering the router is essential for building real-world Angular applications.',
    userId: 1,
    url: 'https://angular.dev/guide/routing',
    topics: ['Route Configuration', 'RouterLink', 'Route Guards', 'Lazy Loading', 'Parameterized Routes'],
    level: 'Intermediate'
  },
  {
    id: 5,
    title: 'Angular Component Communication',
    body: 'One of the most important skills in Angular development is knowing how to pass data between components. This resource covers all the main communication patterns: @Input() for passing data from parent to child, @Output() and EventEmitter for child-to-parent communication, and service-based communication for sibling components. Understanding these patterns is key to building scalable Angular apps.',
    userId: 1,
    url: 'https://angular.dev/guide/components/inputs',
    topics: ['@Input()', '@Output()', 'EventEmitter', 'Services', 'Component Hierarchy'],
    level: 'Beginner'
  },
  {
    id: 6,
    title: 'Angular Forms: Template & Reactive',
    body: 'Angular provides two powerful approaches to handling forms: template-driven forms for simple use cases and reactive forms for complex scenarios. This guide covers both approaches in depth, including form validation, custom validators, form groups, and form arrays. You will learn when to use each approach and how to handle form submission and error display.',
    userId: 1,
    url: 'https://angular.dev/guide/forms',
    topics: ['Template Forms', 'Reactive Forms', 'Validation', 'FormGroup', 'FormControl'],
    level: 'Intermediate'
  },
  // TypeScript
  {
    id: 7,
    title: 'TypeScript Official Handbook',
    body: 'The TypeScript Handbook is the definitive guide to learning TypeScript. It covers the full language from basic types and interfaces to advanced features like generics, decorators, and module systems. Written by the TypeScript team at Microsoft, this handbook is the best reference for both beginners and experienced developers who want to master TypeScript.',
    userId: 2,
    url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
    topics: ['Types & Interfaces', 'Generics', 'Enums', 'Decorators', 'Modules', 'Strict Mode'],
    level: 'All Levels'
  },
  {
    id: 8,
    title: 'TypeScript for JavaScript Developers',
    body: 'If you already know JavaScript, this guide will help you transition to TypeScript smoothly. It highlights the key differences and additions TypeScript brings, such as static typing, interfaces, and type inference. You will learn how TypeScript helps catch bugs at compile time rather than runtime, making your code more reliable and maintainable.',
    userId: 2,
    url: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
    topics: ['Type Inference', 'Interfaces', 'Type Annotations', 'Classes', 'Modules'],
    level: 'Beginner'
  },
  {
    id: 9,
    title: 'TypeScript Interfaces vs Types',
    body: 'One of the most common questions in TypeScript is when to use an interface versus a type alias. This guide explains the similarities and differences between the two, including when each is more appropriate. You will learn about declaration merging with interfaces, union types with type aliases, and the best practices recommended by the TypeScript community.',
    userId: 2,
    url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
    topics: ['Interfaces', 'Type Aliases', 'Union Types', 'Declaration Merging', 'Best Practices'],
    level: 'Intermediate'
  },
  {
    id: 10,
    title: 'TypeScript Generics Explained',
    body: 'Generics are one of the most powerful features of TypeScript, allowing you to write reusable and type-safe code. This guide explains how generics work with functions, interfaces, and classes, and how to use type constraints to limit what types can be used. Understanding generics is essential for writing professional-grade TypeScript code.',
    userId: 2,
    url: 'https://www.typescriptlang.org/docs/handbook/2/generics.html',
    topics: ['Generic Functions', 'Generic Interfaces', 'Generic Classes', 'Type Constraints', 'Utility Types'],
    level: 'Advanced'
  },
  {
    id: 11,
    title: 'TypeScript Decorators Deep Dive',
    body: 'Decorators are a special TypeScript feature heavily used by Angular for components, services, pipes, and more. This guide explains how decorators work under the hood, how to create your own custom decorators, and how Angular uses them to define metadata. Understanding decorators will give you a deeper insight into how Angular works internally.',
    userId: 2,
    url: 'https://www.typescriptlang.org/docs/handbook/decorators.html',
    topics: ['Class Decorators', 'Method Decorators', 'Property Decorators', 'Metadata', 'Angular Decorators'],
    level: 'Advanced'
  },
  {
    id: 12,
    title: 'TypeScript Strict Mode Best Practices',
    body: 'Enabling strict mode in TypeScript unlocks a set of powerful type checks that help you write safer and more reliable code. This guide covers all the checks enabled by strict mode, including strictNullChecks, noImplicitAny, and strictFunctionTypes. You will also learn best practices for gradually migrating an existing codebase to strict mode.',
    userId: 2,
    url: 'https://www.typescriptlang.org/tsconfig#strict',
    topics: ['strictNullChecks', 'noImplicitAny', 'strictFunctionTypes', 'Type Safety', 'Migration'],
    level: 'Intermediate'
  },
  // Git & GitHub
  {
    id: 13,
    title: 'Git & GitHub Full Beginner Guide',
    body: 'This comprehensive beginner guide from GitHub covers everything you need to get started with version control. You will learn how to initialize a repository, stage and commit changes, push to GitHub, and collaborate with others. By the end, you will understand the full Git workflow used by professional development teams around the world.',
    userId: 3,
    url: 'https://docs.github.com/en/get-started/quickstart/hello-world',
    topics: ['git init', 'git add', 'git commit', 'git push', 'git pull', 'Branching'],
    level: 'Beginner'
  },
  {
    id: 14,
    title: 'Git Branching Strategies',
    body: 'Choosing the right branching strategy is critical for team collaboration and code quality. This resource covers popular strategies like Git Flow, trunk-based development, and feature branching — explaining the pros and cons of each. You will learn how to choose the right strategy for your project size and team structure.',
    userId: 3,
    url: 'https://www.atlassian.com/git/tutorials/comparing-workflows',
    topics: ['Git Flow', 'Feature Branching', 'Trunk-Based Development', 'Release Branches', 'Hotfixes'],
    level: 'Intermediate'
  },
  {
    id: 15,
    title: 'Pull Requests & Code Reviews',
    body: 'Pull requests are the backbone of collaborative software development on GitHub. This guide covers how to create effective pull requests, write meaningful descriptions, request reviewers, and conduct productive code reviews. You will also learn best practices for giving and receiving feedback in a professional development environment.',
    userId: 3,
    url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests',
    topics: ['Creating PRs', 'Code Reviews', 'Feedback', 'Merging', 'Branch Protection'],
    level: 'Beginner'
  },
  {
    id: 16,
    title: 'Resolving Git Merge Conflicts',
    body: 'Merge conflicts are a normal part of collaborative development and knowing how to resolve them is an essential skill. This guide explains why conflicts happen, how to identify them, and how to resolve them using both the command line and visual tools. You will also learn strategies to minimize conflicts in the first place.',
    userId: 3,
    url: 'https://www.atlassian.com/git/tutorials/using-branches/merge-conflicts',
    topics: ['Conflict Markers', 'git merge', 'git rebase', 'Visual Tools', 'Prevention Strategies'],
    level: 'Intermediate'
  },
  {
    id: 17,
    title: 'GitHub Actions CI/CD Basics',
    body: 'GitHub Actions is a powerful automation platform built directly into GitHub. This guide covers how to set up CI/CD pipelines to automatically test, build, and deploy your Angular application whenever you push code. You will learn how to write workflow YAML files, use pre-built actions, and set up deployment to popular hosting platforms.',
    userId: 3,
    url: 'https://docs.github.com/en/actions/quickstart',
    topics: ['Workflows', 'YAML Syntax', 'Actions', 'CI/CD', 'Automated Testing', 'Deployment'],
    level: 'Intermediate'
  },
  {
    id: 18,
    title: 'Writing Good Commit Messages',
    body: 'Good commit messages are essential for maintaining a clean and understandable project history. This guide covers the Conventional Commits standard, which is widely adopted in professional projects. You will learn how to write clear, structured commit messages that make it easy to understand what changed and why, and how tools like semantic-release use commit messages automatically.',
    userId: 3,
    url: 'https://www.conventionalcommits.org/',
    topics: ['Conventional Commits', 'feat/fix/docs', 'Semantic Versioning', 'Changelog', 'Best Practices'],
    level: 'Beginner'
  },
  // Web Design
  {
    id: 19,
    title: 'CSS Grid & Flexbox Complete Guide',
    body: 'CSS Grid and Flexbox are the two most important layout systems in modern web development. This complete guide from CSS-Tricks covers both systems in depth with visual examples and interactive demos. You will learn when to use Grid versus Flexbox, how to combine them, and how to build complex responsive layouts that work across all browsers.',
    userId: 4,
    url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
    topics: ['Flexbox', 'CSS Grid', 'Responsive Layout', 'Grid Template', 'Flex Properties'],
    level: 'Beginner'
  },
  {
    id: 20,
    title: 'Responsive Web Design Principles',
    body: 'Responsive web design ensures your website looks and works great on all screen sizes, from mobile phones to large desktop monitors. This guide covers the core principles of responsive design including fluid grids, flexible images, and CSS media queries. You will learn how to use a mobile-first approach and modern CSS techniques to build truly responsive web applications.',
    userId: 4,
    url: 'https://web.dev/learn/design/',
    topics: ['Media Queries', 'Mobile-First', 'Fluid Grids', 'Flexible Images', 'Breakpoints'],
    level: 'Beginner'
  },
  {
    id: 21,
    title: 'UI/UX Design Fundamentals',
    body: 'Great user interfaces are built on solid design principles. This resource covers the fundamentals of UI/UX design including visual hierarchy, color theory, typography, spacing, and user-centered design thinking. You will learn how to create interfaces that are not only visually appealing but also intuitive and accessible to all users.',
    userId: 4,
    url: 'https://www.nngroup.com/articles/ten-usability-heuristics/',
    topics: ['Visual Hierarchy', 'Color Theory', 'Typography', 'User Research', 'Prototyping'],
    level: 'Beginner'
  },
  {
    id: 22,
    title: 'CSS Animations & Transitions',
    body: 'CSS animations and transitions can bring your web pages to life and create engaging user experiences. This guide covers CSS transitions for smooth state changes, keyframe animations for complex sequences, and the transform property for movement and scaling effects. You will also learn performance best practices to keep your animations smooth and efficient.',
    userId: 4,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations',
    topics: ['Transitions', 'Keyframes', 'Transform', 'Animation Properties', 'Performance'],
    level: 'Intermediate'
  },
  {
    id: 23,
    title: 'Design Systems & Component Libraries',
    body: 'Design systems are collections of reusable components, guided by clear standards, that can be assembled to build any number of applications. This resource covers how to plan, build, and maintain a design system, including component documentation, design tokens, and versioning. You will learn how companies like Google and Airbnb use design systems to maintain consistency across large products.',
    userId: 4,
    url: 'https://material.io/design',
    topics: ['Design Tokens', 'Component Library', 'Documentation', 'Versioning', 'Style Guide'],
    level: 'Advanced'
  },
  {
    id: 24,
    title: 'Web Accessibility (a11y) Guide',
    body: 'Web accessibility ensures that people with disabilities can use your web applications effectively. This guide covers the Web Content Accessibility Guidelines (WCAG), semantic HTML, ARIA roles, keyboard navigation, and color contrast requirements. Building accessible applications is not only the right thing to do — it also improves SEO and overall user experience for everyone.',
    userId: 4,
    url: 'https://web.dev/learn/accessibility/',
    topics: ['WCAG Guidelines', 'Semantic HTML', 'ARIA Roles', 'Keyboard Navigation', 'Color Contrast'],
    level: 'Intermediate'
  },
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