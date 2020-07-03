import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PhotographyMainComponent } from './components/photography/photography-main/photography-main.component';
import { LocationsComponent } from './components/photography/locations/locations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

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
