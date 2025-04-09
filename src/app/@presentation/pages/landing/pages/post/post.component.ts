import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../interfaces/post.interface';
import { Comment } from '../../../../interfaces/comment.interface';
import { Router } from '@angular/router';
import { PostOneUseCase } from '../../../../../@domain/usecases/post-one/post-one.usecase';
import { switchMap } from 'rxjs/operators';
import { CommentsOneUseCase } from '../../../../../@domain/usecases/comments-one/comments-one.usecase';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  dataPost: Post = {
    id: 0,
    userId: 0,
    content: '',
    title: ''
  };
  commentsPost: Comment[] = [];
  loading = true;
  error: string | null = null;
  constructor(
    private postOneCaseUse: PostOneUseCase,
    private commentPostOneCaseUse: CommentsOneUseCase,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let postId = 0;
    this.route.params.pipe(
      switchMap((params: any) => {
        postId = Number(params['id']);
        return this.postOneCaseUse.execute({ id: postId });
      })
    ).subscribe((response) => {
      console.log('response', response);
      this.dataPost = response;
      this.commentPostOneCaseUse.execute(postId).subscribe((response) => {
        console.log('response comments', response);
        this.commentsPost = response;
        this.loading = false;
      });
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
