import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CrudService } from '../shared/crud.service';    // CRUD services API

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // crudApi = new CrudService();
  name = new FormControl('');

  constructor(
    public crudApi: CrudService  // CRUD API services
  ) { }

  ngOnInit() {
  }

  Test() {
    this.name.setValue('wtf');
    this.crudApi.GetPost('something');
  }
}
