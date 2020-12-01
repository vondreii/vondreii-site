import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPostComponent } from '../shared/content/content-post/content-post.component';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
  // Projects
  { path: '', component: ProjectsComponent },
  { path: ':article', component: ContentPostComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
