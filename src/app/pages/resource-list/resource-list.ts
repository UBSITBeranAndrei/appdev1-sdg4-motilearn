import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResourceService } from '../../services/resource';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-resource-list',
  imports: [RouterLink],
  templateUrl: './resource-list.html',
  styleUrl: './resource-list.css'
})
export class ResourceList implements OnInit {
  private resourceService = inject(ResourceService);

  posts = signal<Post[]>([]);
  activeFilter = signal('all');

  ngOnInit() {
    this.resourceService.getPosts().subscribe(data => {
      this.posts.set(data);
    });
  }

  setFilter(filter: string, event: MouseEvent) {
    this.activeFilter.set(filter);
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    (event.target as HTMLElement).classList.add('active');
  }

  getFiltered(): Post[] {
    const f = this.activeFilter();
    if (f === 'all') return this.posts();
    const map: Record<string, number> = { angular: 1, typescript: 2, git: 3, design: 4 };
    return this.posts().filter(p => p.userId === map[f]);
  }

  getCategory(userId: number): string {
    const map: Record<number, string> = { 1: 'Angular', 2: 'TypeScript', 3: 'Git & GitHub', 4: 'Web Design' };
    return map[userId] ?? 'General';
  }

  getTagClass(userId: number): string {
    const map: Record<number, string> = { 1: 'tag-angular', 2: 'tag-typescript', 3: 'tag-git', 4: 'tag-design' };
    return map[userId] ?? '';
  }
}