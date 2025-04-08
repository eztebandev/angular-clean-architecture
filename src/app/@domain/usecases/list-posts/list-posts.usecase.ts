import { ListPostsResponse } from "../../models/list-posts/list-posts.response";
import { Observable } from "rxjs";

export abstract class ListPostsUseCase {
    abstract execute(): Observable<ListPostsResponse[]>;
}
