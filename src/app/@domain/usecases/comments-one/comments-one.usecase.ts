import { CommentsOnePostResponse } from "../../models/comments-one/comments-one.response";
import { Observable } from "rxjs";

export abstract class CommentsOneUseCase {
    abstract execute(id: number): Observable<CommentsOnePostResponse[]>;
}
