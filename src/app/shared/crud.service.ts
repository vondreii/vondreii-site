import { Injectable } from '@angular/core';
import { Posts } from '../shared/posts';  // Student data type interface class
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  postsRef: AngularFireList<any>;    // Reference to list of posts
  postRef: AngularFireObject<any>;   // Reference to single post object
  
  constructor(private db: AngularFireDatabase) { }

  // Create Post
  AddPosts(post: Posts) {
    this.postsRef.push({
      title: post.title,
      author: post.author,
    })
  }

  // Fetch Single Student Object
  GetPost(id: string) {
    this.postRef = this.db.object('minimalism/2020-things-to-declutter');
    return this.postRef;
  }
}
