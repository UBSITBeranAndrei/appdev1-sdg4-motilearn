import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../services/resource';
import { Post } from '../../models/post.model';

const QUOTES = [
  { quote: 'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.', author: 'Brian Herbert' },
  { quote: 'Education is the most powerful weapon which you can use to change the world.', author: 'Nelson Mandela' },
  { quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.', author: 'Mahatma Gandhi' },
  { quote: 'The beautiful thing about learning is that no one can take it away from you.', author: 'B.B. King' },
  { quote: 'An investment in knowledge pays the best interest.', author: 'Benjamin Franklin' },
  { quote: 'The more that you read, the more things you will know.', author: 'Dr. Seuss' },
  { quote: 'Push yourself, because no one else is going to do it for you.', author: 'Unknown' },
  { quote: 'Success is the sum of small efforts, repeated day in and day out.', author: 'Robert Collier' },
  { quote: 'Don\'t watch the clock; do what it does. Keep going.', author: 'Sam Levenson' },
  { quote: 'The secret of getting ahead is getting started.', author: 'Mark Twain' },
];

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
  quote = signal(QUOTES[0]);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resourceService.getPostById(id).subscribe(data => {
      this.post.set(data);
      this.saveBookmark(data);
    });
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    this.quote.set(QUOTES[randomIndex]);
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