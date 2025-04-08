import { Injectable } from "@angular/core";
import { PostOneUseCase } from "./post-one.usecase";
import { PostOneRepository } from "../../repositories/post-one.repository";
import { PostOneResponseMapper, PostOneRequestMapper } from "./post-one.mapper";
import { Observable } from "rxjs";
import { PostOneResponse } from "../../models/post-one/post-one.response";
import { PostOneRequest } from "../../models/post-one/post-one.request";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PostOneUseCaseImpl extends PostOneUseCase {
    constructor(
        private postOneRepository: PostOneRepository,
        private postOneRequestMapper: PostOneRequestMapper,
        private postOneResponseMapper: PostOneResponseMapper
    ) {
        super();
    }

    execute(request: PostOneRequest): Observable<PostOneResponse> {
        return this.postOneRepository.postOne(this.postOneRequestMapper.toDataDto(request)).pipe(
            map((response) => this.postOneResponseMapper.toDomainObject(response))
        );
    }
    
}

