import { Injectable } from "@angular/core";
import { PostOneRepository } from "../../@domain/repositories/post-one.repository";
import { RepositoryBase } from "../utils/repository.base";
import { HttpClient } from "@angular/common/http";
import { PostOneResponseDto } from "../dtos/post-one/post-one.response.dto";
import { PostOneRequest } from "../../@domain/models/post-one/post-one.request";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PostOneRepositoryImpl extends RepositoryBase implements PostOneRepository {
    private apiUrl = 'https://jsonplaceholder.typicode.com/posts/';

    constructor(private http: HttpClient) {
        super();
    }

    postOne(request: PostOneRequest): Observable<PostOneResponseDto> {
        console.log('request', `${this.apiUrl}/${request.id}`);
        return this.http.get<PostOneResponseDto>(`${this.apiUrl}/${request.id}`);
    }
    
}
