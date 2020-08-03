import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectPostComponent } from './components/projects/project-post/project-post.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { PhotographyLocationComponent } from './components/photography/photography-location/photography-location.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  // Blog Categories
  { path: 'blog', component: BlogComponent },
  { path: 'blog/organisation', component: BlogComponent },
  { path: 'blog/resumes', component: BlogComponent },
  { path: 'blog/uni', component: BlogComponent },
  { path: 'blog/websites', component: BlogComponent },

  // Blog Posts
  { path: 'blog/post/:article' , component: BlogPostComponent},
  { path: 'blog/organisation/post/:article' , component: BlogPostComponent},
  { path: 'blog/resumes/post/:article' , component: BlogPostComponent},
  { path: 'blog/uni/post/:article' , component: BlogPostComponent},
  { path: 'blog/websites/post/:article' , component: BlogPostComponent},

  // Projects
  { path: 'projects', component: ProjectsComponent },

  // Projects Posts
  { path: 'projects/post/:article', component: ProjectPostComponent },

  // Photography pages
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/blue-mountains', component: PhotographyLocationComponent },
  { path: 'photography/central-coast', component: PhotographyLocationComponent },
  { path: 'photography/hobart', component: PhotographyLocationComponent },
  { path: 'photography/hunter-valley', component: PhotographyLocationComponent },
  { path: 'photography/manila', component: PhotographyLocationComponent },
  { path: 'photography/melbourne', component: PhotographyLocationComponent },
  { path: 'photography/newcastle', component: PhotographyLocationComponent },
  { path: 'photography/rural-philippines', component: PhotographyLocationComponent },
  { path: 'photography/sydney', component: PhotographyLocationComponent },
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
