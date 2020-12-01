import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 

// Angular Fire Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

// Environment Files
import { environment } from "../environments/environment"; 

// App Files
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './components/shared/shared.module';
import { PostsComponent } from './components/posts/posts.component';
import { ProjectsModule } from './components/projects/projects.module';
import { PostsModule } from './components/posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    SharedModule,
    ProjectsModule,
    PostsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }