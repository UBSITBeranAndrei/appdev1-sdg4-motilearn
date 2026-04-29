import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, BehaviorSubject, switchMap, tap, startWith } from 'rxjs';
import { ResourceService } from '../../services/resource';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-resource-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './resource-list.html',
  styleUrl: './resource-list.css'
})
export class ResourceList {
  private resourceService = inject(ResourceService);

  isLoading = true;
  hasError = false;

  posts$: Observable<Post[]> = this.resourceService.getPosts().pipe(
    tap({
      next: () => { this.isLoading = false; },
      error: () => { this.isLoading = false; this.hasError = true; }
    })
  );
}