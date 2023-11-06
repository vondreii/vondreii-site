import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contentList: any[] = [];
  numRows: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  // number of items per row and array of items. result = [['a','b'], ['c','d'], ['e']]
  ngOnInit(): void {
    this.contentList = [
      [
        {
          title: "Windows File Manager", 
          date: "2022", 
          link: "/projects/windows-file-manager", 
          tags: "C# • Windows Forms", 
          description: "A replica of the Windows file manager app, where you can open and navigate to file and directories. This also has tagging functionality and you can also filter files by tags...",
          image: "./assets/portfolio/images/windowsFileManager/header.PNG"
        },
        {
          title: "Netflix Clone", 
          date: "2021", 
          link: "/projects/netflix-clone", 
          tags: "Clone • React • Firebase", 
          description: "Following this tutorial from Youtube, I was able to build a clone of Netflix that pulls a list of movies using The Movie Database API, and display them in the style of the Netflix Home Page...",
          image: "./assets/portfolio/images/netflixClone/header.jpg"
        },
        {
          title: "Hugo Tutorial Website", 
          date: "2021", 
          link: "/projects/hugo-tutorial", 
          tags: "Hugo • Github • Netlify • Markdown", 
          description: "This is a tutorial my partner and I created on how to create a website using Hugo and host it using Netlify. We presented this at the Blast Furnace Meetup and at the Newcastle Coders group...",
          image: "./assets/portfolio/images/hugoBlogTutorial/header.png"
        }
      ],
      [
        { 
          title: "CyanX", 
          date: "2018", 
          link: "/projects/cyanx", 
          tags: "2D • Game • Side scroller • Puzzle", 
          description: "A 2D platformer side-scroller game set in the distant future. The player must solve puzzles, level up, craft weapons and defeat enemies in order to rescue captured animals. There are 3 levels...",
          image: "./assets/portfolio/images/cyanX/header.png"
        },
        { 
          title: "Top Down 2D Game", 
          date: "2015", 
          link: "/projects/top-down-game", 
          tags: "2D • Game • Top-Down • Puzzle", 
          description: "Ice Capades is a Pokemon-style inspired game that aims to teach players about the affects of climate change. You must pass through multiple levels, interact with objects, solve puzzles...",
          image: "./assets/portfolio/images/iceCapades/header.PNG"
        },
        {
          title: "UoN Cognitive Load Research", 
          date: "2019", 
          link: "/projects/uon-cognitive-load", 
          tags: "3D • Game • Research • Racing", 
          description: "This is a modified version of the street racing game sourced from this Microsoft's Github repository. This is a 3D street racing game where the player must avoid obstacles on the road...",
          image: "./assets/portfolio/images/racingGame/header.jpg"
        }
      ],
      [
        { 
          title: "Doco Summaries", 
          date: "2021", 
          link: "/projects/docosummaries", 
          tags: "Angular • Firebase", 
          description: "Docosummaries is a place where you can learn about new documentaries, read their plot summaries, and find links where you could watch the documentaries for free online...",
          image: "./assets/portfolio/images/docosummaries/header.jpg"
        },
        {
          title: "Research Excel Automation", 
          date: "2021", 
          link: "/projects/excel-automation", 
          tags: "Python • Excel", 
          description: "These are a collection of Python automation scripts to help me with the data analysis for my research project, including cleaning the data and doing maths calculations...",
          image: "./assets/portfolio/images/excelAutomation/header.png"
        },
        { 
          title: "Calculator", 
          date: "2019", 
          link: "/projects/calculator", 
          tags: "C# • Tools", 
          description: "This is a simple calculator app that was made to replicate modern calculator apps that can be seen on smartphones. This is a Visual Studio Windows Form Application that runs on the desktop...",
          image: "./assets/portfolio/images/calculator/header.PNG"
        }

      ]
    ];
  }
}