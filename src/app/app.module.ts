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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
