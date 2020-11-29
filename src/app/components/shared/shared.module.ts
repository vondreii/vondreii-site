import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent, 
    SocialComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SocialComponent
  ]
})
export class SharedModule { }
