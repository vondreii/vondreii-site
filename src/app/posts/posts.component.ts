import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/models';
// Import posts per page
import posts1 from '../data/info/posts1.json';
import posts2 from '../data/info/posts2.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // Posts already sorted into their different pages
  posts1: Content[] = posts1;
  posts2: Content[] = posts2;

  // Variables to keep track of current data to be displayed
  currentPosts: Content[] = this.posts1;
  currentPage: number = 1;

  constructor() { }

  ngOnInit() {
  }

  changePage(pageNo: number) {
    // Switches to view appropriate content depending on page
    switch(pageNo) { 
      case 1: { 
        this.currentPosts = this.posts1; this.currentPage = 1; break; 
      } 
      case 2: { 
        this.currentPosts = this.posts2; this.currentPage = 2; break; 
      } 
      default: { 
         break; 
      } 
   } 
    window.scrollTo(0, 0)
  }
}
