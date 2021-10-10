import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/models';
// Import posts per page
import blogpage1 from '../../assets/blog/page1.json';
// Import projects per page
import portfoliopage1 from '../../assets/portfolio/page1.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // Posts already sorted into their different pages
  posts1: Content[] = blogpage1;
  portfolio1: Content[] = portfoliopage1;

  constructor() { }

  ngOnInit(): void {
    console.log(this.posts1)
    console.log(this.portfolio1)
  }

}
