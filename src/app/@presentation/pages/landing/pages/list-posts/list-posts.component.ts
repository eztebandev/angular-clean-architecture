import { Component, OnInit } from '@angular/core';
import { ListPostsUseCase } from '../../../../../@domain/usecases/list-posts/list-posts.usecase';
import { Router } from '@angular/router';
import { ListPostsResponse } from '../../../../../@domain/models/list-posts/list-posts.response';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.scss'
})
export class ListPostsComponent implements OnInit {
  posts: ListPostsResponse[] = [];
  loading = true;
  error: string | null = null;

  constructor(
    private listPostsUseCase: ListPostsUseCase,
    private router: Router
  ) { }

  ngOnInit() {
    this.listPostsUseCase.execute().subscribe((posts: ListPostsResponse[]) => {
      console.log('ejecutando el caso de uso', posts);
      this.posts = posts;
      this.loading = false;
    });
  }

  navigateToPost(id: number) {
    this.router.navigate(['/post', id]);
  }

}
