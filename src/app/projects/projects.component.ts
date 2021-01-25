import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/models';
// Import projects per page
import page1 from '../../assets/data/projects/page1.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // Imports the data stored in the json file
  projects: Content[] = page1;

  constructor() { }

  ngOnInit() {
  }

}
