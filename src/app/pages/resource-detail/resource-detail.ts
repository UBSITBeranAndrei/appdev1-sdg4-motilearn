import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable, switchMap, tap } from 'rxjs';
import { ResourceService } from '../../services/resource';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-resource-detail',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './resource-detail.html',
  styleUrl: './resource-detail.css'
})
export class ResourceDetail {
  private route = inject(ActivatedRoute);
  private resourceService = inject(ResourceService);

  isLoading = true;
  hasError = false;

  post$: Observable<Post> = this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.resourceService.getPostById(id).pipe(
        tap({
          next: () => { this.isLoading = false; },
          error: () => { this.isLoading = false; this.hasError = true; }
        })
      );
    })
  );
}