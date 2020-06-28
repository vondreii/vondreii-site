import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  collection: any;

  href: string;
  hrefId: string;

  test: [][];
  col1: [];
  col2: [];
  col3: [];
  col4: [];

  loc: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    
    this.href = window.location.href;
    this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);

    console.log("Something:" + this.hrefId);
    this.collection = this.db.collection('photography').valueChanges({ idField: 'id' });
    this.collection.forEach(photography => {
      photography.forEach(location => {
        if(location.id == this.hrefId)
        {
          this.col1 = location.col1;
          this.col2 = location.col2;
          this.col3 = location.col3;
          this.col4 = location.col4;
          this.loc = location.location;
        }
        console.log(location.location);
        console.log(window.location.href);
      });
    });
  }

}
