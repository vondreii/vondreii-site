import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/articles/projects/projects.component';
import { ProjectPostComponent } from './components/articles/projects/project-post/project-post.component';
import { PostsComponent } from './components/articles/posts/posts.component';
import { PostsPostComponent } from './components/articles/posts/posts-post/posts-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'about', component: AboutComponent },

  // All posts
  { path: 'posts', component: PostsComponent },
  { path: 'posts/post/:article', component: PostsPostComponent },

  // Projects
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/post/:article', component: ProjectPostComponent },

  // Example of different links to the same page
  // { path: 'photography/blue-mountains', component: PhotographyLocationComponent },
  // { path: 'photography/central-coast', component: PhotographyLocationComponent },
  // { path: 'photography/hobart', component: PhotographyLocationComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
