import { MapperFull } from "../../base/mapper.contract";
import { PostOneResponse } from "../../models/post-one/post-one.response";
import { PostOneResponseDto } from "../../../@data/dtos/post-one/post-one.response.dto";
import { Injectable } from "@angular/core";
import { PostOneRequest } from "../../models/post-one/post-one.request";
import { PostOneRequestDto } from "../../../@data/dtos/post-one/post-one.request.dto";


@Injectable({
    providedIn: 'root'
})
export class PostOneRequestMapper extends MapperFull<PostOneRequest, PostOneRequestDto> {

    toDataDto(param: PostOneRequest): PostOneRequestDto {
        return {
            id: param.id
        }
    }

    toDomainObject(param: PostOneRequestDto): PostOneRequest {
        return {
            id: param.id
        }
    }
}

@Injectable({
    providedIn: 'root'
})
export class PostOneResponseMapper extends MapperFull<PostOneResponse, PostOneResponseDto> {

    toDomainObject(param: PostOneResponseDto): PostOneResponse {
        return {
            userId: param.userId,
            id: param.id,
            title: param.title,
            content: param.body
        }
    }

    toDataDto(param: PostOneResponse): PostOneResponseDto {
        return {
            userId: param.userId,
            id: param.id,
            title: param.title,
            body: param.content
        }
    }
}
