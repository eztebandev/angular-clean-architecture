import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../interfaces/post.interface'
import { Router } from '@angular/router';
import { PostOneUseCase } from '../../../../../@domain/usecases/post-one/post-one.usecase';

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
  loading = true;
  error: string | null = null;
  constructor(
    private postOneCaseUse: PostOneUseCase,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log('params', Number(params['id']));
      this.postOneCaseUse.execute({ id: Number(params['id']) }).subscribe((response) => {
        this.dataPost = response;
        this.loading = false;
      });
    });
  }

  goBack() {
    this.router.navigate(['/list-posts']);
  }
}
