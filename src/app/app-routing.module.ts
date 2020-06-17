import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PhotographyMainComponent } from './components/photography/photography-main/photography-main.component';
import { BlueMountainsComponent } from './components/photography/blue-mountains/blue-mountains.component';
import { CentralCoastComponent } from './components/photography/central-coast/central-coast.component';
import { HobartComponent } from './components/photography/hobart/hobart.component';
import { HunterValleyComponent } from './components/photography/hunter-valley/hunter-valley.component';
import { ManilaComponent } from './components/photography/manila/manila.component';
import { MelbourneComponent } from './components/photography/melbourne/melbourne.component';
import { NewcastleComponent } from './components/photography/newcastle/newcastle.component';
import { RuralPhilippinesComponent } from './components/photography/rural-philippines/rural-philippines.component';
import { SydneyComponent } from './components/photography/sydney/sydney.component';
import { ProjectsMainComponent } from './components/projects/projects-main/projects-main.component';
import { CyanXComponent } from './components/projects/cyan-x/cyan-x.component';
import { StreetRacingGameComponent } from './components/projects/street-racing-game/street-racing-game.component';
import { IceCapadesComponent } from './components/projects/ice-capades/ice-capades.component';
import { BlogMainComponent } from './components/blog/blog-main/blog-main.component';
import { MinimalismMainComponent } from './components/blog/minimalism/minimalism-main/minimalism-main.component';
import { OrganisationMainComponent } from './components/blog/organisation/organisation-main/organisation-main.component';
import { UniMainComponent } from './components/blog/uni/uni-main/uni-main.component';
import { WebsiteMainComponent } from './components/blog/website/website-main/website-main.component';
import { WellbeingMainComponent } from './components/blog/wellbeing/wellbeing-main/wellbeing-main.component';
import { ThingsYouCanDeclutterRightNowComponent } from './components/blog/minimalism/2020/things-you-can-declutter-right-now/things-you-can-declutter-right-now.component';
import { HowToOrganiseYourWebBrowsingComponent } from './components/blog/organisation/2020/how-to-organise-your-web-browsing/how-to-organise-your-web-browsing.component';
import { TipsToAvoidProcrastinatingComponent } from './components/blog/organisation/2020/tips-to-avoid-procrastinating/tips-to-avoid-procrastinating.component';
import { TipsToBetterOrganiseYourComputerComponent } from './components/blog/organisation/2020/tips-to-better-organise-your-computer/tips-to-better-organise-your-computer.component';
import { WaysToBeMoreOrganisedComponent } from './components/blog/organisation/2020/ways-to-be-more-organised/ways-to-be-more-organised.component';
import { HowToMakeTheMostOutOfYourFirstYearAtUniComponent } from './components/blog/uni/2020/how-to-make-the-most-out-of-your-first-year-at-uni/how-to-make-the-most-out-of-your-first-year-at-uni.component';
import { CreatingANewThemeInHugoComponent } from './components/blog/website/2020/creating-a-new-theme-in-hugo/creating-a-new-theme-in-hugo.component';
import { MakingASimpleStaticWebsiteWithHtmlAndCssComponent } from './components/blog/website/2020/making-a-simple-static-website-with-html-and-css/making-a-simple-static-website-with-html-and-css.component';
import { JobsForIntrovertsThatDontNeedMuchCommunicationComponent } from './components/blog/wellbeing/2020/jobs-for-introverts-that-dont-need-much-communication/jobs-for-introverts-that-dont-need-much-communication.component';
import { MakingLifeGoalsComponent } from './components/blog/wellbeing/2020/making-life-goals/making-life-goals.component';

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

  // Blog - Uni
  { path: 'blog/uni/how-to-make-the-most-out-of-your-first-year-of-uni', component: HowToMakeTheMostOutOfYourFirstYearAtUniComponent },

  // Blog - Website
  { path: 'blog/website/creating-a-new-theme-in-hugo', component: CreatingANewThemeInHugoComponent },
  { path: 'blog/website/making-a-simple-static-website-with-html-and-css', component: MakingASimpleStaticWebsiteWithHtmlAndCssComponent },

  // Blog - Wellbeing
  { path: 'blog/wellbeing/jobs-for-introverts-that-dont-need-much-communication', component: JobsForIntrovertsThatDontNeedMuchCommunicationComponent },
  { path: 'blog/wellbeing/making-life-goals', component: MakingLifeGoalsComponent },
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
