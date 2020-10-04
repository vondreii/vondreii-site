import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/articles/projects/projects.component';
import { ProjectPostComponent } from './components/articles/projects/project-post/project-post.component';
import { WebdevComponent } from './components/articles/webdev/webdev.component';
import { WebdevPostComponent } from './components/articles/webdev/webdev-post/webdev-post.component';
import { CodingComponent } from './components/articles/coding/coding.component';
import { CodingPostComponent } from './components/articles/coding/coding-post/coding-post.component';
import { StudentsComponent } from './components/articles/students/students.component';
import { StudentsPostComponent } from './components/articles/students/students-post/students-post.component';
import { PostsComponent } from './components/articles/posts/posts.component';
import { PostsPostComponent } from './components/articles/posts/posts-post/posts-post.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'about', component: AboutComponent },

  // All posts
  { path: 'posts', component: PostsComponent },
  { path: 'posts/post/:article', component: PostsPostComponent },

  // Webdev posts
  { path: 'webdev', component: WebdevComponent },
  { path: 'webdev/post/:article', component: WebdevPostComponent },

  // Coding posts
  { path: 'coding', component: CodingComponent },
  { path: 'coding/post/:article', component: CodingPostComponent },

  // Students posts
  { path: 'students', component: StudentsComponent },
  { path: 'students/post/:article', component: StudentsPostComponent },

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
