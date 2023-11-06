// General Imports and Routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Imports for Components
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { ProjectCalculatorComponent } from './projects/project-calculator/project-calculator.component';
import { ProjectCyanxComponent } from './projects/project-cyanx/project-cyanx.component';
import { ProjectDocosummariesComponent } from './projects/project-docosummaries/project-docosummaries.component';
import { ProjectExcelAutomationComponent } from './projects/project-excel-automation/project-excel-automation.component';
import { ProjectHugoTutorialComponent } from './projects/project-hugo-tutorial/project-hugo-tutorial.component';
import { ProjectNetflixCloneComponent } from './projects/project-netflix-clone/project-netflix-clone.component';
import { ProjectTopDownGameComponent } from './projects/project-top-down-game/project-top-down-game.component';
import { ProjectUonCognitiveLoadComponent } from './projects/project-uon-cognitive-load/project-uon-cognitive-load.component';
import { ProjectWindowsFileManagerComponent } from './projects/project-windows-file-manager/project-windows-file-manager.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  
  { path: 'projects/calculator', component: ProjectCalculatorComponent },
  { path: 'projects/cyanx', component: ProjectCyanxComponent },
  { path: 'projects/docosummaries', component: ProjectDocosummariesComponent },
  { path: 'projects/excel-automation', component: ProjectExcelAutomationComponent },
  { path: 'projects/hugo-tutorial', component: ProjectHugoTutorialComponent },
  { path: 'projects/netflix-clone', component: ProjectNetflixCloneComponent },
  { path: 'projects/top-down-game', component: ProjectTopDownGameComponent },
  { path: 'projects/uon-cognitive-load', component: ProjectUonCognitiveLoadComponent },
  { path: 'projects/windows-file-manager', component: ProjectWindowsFileManagerComponent },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
