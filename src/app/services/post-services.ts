import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { Observable } from 'rxjs/Observable';

import { Post } from '../models/Post';  // Student data type interface class

import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    postsCollection: AngularFirestoreCollection<Post>;
    postDoc: AngularFirestoreDocument<Post>;
    posts: Observable<Post[]>;
    post: Observable<Post>;

  constructor(private db: AngularFirestore) { 
    this.postsCollection = this.db.collection('posts', ref => ref.orderBy('lastName', 'asc'));
  }

  GetPost(id: string): Observable<Post> {
    this.postDoc = this.db.doc<Post>(`Minimalism/${id}`);
    this.post = this.postDoc.snapshotChanges().map(action => {
      if(action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Post;
        data.id = action.payload.id;
        return data;
      }
    });

    return this.post;
  }

  
}
