import { Routes } from "@angular/router";
import { LandingComponent } from "./landing.component";
import { ListPostsComponent } from "./pages/list-posts/list-posts.component";
import { PostComponent } from "./pages/post/post.component";

export const landingRoutes: Routes = [
  { 
    path: '', 
    component: LandingComponent 
  }, 
  { 
    path: 'list-posts', 
    component: ListPostsComponent 
  },
  { 
    path: 'post/:id', 
    component: PostComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
