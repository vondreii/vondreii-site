import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-blue-mountains',
  templateUrl: './blue-mountains.component.html',
  styleUrls: ['./blue-mountains.component.css']
})
export class BlueMountainsComponent implements OnInit {
  photography: any;

  col1: [];
  col2: [];
  col3: [];
  col4: [];

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.photography = this.db.collection('photography').valueChanges({ idField: 'id' });
    this.photography.forEach(location => {
      location.forEach(column => {
        this.col1 = column.col1;
        this.col2 = column.col2;
        this.col3 = column.col3;
        this.col4 = column.col4;
        // console.log(column.col2)
        // console.log(column.col3)
        // console.log(column.col4)
      });
    });
  }

}
