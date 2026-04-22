import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ResourceService } from '../../services/resource';
import { Resource } from '../../models/resource';

@Component({
  selector: 'app-resource-list',
  imports: [RouterLink],
  templateUrl: './resource-list.html',
  styleUrl: './resource-list.css'
})
export class ResourceList implements OnInit {
  private resourceService = inject(ResourceService);

  resources = signal<Resource[]>([]);
  isLoading = signal(true);
  hasError = signal(false);

  ngOnInit() {
    this.resourceService.getResources().subscribe({
      next: (data) => {
        this.resources.set(data.slice(0, 10));
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.isLoading.set(false);
      }
    });
  }
}