import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postArray: number[];

  // ToDo: transfer these into the firebase database and just retrieve them. 
  titles: string[][] = [
      ["Hosting an Angular Application using Netlify"],
      ["Setting Up A Github Repository and Creating A Local Copy"],
      ["Adding Photos To Instagram Using A Desktop Computer"],
      ["Creating A Simple Angular Web Application"],
      ["Tips on Making The Most Out Of Your First Year At Uni"],
      ["Decluttering Your Home"],
      ["How To Organise Your Web Browsing"],
      ["Organising Your Computer To Increase Productivity"],
      ["Ways To Be More Organised"]
  ];
  images: string[][] = [
      ["../../assets/blog/hosting-angular-application-using-netlify/header.jpg"],
      ["../../assets/blog/setting-up-remote-and-local-github-repo/header.jpg"],
      ["../../assets/blog/upload-to-instagram-via-desktop/header.jpg"],
      ["../../assets/blog/creating-a-simple-angular-web-application/header.jpg"],
      ["../../assets/blog/tips-on-making-the-most-out-of-1st-year-uni/header.jpg"],
      ["../../assets/blog/things-you-can-declutter/header.jpg"],
      ["../../assets/blog/organise-web-browsing/header.jpg"],
      ["../../assets/blog/organise-computer-increase-productivity/header.jpg"],
      ["../../assets/blog/how-to-be-better-organised/mini-preview.jpg"]
  ];
  dates: string[][] = [
      ["Coming Soon"],
      ["22 Aug 2020"],
      ["11 Aug 2020"],
      ["04 Aug 2020"],
      ["8 June 2020"],
      ["12 May 2020"],
      ["25 May 2020"],
      ["16 May 2020"],
      ["19 May 2020"]
  ];
  links: string[][] = [
      //["/blog/post/hostingAngularApplicationUsingNetlify"],
      ["/blog"],
      ["/blog/post/settingUpASimpleGithubRemoteAndLocalRepository"],
      ["/blog/post/uploadImageToInstagramViaDesktop"],
      ["/blog/post/creatingASimpleAngularWebApplication"],
      ["/blog/post/tipsOnMakingTheMostOutOfYourFirstYearUni"],
      ["/blog/post/declutteringYourHome"],
      ["/blog/post/howToOrganiseYourWebBrowsing"],
      ["/blog/post/organisingYourComputerToIncreaseProductivity"],
      ["/blog/post/waysToBeMoreOrganised"]
  ];
  tags: string[][] = [
    ["Web Development"],
    ["Software Development"],
    ["Design & Social Media"],
    ["Web Development"],
    ["Uni"],
    ["Organisation"],
    ["Organisation"],
    ["Organisation"],
    ["Organisation"]
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1,2,3,4,5,6,7,8];
  }
}
