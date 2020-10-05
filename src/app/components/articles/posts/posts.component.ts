import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postArray: number[];
  href: string;
  hrefId: string;

  titles: string[][] = [
    // ["Creating Your Own Blog Using Hugo"],
    ["Linking A Namecheap Domain To Firebase"],
    ["Hosting An Angular App On Firebase"],
    ["Creating A Calculator in C#"],
    ["Hosting an Angular Application using Netlify"],
    ["Setting Up A Github Repository and Creating A Local Copy"],
    ["Adding Photos To Instagram Using A Desktop Computer"],
    ["Creating A Simple Angular Web Application"],
    ["How To Organise Your Web Browsing"],
    ["Organising Your Computer To Increase Productivity"],

    // ["Tips on Making The Most Out Of Your First Year At Uni"],
    // ["Decluttering Your Home"],
    // ["Ways To Be More Organised"]
  ];
  images: string[][] = [
    // ["../../assets/articles/post-images/createYourOwnBlogUsingHugo/header-dark.jpg"],
    ["../../assets/articles/post-images/linkingANamecheapDomainToFirebase/header-dark.jpg"],
    ["../../assets/articles/post-images/hostingAnAngularAppOnFirebase/header-dark.jpg"],
    ["../../assets/articles/post-images/creatingACalculatorInCSharp/header-dark.jpg"],
    ["../../assets/articles/post-images/hostingAngularApplicationUsingNetlify/header-dark.jpg"],
    ["../../assets/articles/post-images/settingUpASimpleGithubRemoteAndLocalRepository/header-dark.jpg"],
    ["../../assets/articles/post-images/uploadImageToInstagramViaDesktop/header-dark.jpg"],
    ["../../assets/articles/post-images/creatingASimpleAngularWebApplication/header-dark.jpg"],
    ["../../assets/articles/post-images/howToOrganiseYourWebBrowsing/header-dark.jpg"],
    ["../../assets/articles/post-images/organisingYourComputerToIncreaseProductivity/header-dark.jpg"],
    
    // ["../../assets/articles/students-images/tipsOnMakingTheMostOutOfYourFirstYearUni/header-dark.jpg"],
    // ["../../assets/articles/students-images/declutteringYourHome/header-dark.jpg"],
    // ["../../assets/articles/students-images/waysToBeMoreOrganised/header-dark.jpg"]
  ];
  dates: string[][] = [
    // ["Coming Soon!"],
    ["4 Oct 2020"],
    ["3 Oct 2020"],
    ["26 Sept 2020"],
    ["30 Aug 2020"],
    ["22 Aug 2020"],
    ["11 Aug 2020"],
    ["04 Aug 2020"],
    ["25 May 2020"],
    ["16 May 2020"],
    
    // ["8 June 2020"],
    // ["12 May 2020"],
    // ["19 May 2020"]
  ];
  links: string[][] = [
    // ["/posts/post/createYourOwnBlogUsingHugo"],
    ["/posts/post/linkingANamecheapDomainToFirebase"],
    ["/posts/post/hostingAnAngularAppOnFirebase"],
    ["/posts/post/creatingACalculatorInCSharp"],
    ["/posts/post/hostingAngularApplicationUsingNetlify"],
    ["/posts/post/settingUpASimpleGithubRemoteAndLocalRepository"],
    ["/posts/post/uploadImageToInstagramViaDesktop"],
    ["/posts/post/creatingASimpleAngularWebApplication"],
    ["/posts/post/howToOrganiseYourWebBrowsing"],
    ["/posts/post/organisingYourComputerToIncreaseProductivity"],
    
    // ["/students/post/tipsOnMakingTheMostOutOfYourFirstYearUni"],
    // ["/students/post/declutteringYourHome"],
    // ["/students/post/waysToBeMoreOrganised"]
  ];
  tags: string[][] = [
    // ["Hugo"],
    ["Hosting • Firebase • Namecheap"],
    ["Angular • Hosting • Firebase"],
    ["C#"],
    ["Angular • Netlify • Hosting"],
    ["Version Control • Github"],
    ["Design • Social Media"],
    ["Angular"],
    ["Organisation"],
    ["Organisation"],
    
    // ["Uni"],
    // ["Organisation"],
    // ["Organisation"]
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1,2,3,4,5,6,7,8];
    this.href = window.location.href;
    this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);
  }

  getURL(i) {
    return this.images[i];
  }

  searchbar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("section");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }
}
