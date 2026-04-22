import { Component, inject, signal, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ResourceService } from '../../services/resource';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-resource-detail',
  imports: [RouterLink],
  templateUrl: './resource-detail.html',
  styleUrl: './resource-detail.css'
})
export class ResourceDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private resourceService = inject(ResourceService);

  resource = signal<Resource | null>(null);
  isLoading = signal(true);
  hasError = signal(false);

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.resourceService.getResourceById(id).subscribe({
      next: (data) => {
        this.resource.set(data);
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.isLoading.set(false);
      }
    });
  }
}