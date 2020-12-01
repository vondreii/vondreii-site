import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/posts/posts.module').then(m => m.PostsModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./components/projects/projects.module').then(m => m.ProjectsModule)
  },

  { path: 'about', component: AboutComponent },
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
