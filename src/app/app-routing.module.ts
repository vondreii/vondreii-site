import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PhotographyMainComponent } from './components/photography/photography-main/photography-main.component';
import { LocationsComponent } from './components/photography/locations/locations.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog/blog-post/blog-post.component';

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
  { path: 'blog/organisation/post/:article' , component: BlogPostComponent},
  { path: 'blog/resumes/post/:article' , component: BlogPostComponent},
  { path: 'blog/uni/post/:article' , component: BlogPostComponent},
  { path: 'blog/websites/post/:article' , component: BlogPostComponent},

  // Photography pages
  { path: 'photography/main', component: PhotographyMainComponent },
  { path: 'photography/blue-mountains', component: LocationsComponent },
  { path: 'photography/central-coast', component: LocationsComponent },
  { path: 'photography/hobart', component: LocationsComponent },
  { path: 'photography/hunter-valley', component: LocationsComponent },
  { path: 'photography/manila', component: LocationsComponent },
  { path: 'photography/melbourne', component: LocationsComponent },
  { path: 'photography/newcastle', component: LocationsComponent },
  { path: 'photography/rural-philippines', component: LocationsComponent },
  { path: 'photography/sydney', component: LocationsComponent },
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
