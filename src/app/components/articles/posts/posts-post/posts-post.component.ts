import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-post',
  templateUrl: './posts-post.component.html',
  styleUrls: ['./posts-post.component.css']
})
export class PostsPostComponent implements OnInit {

  post: string; 
  href: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.href = window.location.href;
    this.post = './assets/articles/posts/' +  articleName + '.md';
  }

}
