import { PostOneResponse } from "../../models/post-one/post-one.response";
import { PostOneRequest } from "../../models/post-one/post-one.request";
import { Observable } from "rxjs";

export abstract class PostOneUseCase {
    abstract execute(request: PostOneRequest): Observable<PostOneResponse>;
}
