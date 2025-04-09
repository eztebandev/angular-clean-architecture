import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentsOneUseCase } from './comments-one.usecase';
import { CommentsOneRepository } from '../../repositories/comments-one.repository';
import { CommentsOnePostResponseMapper } from './comments-one.mapper';
import { CommentsOnePostResponse } from '../../models/comments-one/comments-one.response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsOnePostsUseCaseImpl extends CommentsOneUseCase {
  
  constructor(
    private commentsOneRepository: CommentsOneRepository,
    private commentsOnePostResponseMapper: CommentsOnePostResponseMapper
  ) {
    super();
  }

  execute(id: number): Observable<CommentsOnePostResponse[]> {
    return this.commentsOneRepository.getCommentsOne(id).pipe(
      map((response) => {
        return response.map((post) => {
          return this.commentsOnePostResponseMapper.toDomainObject(post);
        });
      })
    );
  }
} 