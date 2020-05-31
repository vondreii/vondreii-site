import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PhotographyMainComponent } from './photography/photography-main/photography-main.component';
import { BlueMountainsComponent } from './photography/blue-mountains/blue-mountains.component';
import { CentralCoastComponent } from './photography/central-coast/central-coast.component';
import { HobartComponent } from './photography/hobart/hobart.component';
import { HunterValleyComponent } from './photography/hunter-valley/hunter-valley.component';
import { ManilaComponent } from './photography/manila/manila.component';
import { MelbourneComponent } from './photography/melbourne/melbourne.component';
import { NewcastleComponent } from './photography/newcastle/newcastle.component';
import { RuralPhilippinesComponent } from './photography/rural-philippines/rural-philippines.component';
import { SydneyComponent } from './photography/sydney/sydney.component';
import { ProjectsMainComponent } from './projects/projects-main/projects-main.component';
import { CyanXComponent } from './projects/cyan-x/cyan-x.component';
import { StreetRacingGameComponent } from './projects/street-racing-game/street-racing-game.component';
import { IceCapadesComponent } from './projects/ice-capades/ice-capades.component';
import { MinimalismComponent } from './blog/minimalism/minimalism.component';
import { OrganisationComponent } from './blog/organisation/organisation.component';
import { UniComponent } from './blog/uni/uni.component';
import { WebsiteComponent } from './blog/website/website.component';
import { WellbeingComponent } from './blog/wellbeing/wellbeing.component';
import { BlogMainComponent } from './blog/blog-main/blog-main.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  // Photography pages
  { path: 'photography/main', component: PhotographyMainComponent },
  { path: 'photography/blue-mountains', component: BlueMountainsComponent },
  { path: 'photography/central-coast', component: CentralCoastComponent },
  { path: 'photography/hobart', component: HobartComponent },
  { path: 'photography/hunter-valley', component: HunterValleyComponent },
  { path: 'photography/manila', component: ManilaComponent },
  { path: 'photography/melbourne', component: MelbourneComponent },
  { path: 'photography/newcastle', component: NewcastleComponent },
  { path: 'photography/rural-philippines', component: RuralPhilippinesComponent },
  { path: 'photography/sydney', component: SydneyComponent },

  // Projects
  { path: 'projects/main', component: ProjectsMainComponent },
  { path: 'projects/cyanx', component: CyanXComponent },
  { path: 'projects/street-racing-game', component: StreetRacingGameComponent },
  { path: 'projects/ice-capades', component: IceCapadesComponent },

  // Blog 
  { path: 'blog/main', component: BlogMainComponent },
  { path: 'blog/minimalism', component: MinimalismComponent },
  { path: 'blog/organisation', component: OrganisationComponent },
  { path: 'blog/uni', component: UniComponent },
  { path: 'blog/websites', component: WebsiteComponent },
  { path: 'blog/wellbeing', component: WellbeingComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
