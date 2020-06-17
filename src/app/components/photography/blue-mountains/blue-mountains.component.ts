import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-blue-mountains',
  templateUrl: './blue-mountains.component.html',
  styleUrls: ['./blue-mountains.component.css']
})
export class BlueMountainsComponent implements OnInit {
  collection: any;

  col1: [];
  col2: [];
  col3: [];
  col4: [];

  loc: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.collection = this.db.collection('photography').valueChanges({ idField: 'id' });
    this.collection.forEach(photography => {
      photography.forEach(location => {
        this.col1 = location.col1;
        this.col2 = location.col2;
        this.col3 = location.col3;
        this.col4 = location.col4;
        this.loc = location.location;
        console.log(location.location);
      });
    });
  }

}
