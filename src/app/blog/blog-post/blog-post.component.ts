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

  constructor(private route: ActivatedRoute) { }

  // Opens the content for that individual page (located in ./assets/blog/articles/articleName)
  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('article'); 
    this.href = window.location.href; 
    this.post = './assets/blog/articles/' +  articleName + '.md';
  }
}
