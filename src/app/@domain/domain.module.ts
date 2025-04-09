import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { PostOneUseCase } from "./usecases/post-one/post-one.usecase";
import { PostOneUseCaseImpl } from "./usecases/post-one/post-one.usecase.impl";
import { PostOneRepository } from "./repositories/post-one.repository";
import { PostOneRepositoryImpl } from "../@data/repositories/post-one.repository.impl";
import { ListPostsRepository } from "./repositories/list-posts.repository";
import { ListPostsRepositoryImpl } from "../@data/repositories/list-posts.repository.impl";
import { ListPostsUseCase } from "./usecases/list-posts/list-posts.usecase";
import { ListPostsUseCaseImpl } from "./usecases/list-posts/list-posts.usecase.impl";
import { CommentsOneRepository } from "./repositories/comments-one.repository";
import { CommentsOneRepositoryImpl } from "../@data/repositories/comments-one.repository.impl";
import { CommentsOneUseCase } from "./usecases/comments-one/comments-one.usecase";
import { CommentsOnePostsUseCaseImpl } from "./usecases/comments-one/comments-one.usecase.impl";


const REPOSITORIES = [
    { provide: PostOneRepository, useClass: PostOneRepositoryImpl },
    { provide: ListPostsRepository, useClass: ListPostsRepositoryImpl },
    { provide: CommentsOneRepository, useClass: CommentsOneRepositoryImpl }
];

const USECASES = [
    { provide: PostOneUseCase, useClass: PostOneUseCaseImpl },
    { provide: ListPostsUseCase, useClass: ListPostsUseCaseImpl },
    { provide: CommentsOneUseCase, useClass: CommentsOnePostsUseCaseImpl }
];


@NgModule({
    declarations: [],
    imports: [
        CommonModule, HttpClientModule
    ],
    exports: []
})
export class DomainModule { 
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: DomainModule,
            providers: [
                ...REPOSITORIES, ...USECASES
            ]   
        } as ModuleWithProviders<any>
    }
}