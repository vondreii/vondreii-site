import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/Models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Content[] = [ 
    {
      "title": "3D Street Racing Game", 
      "imagePath": "../../assets/content/projects-images/racingGame/header.PNG", 
      "date": "2019", 
      "link": "/content/project/streetRacingGame", 
      "tags": "3D • Game • Research • Racing", 
      "description": "This is a modified version of the street racing game sourced from this Microsoft's Github repository. The original game is a 3D street racing game where the player must avoid the obstacles on the road..."
    },
    { 
      "title": "CyanX", 
      "imagePath": "../../assets/content/projects-images/cyanX/header.png", 
      "date": "2018", 
      "link": "/content/project/cyanX", 
      "tags": "2D • Game • Side scroller • Puzzle", 
      "description": "A 2D platformer game set in the distant future. Solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals..."
    },
    { 
      "title": "Ice Capades", 
      "imagePath": "../../assets/content/projects-images/iceCapades/header.jpg", 
      "date": "2015", 
      "link": "/content/project/iceCapades", 
      "tags": "2D • Game • Top-Down • Puzzle", 
      "description": "Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change on the environment. You must pass through multiple levels, interact with objects, solve puzzles..."
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
