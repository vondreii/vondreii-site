import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  // The list of articles displayed on this page
  @Input() contentList: any[] = [];
  @Input() currentPage: number = 1;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  ngOnInit(): void {
  }

}
