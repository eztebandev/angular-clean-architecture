import { Injectable } from '@angular/core';
import { ListPostsRepository } from '../../repositories/list-posts.repository';
import { Observable } from 'rxjs';
import { ListPostsUseCase } from './list-posts.usecase';
import { ListPostsResponseMapper } from './list-posts.mapper';
import { ListPostsResponse } from '../../models/list-posts/list-posts.response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListPostsUseCaseImpl extends ListPostsUseCase {
  
  constructor(
    private postRepository: ListPostsRepository,
    private mapperResponse: ListPostsResponseMapper
  ) {
    super();
  }

  execute(): Observable<ListPostsResponse[]> {
    return this.postRepository.getPosts(
    ).pipe(
      map((response) => {
        return response.map((post) => {
          return this.mapperResponse.toDomainObject(post);
        });
      })
    );
  }
} 