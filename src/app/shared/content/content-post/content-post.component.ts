import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {

  href: string;
  hrefId: string;
  post: string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.href = window.location.href;

    if(this.href.includes('post'))
    {
      let articleName = this.route.snapshot.paramMap.get('article');
      this.post = './assets/content/posts/' +  articleName + '.md';
    }
    else if(this.href.includes('project'))
    {
      let articleName = this.route.snapshot.paramMap.get('article');
      this.post = './assets/content/projects/' +  articleName + '.md';
    }
  }

}
