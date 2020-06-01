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
import { BlogMainComponent } from './blog/blog-main/blog-main.component';
import { MinimalismMainComponent } from './blog/minimalism/minimalism-main/minimalism-main.component';
import { OrganisationMainComponent } from './blog/organisation/organisation-main/organisation-main.component';
import { UniMainComponent } from './blog/uni/uni-main/uni-main.component';
import { WebsiteMainComponent } from './blog/website/website-main/website-main.component';
import { WellbeingMainComponent } from './blog/wellbeing/wellbeing-main/wellbeing-main.component';
import { ThingsYouCanDeclutterRightNowComponent } from './blog/minimalism/2020/things-you-can-declutter-right-now/things-you-can-declutter-right-now.component';
import { HowToOrganiseYourWebBrowsingComponent } from './blog/organisation/2020/how-to-organise-your-web-browsing/how-to-organise-your-web-browsing.component';
import { TipsToAvoidProcrastinatingComponent } from './blog/organisation/2020/tips-to-avoid-procrastinating/tips-to-avoid-procrastinating.component';
import { TipsToBetterOrganiseYourComputerComponent } from './blog/organisation/2020/tips-to-better-organise-your-computer/tips-to-better-organise-your-computer.component';
import { WaysToBeMoreOrganisedComponent } from './blog/organisation/2020/ways-to-be-more-organised/ways-to-be-more-organised.component';

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
  { path: 'blog/minimalism/main', component: MinimalismMainComponent },
  { path: 'blog/organisation/main', component: OrganisationMainComponent },
  { path: 'blog/uni/main', component: UniMainComponent },
  { path: 'blog/website/main', component: WebsiteMainComponent },
  { path: 'blog/wellbeing/main', component: WellbeingMainComponent },

  // Blog - Minimalism
  { path: 'blog/minimalism/things-you-can-declutter-right-now', component: ThingsYouCanDeclutterRightNowComponent },

  // Blog - Organisation
  { path: 'blog/organisation/how-to-organise-your-web-browsing', component: HowToOrganiseYourWebBrowsingComponent },
  { path: 'blog/organisation/tips-to-avoid-procrastinating', component: TipsToAvoidProcrastinatingComponent },
  { path: 'blog/organisation/tips-to-better-organise-your-computer', component: TipsToBetterOrganiseYourComputerComponent },
  { path: 'blog/organisation/ways-to-be-more-organised', component: WaysToBeMoreOrganisedComponent },
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
