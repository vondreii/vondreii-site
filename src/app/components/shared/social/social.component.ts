import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  hideComponent = true;

  constructor() { }

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
