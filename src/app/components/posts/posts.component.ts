import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/Models/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Content[] = [
    { 
      "title": "Creating Your Own Blog Using Hugo", 
      "imagePath": "../../assets/content/post-images/createYourOwnBlogUsingHugo/header.jpg", 
      "date": "27 Nov 2020", 
      "link": "/posts/createYourOwnBlogUsingHugo", 
      "tags": "Hugo", 
      "description": "Hugo is a framework where you can create your own website, completely from scratch without much effort or without knowing too much (or any) of the internal programming. There are also many web hosting platforms that can easily host a Hugo project for free - meaning, the only money you will spend will be for the custom domain name..."
    },
    { 
      "title": "Creating a list of posts using Markdown on your Angular Website", 
      "imagePath": "../../assets/content/post-images/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite/header.jpg", 
      "date": "11 Oct 2020", 
      "link": "/posts/creatingAListOfPostsUsingMarkdownOnYourAngularWebsite", 
      "tags": "Angular • Markdown", 
      "description": "Let's say you want to write your own personal posts (for something like a blog, for example), and compile them as a list of posts on your homepage. If you want to do this yourself without using existing platforms, a good way is to use Markdown files! The basic idea is that each post or page with content will have their own file..."
    },
    { 
      "title": "Linking A Namecheap Domain To Firebase", 
      "imagePath": "../../assets/content/post-images/linkingANamecheapDomainToFirebase/header.jpg", 
      "date": "4 Oct 2020", 
      "link": "/posts/linkingANamecheapDomainToFirebase", 
      "tags": "Hosting • Firebase • Namecheap", 
      "description": "Assuming you already have a website hosted on Firebase, you might not be satisfied with the default free domain name (which ends in something like .firebaseapp.com or .web.app). If you've already bought a Namecheap domain name, this is how you can link it to your Firebase hosted website...", 
    },
    { 
      "title": "Hosting An Angular App On Firebase", 
      "imagePath": "../../assets/content/post-images/hostingAnAngularAppOnFirebase/header.jpg", 
      "date": "3 Oct 2020", 
      "link": "/posts/hostingAnAngularAppOnFirebase", 
      "tags": "Angular • Hosting • Firebase", 
      "description": "If you already have an Angular Project set up, you might want to host it on a domain like http://www.mywebsite.web.app. Assuming you already have an Angular project coded up, we will go through step by step how to creating a project on Firebase (for your app), connect your Angular app to the Firebase Project and host your website...", 
    },
    { 
      "title": "Creating A Calculator in C#", 
      "imagePath": "../../assets/content/post-images/calculator/header.jpg", 
      "date": "26 Sept 2020", 
      "link": "/posts/creatingACalculatorInCSharp", 
      "tags": "C#", 
      "description": "We are going to give you a step-by-step guide on how you can make your very own calculator application (complete with an executable file for the program!) This tutorial is separated into 3 sections: Part 1 covers creating the interface for the calculator. We are going to be using Visual Studio's C# Windows Forms to add buttons to the calculator. Part 2 covers adding in the basic functionality to the calculator (adding, subtracting, all of that calculator stuff). Part 3 will go through handling any invalid inputs and runtime exceptions. We will also 'finalise' the calculator...", 
    }
    // { 
    //   "title": "Hosting an Angular Application using Netlify", 
    //   "imagePath": "../../assets/content/post-images/hostingAngularApplicationUsingNetlify/header.jpg", 
    //   "date": "30 Aug 2020", 
    //   "link": "/posts/hostingAngularApplicationUsingNetlify", 
    //   "tags": "Angular • Netlify • Hosting", 
    //   "description": "Netlify is a free hosting platform where you can host your website live using a customisable domain name provided with a .netlify.app extension at the end (you can also link your own custom domain if you'd like). One way Netlify does this is by connecting to an existing repository and hosting your website code stored there. In this tutorial we will go through how to host an Angular web application using Netlify in 4 steps...", 
    // },
    // { 
    //   "title": "Setting Up A Github Repository and Creating A Local Copy", 
    //   "imagePath": "../../assets/content/post-images/settingUpASimpleGithubRemoteAndLocalRepository/header.jpg", 
    //   "date": "22 Aug 2020", 
    //   "link": "/posts/settingUpASimpleGithubRemoteAndLocalRepository", 
    //   "tags": "Version Control • Github", 
    //   "description": "GitHub is a free version control platform where you can store your code online in repositories. When we create a Github repository, we are creating a place online where we can store our code files for a project remotely. This is a simple tutorial that will help you quickly set up an online remote repository on Github, which will be linked to a local folder on your computer...", 
    // },
    // { 
    //   "title": "Adding Photos To Instagram Using A Desktop Computer", 
    //   "imagePath": "../../assets/content/post-images/uploadImageToInstagramViaDesktop/header.jpg", 
    //   "date": "11 Aug 2020", 
    //   "link": "/posts/uploadImageToInstagramViaDesktop", 
    //   "tags": "Design • Social Media", 
    //   "description": "Sometimes you need to upload photos to Instagram on a computer, especially if you are using a computer to edit photos or create vector art. It can be really annoying to keep transferring them onto your phone and uploading it from there (and if you can't airdrop it using an IPhone, the quality of these photos can be reduced)...", 
    // },
    // { 
    //   "title": "Creating A Simple Angular Web Application", 
    //   "imagePath": "../../assets/content/post-images/creatingASimpleAngularWebApplication/header.jpg", 
    //   "date": "04 Aug 2020", 
    //   "link": "/posts/creatingASimpleAngularWebApplication", 
    //   "tags": "Angular", 
    //   "description": "This tutorial will go through how you can create a simple angular web app in 3 stages: Setting up the environment, adding pages to the app, and adding the navbar and configuring routes...", 
    // },
    // { 
    //   "title": "How To Organise Your Web Browsing", 
    //   "imagePath": "../../assets/content/post-images/howToOrganiseYourWebBrowsing/header.jpg", 
    //   "date": "25 May 2020", 
    //   "link": "/posts/howToOrganiseYourWebBrowsing", 
    //   "tags": "Organisation", 
    //   "description": "These days, many people spend most of their time surfing the web or conducting important business online. It makes sense to have your accounts, passwords, general online activities and frequently used websites organised in order to make things easier to access. Other online tools can also be utilised to increase productivity by managing social media posts and tracking the time you spend on time wasting websites...", 
    // },
    // { 
    //   "title": "Organising Your Computer To Increase Productivity", 
    //   "imagePath": "../../assets/content/post-images/organisingYourComputerToIncreaseProductivity/header.jpg", 
    //   "date": "16 May 2020", 
    //   "link": "/posts/organisingYourComputerToIncreaseProductivity", 
    //   "tags": "Organisation", 
    //   "description": "Having a well organised computer can improve your overall workflow and efficiency. Having too many folders and files in different places can make it difficult to find what you are looking for. Here are a few suggestions on how you can better organise your computer, including your files, applications and overall layout...", 
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

}
