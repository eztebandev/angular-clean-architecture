import { MapperNoBody } from "../../base/mapper.contract";
import { Injectable } from "@angular/core";
import { CommentsOnePostResponse } from "../../models/comments-one/comments-one.response";
import { CommentsOnePostResponseDto } from "../../../@data/dtos/comments-one/comments-one.response.dto";

@Injectable({
    providedIn: 'root'
})
export class CommentsOnePostResponseMapper extends MapperNoBody<CommentsOnePostResponse, CommentsOnePostResponseDto>{
    
    toDomainObject(param: CommentsOnePostResponseDto): CommentsOnePostResponse {
        return {
            ...param
        }
    }
    
} 