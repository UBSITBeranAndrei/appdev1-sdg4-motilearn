import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { Resource } from '../models/resource';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl).pipe(
      catchError(() => of([]))
    );
  }

  getResourceById(id: number): Observable<Resource> {
    return this.http.get<Resource>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => of({} as Resource))
    );
  }
}