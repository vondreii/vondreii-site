import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

import { ProjectWindowsFileManagerComponent } from './projects/project-windows-file-manager/project-windows-file-manager.component';
import { ProjectNetflixCloneComponent } from './projects/project-netflix-clone/project-netflix-clone.component';
import { ProjectHugoTutorialComponent } from './projects/project-hugo-tutorial/project-hugo-tutorial.component';
import { ProjectCalculatorComponent } from './projects/project-calculator/project-calculator.component';
import { ProjectCyanxComponent } from './projects/project-cyanx/project-cyanx.component';
import { ProjectDocosummariesComponent } from './projects/project-docosummaries/project-docosummaries.component';
import { ProjectExcelAutomationComponent } from './projects/project-excel-automation/project-excel-automation.component';
import { ProjectTopDownGameComponent } from './projects/project-top-down-game/project-top-down-game.component';
import { ProjectUonCognitiveLoadComponent } from './projects/project-uon-cognitive-load/project-uon-cognitive-load.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,

    ProjectCalculatorComponent,
    ProjectCyanxComponent,
    ProjectDocosummariesComponent,
    ProjectExcelAutomationComponent,
    ProjectHugoTutorialComponent,
    ProjectNetflixCloneComponent,
    ProjectTopDownGameComponent,
    ProjectUonCognitiveLoadComponent,
    ProjectWindowsFileManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
