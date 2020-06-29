import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Fire Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

// Environment Files
import { environment } from "../environments/environment"; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { PhotographyMainComponent } from './components/photography/photography-main/photography-main.component';
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
import { WaysToBeMoreOrganisedComponent } from './components/blog/organisation/2020/ways-to-be-more-organised/ways-to-be-more-organised.component';
import { TipsToBetterOrganiseYourComputerComponent } from './components/blog/organisation/2020/tips-to-better-organise-your-computer/tips-to-better-organise-your-computer.component';
import { TipsToAvoidProcrastinatingComponent } from './components/blog/organisation/2020/tips-to-avoid-procrastinating/tips-to-avoid-procrastinating.component';
import { HowToMakeTheMostOutOfYourFirstYearAtUniComponent } from './components/blog/uni/2020/how-to-make-the-most-out-of-your-first-year-at-uni/how-to-make-the-most-out-of-your-first-year-at-uni.component';
import { MakingASimpleStaticWebsiteWithHtmlAndCssComponent } from './components/blog/website/2020/making-a-simple-static-website-with-html-and-css/making-a-simple-static-website-with-html-and-css.component';
import { CreatingANewThemeInHugoComponent } from './components/blog/website/2020/creating-a-new-theme-in-hugo/creating-a-new-theme-in-hugo.component';
import { MakingLifeGoalsComponent } from './components/blog/wellbeing/2020/making-life-goals/making-life-goals.component';
import { JobsForIntrovertsThatDontNeedMuchCommunicationComponent } from './components/blog/wellbeing/2020/jobs-for-introverts-that-dont-need-much-communication/jobs-for-introverts-that-dont-need-much-communication.component';
import { LocationsComponent } from './components/photography/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    PhotographyMainComponent,
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
    LocationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }