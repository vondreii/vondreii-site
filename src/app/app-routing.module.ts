import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostsComponent } from './components/posts/posts.component';
import { ContentPostComponent } from './components/shared/content/content-post/content-post.component';
import { ProjectsComponent } from './components/projects/projects.component';


const routes: Routes = [
  // Posts
  { path: '', component: PostsComponent },
  { path: 'content/post/:article', component: ContentPostComponent },

  // Projects
  { path: 'projects', component: ProjectsComponent },
  { path: 'content/project/:article', component: ContentPostComponent },

  // About
  { path: 'about', component: AboutComponent },
  
  // Contact
  { path: 'contact', component: ContactComponent },
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
