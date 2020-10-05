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
  descriptions: string[][] = [
    // ["Hugo"],
    ["Assuming you already have a website hosted on Firebase, you might not be satisfied with the default free domain name (which ends in something like .firebaseapp.com or .web.app). If you've already bought a Namecheap domain name, this is how you can link it to your Firebase hosted website..."],
    ["If you already have an Angular Project set up, you might want to host it on a domain like http://www.mywebsite.web.app. Assuming you already have an Angular project coded up, we will go through step by step how to creating a project on Firebase (for your app), connect your Angular app to the Firebase Project and host your website..."],
    ["We are going to give you a step-by-step guide on how you can make your very own calculator application (complete with an executable file for the program!) This tutorial is separated into 3 sections: Part 1 covers creating the interface for the calculator. We are going to be using Visual Studio's C# Windows Forms to add buttons to the calculator. Part 2 covers adding in the basic functionality to the calculator (adding, subtracting, all of that calculator stuff). Part 3 will go through handling any invalid inputs and runtime exceptions. We will also 'finalise' the calculator..."],
    ["Netlify is a free hosting platform where you can host your website live using a customisable domain name provided with a .netlify.app extension at the end (you can also link your own custom domain if you'd like). One way Netlify does this is by connecting to an existing repository and hosting your website code stored there. In this tutorial we will go through how to host an Angular web application using Netlify in 4 steps.."],
    ["GitHub is a free version control platform where you can store your code online in repositories. When we create a Github repository, we are creating a place online where we can store our code files for a project remotely. This is a simple tutorial that will help you quickly set up an online remote repository on Github, which will be linked to a local folder on your computer..."],
    ["Sometimes you need to upload photos to Instagram on a computer, especially if you are using a computer to edit photos or create vector art. It can be really annoying to keep transferring them onto your phone and uploading it from there (and if you can't airdrop it using an IPhone, the quality of these photos can be reduced)..."],
    ["This tutorial will go through how you can create a simple angular web app in 3 stages: Setting up the environment, adding pages to the app, and adding the navbar and configuring routes..."],
    ["These days, many people spend most of their time surfing the web or conducting important business online. It makes sense to have your accounts, passwords, general online activities and frequently used websites organised in order to make things easier to access. Other online tools can also be utilised to increase productivity by managing social media posts and tracking the time you spend on time wasting websites..."],
    ["Having a well organised computer can improve your overall workflow and efficiency. Having too many folders and files in different places can make it difficult to find what you are looking for. Here are a few suggestions on how you can better organise your computer, including your files, applications and overall layout..."],
    
    // ["description"],
    // ["description"],
    // ["description"]
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
