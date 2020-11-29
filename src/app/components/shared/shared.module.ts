import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';

// Markdown Files
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { ContentPostComponent } from './content/content-post/content-post.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    SocialComponent,
    ContentComponent,
    ContentPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SocialComponent,
    ContentComponent,
    ContentPostComponent
  ]
})
export class SharedModule { }
