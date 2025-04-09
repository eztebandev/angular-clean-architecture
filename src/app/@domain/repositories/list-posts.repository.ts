import { Observable } from 'rxjs';
import { ListPostsResponseDto } from '../../@data/dtos/list-posts/list-posts.response.dto';

export abstract class ListPostsRepository {
    abstract getPosts(): Observable<ListPostsResponseDto[]>;
}

