import { Observable } from 'rxjs';
import { CommentsOnePostResponseDto } from '../../@data/dtos/comments-one/comments-one.response.dto';

export abstract class CommentsOneRepository {
    abstract getCommentsOne(id: number): Observable<CommentsOnePostResponseDto[]>;
}