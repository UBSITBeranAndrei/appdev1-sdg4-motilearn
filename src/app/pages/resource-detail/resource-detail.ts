import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../services/resource';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-resource-detail',
  imports: [RouterLink],
  templateUrl: './resource-detail.html',
  styleUrl: './resource-detail.css'
})
export class ResourceDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private resourceService = inject(ResourceService);

  post = signal<Post | null>(null);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resourceService.getPostById(id).subscribe(data => {
      this.post.set(data);
      this.saveBookmark(data);
    });
  }

  saveBookmark(post: Post) {
    const category = this.getCategory(post.userId);
    const stored = localStorage.getItem('motilearn_bookmarks');
    let bookmarks = stored ? JSON.parse(stored) : [];
    bookmarks = bookmarks.filter((b: any) => b.id !== post.id);
    bookmarks.unshift({
      id: post.id,
      title: post.title,
      category,
      viewedAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    if (bookmarks.length > 5) bookmarks = bookmarks.slice(0, 5);
    localStorage.setItem('motilearn_bookmarks', JSON.stringify(bookmarks));

    const viewed = Number(localStorage.getItem('resources_viewed') ?? 0);
    localStorage.setItem('resources_viewed', String(viewed + 1));
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