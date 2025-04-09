import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentsOnePostResponseDto } from '../dtos/comments-one/comments-one.response.dto';
import { Observable, map } from 'rxjs';
import { CommentsOneRepository } from '../../@domain/repositories/comments-one.repository';
import { RepositoryBase } from '../utils/repository.base';

@Injectable({
  providedIn: 'root'
})
export class CommentsOneRepositoryImpl extends RepositoryBase implements CommentsOneRepository {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient) {
    super();
  }

  getCommentsOne(id: number): Observable<CommentsOnePostResponseDto[]> {
    console.log('getPosts', this.apiUrl);
    let Url = this.apiUrl + id + '/comments';
    return this.http.get<CommentsOnePostResponseDto[]>(Url).pipe(
      map((res) => res)
    );
  }
} 