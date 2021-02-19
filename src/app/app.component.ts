import { Component } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'vondreii';
  
  screenWidth: any;

  navOpen: boolean = true;

  constructor() { 
    console.log(this.getScreenSize());
    if (this.screenWidth < 1000) {
      this.navOpen = true;
    }
    else {
      this.navOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenWidth = window.innerWidth;
      console.log(this.screenWidth);
      console.log(this.navOpen)
    }

  openCloseNav() {
    if (this.navOpen) {
      document.getElementById("mySidebar").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    else {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
    }
    this.navOpen = !this.navOpen;
  }

  closeNavOnCLick() {
    if (this.screenWidth < 1000) {
      document.getElementById("mySidebar").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
      this.navOpen = !this.navOpen;
    }
  }
}
