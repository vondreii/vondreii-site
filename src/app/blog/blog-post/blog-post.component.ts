import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  post: string;
  href: string;
  article: string;

  // Automatically scroll to the top of the page when page is refreshed
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  // Opens the content for that individual page (located in ./assets/blog/articles/articleName)
  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article'); 
    this.article = articleName;
    this.href = window.location.href; 
    this.post = './assets/blog/articles/' +  articleName + '.md';
  }
}
