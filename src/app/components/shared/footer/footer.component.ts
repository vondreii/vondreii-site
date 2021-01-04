import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  hideComponent = true;

  constructor() { 
  }

  ngOnInit() {
  }

  waitForLoad() {
    this.hideComponent = true;

    setTimeout(() => {
      this.hideComponent = false;
    }, 2000);

    return "";
  }
}
