import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/Models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  href: string;
  hrefId: string;

  projects: Project[] = [
    { 
      "name": "Cyan X", 
      "imagePath": "../../assets/articles/projects-images/cyanX/header.png", 
      "link": "/projects/post/cyanX", 
      "tags": "2D • Game • Side scroller • Puzzle", 
      "description": "A 2D platformer game set in the distant future. Solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals..."
    },
    { 
      "name": "3D Street Racing Game", 
      "imagePath": "../../assets/articles/projects-images/racingGame/header.PNG", 
      "link": "/projects/post/streetRacingGame", 
      "tags": "3D • Game • Research • Racing", 
      "description": "This is a modified version of the street racing game sourced from this Microsoft's Github repository. The original game is a 3D street racing game where the player must avoid the obstacles on the road..."
    },
    { 
      "name": "Ice Capades", 
      "imagePath": "../../assets/articles/projects-images/iceCapades/header.jpg", 
      "link": "/projects/post/iceCapades", 
      "tags": "2D • Game • Top-Down • Puzzle", 
      "description": "Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change on the environment. You must pass through multiple levels, interact with objects, solve puzzles..."
    }
  ];

  constructor() { }

  ngOnInit() {
    this.href = window.location.href;
    this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);
  }

  getURL(i) {
    return this.projects[i].imagePath;
  }
}
