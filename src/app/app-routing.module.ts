import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectPostComponent } from './components/projects/project-post/project-post.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsPostComponent } from './components/posts/posts-post/posts-post.component';

const routes: Routes = [
  // All posts
  { path: 'posts', component: PostsComponent },
  { path: '', component: PostsComponent },
  { path: 'posts/post/:article', component: PostsPostComponent },

  // Projects
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/post/:article', component: ProjectPostComponent },

  // About
  { path: 'about', component: AboutComponent },
  
  // About
  { path: 'contact', component: ContactComponent },

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
