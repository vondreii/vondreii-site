import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/models';
// Import posts per page
import blogpage1 from '../../assets/blog/page1.json';
// Import projects per page
import portfoliopage1 from '../../assets/portfolio/page1.json';

@Component({
  selector: 'app-page-manager',
  templateUrl: './page-manager.component.html',
  styleUrls: ['./page-manager.component.scss']
})
export class PageManagerComponent implements OnInit {

  // This component is meant to be expanded on later, and it's purpose is to in the future manage multiple pages.
  // Eg, "Next", or "1", "2", etc. Still WIP.

  // For finding window href link
  blog: boolean;

  // Posts already sorted into their different pages
  posts1: Content[] = blogpage1;
  portfolio1: Content[] = portfoliopage1;

  // Variables to keep track of current data to be displayed
  itemsToDisplay: Content[] = this.posts1;
  currentPage: number = 1;

  constructor() { }

  ngOnInit() {
    if(window.location.href.includes("blog")) {
      this.blog = true;
      this.itemsToDisplay = this.posts1;
    }
    else {
      this.itemsToDisplay = this.portfolio1;
    }
  }

  changePageBlog(pageNo: number) {
    // Switches to view appropriate content depending on page
    switch(pageNo) { 
      case 1: { 
        this.itemsToDisplay = this.posts1; this.currentPage = 1; break; 
      }
      default: { 
         break; 
      } 
    } 
    window.scrollTo(0, 0)
  }
}
