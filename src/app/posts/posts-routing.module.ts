import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPostComponent } from '../shared/content/content-post/content-post.component';
import { PostsComponent } from './posts.component';


const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'posts/:article', component: ContentPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
