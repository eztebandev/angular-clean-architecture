import { MapperNoBody } from "../../base/mapper.contract";
import { Injectable } from "@angular/core";
import { ListPostsResponseDto } from "../../../@data/dtos/list-posts/list-posts.response.dto";
import { ListPostsResponse } from "../../models/list-posts/list-posts.response";

@Injectable({
    providedIn: 'root'
})
export class ListPostsResponseMapper extends MapperNoBody<ListPostsResponse, ListPostsResponseDto>{
    
    toDomainObject(param: ListPostsResponseDto): ListPostsResponse {
        return {
            userId: param.userId,
            id: param.id,
            title: param.title,
            content: param.body
        }
    }
    
} 