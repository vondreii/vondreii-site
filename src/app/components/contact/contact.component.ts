import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { CrudService } from '../../shared/crud.service';    // CRUD services API

import { PostService } from '../../services/post-services';
import { Post } from '../../models/Post';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id: string;
  post: Post;

  // crudApi = new CrudService();
  name = new FormControl('');

  constructor(
    // private postService: PostService
    // public crudApi: CrudService  // CRUD API services
  ) { }

  ngOnInit() {
  }

  Test() {
    // this.postService.GetPost('2020-things-to-declutter').subscribe(savedPost => {
    //   this.post = savedPost;
    // })
    this.name.setValue('something');
    // this.crudApi.GetPost('something');
  }
}