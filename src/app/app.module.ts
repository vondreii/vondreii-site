import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PhotographyMainComponent } from './photography/photography-main/photography-main.component';
import { BlueMountainsComponent } from './photography/blue-mountains/blue-mountains.component';
import { CentralCoastComponent } from './photography/central-coast/central-coast.component';
import { HunterValleyComponent } from './photography/hunter-valley/hunter-valley.component';
import { HobartComponent } from './photography/hobart/hobart.component';
import { MelbourneComponent } from './photography/melbourne/melbourne.component';
import { NewcastleComponent } from './photography/newcastle/newcastle.component';
import { SydneyComponent } from './photography/sydney/sydney.component';
import { ManilaComponent } from './photography/manila/manila.component';
import { RuralPhilippinesComponent } from './photography/rural-philippines/rural-philippines.component';
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
import { WaysToBeMoreOrganisedComponent } from './blog/organisation/2020/ways-to-be-more-organised/ways-to-be-more-organised.component';
import { TipsToBetterOrganiseYourComputerComponent } from './blog/organisation/2020/tips-to-better-organise-your-computer/tips-to-better-organise-your-computer.component';
import { TipsToAvoidProcrastinatingComponent } from './blog/organisation/2020/tips-to-avoid-procrastinating/tips-to-avoid-procrastinating.component';
import { HowToMakeTheMostOutOfYourFirstYearAtUniComponent } from './blog/uni/2020/how-to-make-the-most-out-of-your-first-year-at-uni/how-to-make-the-most-out-of-your-first-year-at-uni.component';
import { MakingASimpleStaticWebsiteWithHtmlAndCssComponent } from './blog/website/2020/making-a-simple-static-website-with-html-and-css/making-a-simple-static-website-with-html-and-css.component';
import { CreatingANewThemeInHugoComponent } from './blog/website/2020/creating-a-new-theme-in-hugo/creating-a-new-theme-in-hugo.component';
import { MakingLifeGoalsComponent } from './blog/wellbeing/2020/making-life-goals/making-life-goals.component';
import { JobsForIntrovertsThatDontNeedMuchCommunicationComponent } from './blog/wellbeing/2020/jobs-for-introverts-that-dont-need-much-communication/jobs-for-introverts-that-dont-need-much-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    PhotographyMainComponent,
    BlueMountainsComponent,
    CentralCoastComponent,
    HunterValleyComponent,
    HobartComponent,
    MelbourneComponent,
    NewcastleComponent,
    SydneyComponent,
    ManilaComponent,
    RuralPhilippinesComponent,
    ProjectsMainComponent,
    CyanXComponent,
    StreetRacingGameComponent,
    IceCapadesComponent,
    BlogMainComponent,
    MinimalismMainComponent,
    OrganisationMainComponent,
    UniMainComponent,
    WebsiteMainComponent,
    WellbeingMainComponent,
    ThingsYouCanDeclutterRightNowComponent,
    HowToOrganiseYourWebBrowsingComponent,
    WaysToBeMoreOrganisedComponent,
    TipsToBetterOrganiseYourComputerComponent,
    TipsToAvoidProcrastinatingComponent,
    HowToMakeTheMostOutOfYourFirstYearAtUniComponent,
    MakingASimpleStaticWebsiteWithHtmlAndCssComponent,
    CreatingANewThemeInHugoComponent,
    MakingLifeGoalsComponent,
    JobsForIntrovertsThatDontNeedMuchCommunicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
