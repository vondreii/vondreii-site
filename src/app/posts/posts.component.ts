import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/models';
// Import posts per page
import page1 from '../../assets/data/posts/page1.json';
import page2 from '../../assets/data/posts/page2.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  // Posts already sorted into their different pages
  posts1: Content[] = page1;
  posts2: Content[] = page2;

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
