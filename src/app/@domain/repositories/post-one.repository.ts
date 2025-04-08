import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PostOneResponseDto } from "../../@data/dtos/post-one/post-one.response.dto";
import { PostOneRequest } from "../models/post-one/post-one.request";

export abstract class PostOneRepository {
    abstract postOne(request: PostOneRequest): Observable<PostOneResponseDto>;
}

