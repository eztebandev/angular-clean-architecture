import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListPostsResponseDto } from '../dtos/list-posts/list-posts.response.dto';
import { Observable, map } from 'rxjs';
import { ListPostsRepository } from '../../@domain/repositories/list-posts.repository';
import { RepositoryBase } from '../utils/repository.base';

@Injectable({
  providedIn: 'root'
})
export class ListPostsRepositoryImpl extends RepositoryBase implements ListPostsRepository {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    super();
  }

  getPosts(): Observable<ListPostsResponseDto[]> {
    console.log('getPosts', this.apiUrl);
    return this.http.get<ListPostsResponseDto[]>(this.apiUrl).pipe(
      map((res) => res)
    );
  }
} 