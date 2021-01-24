import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/models';
// Import projects per page
import projects1 from '../data/info/projects1.json';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  // Imports the data stored in the json file
  projects: Content[] = projects1;

  constructor() { }

  ngOnInit() {
  }

}
