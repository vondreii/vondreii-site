import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit {

  postArray: number[];
  href: string;
  hrefId: string;

  titles: string[][] = [
    ["Creating Your Own Blog Using Hugo"],
    ["Linking A Namecheap Domain To Firebase"],
    ["Hosting An Angular App On Firebase"],
    ["Hosting an Angular Application using Netlify"],
    ["Creating A Simple Angular Web Application"],
  ];
  images: string[][] = [
    ["../../assets/articles/web-dev-images/createYourOwnBlogUsingHugo/header-dark.jpg"],
    ["../../assets/articles/web-dev-images/linkingANamecheapDomainToFirebase/header-dark.jpg"],
    ["../../assets/articles/web-dev-images/hostingAnAngularAppOnFirebase/header-dark.jpg"],
    ["../../assets/articles/web-dev-images/hostingAngularApplicationUsingNetlify/header-dark.jpg"],
    ["../../assets/articles/web-dev-images/creatingASimpleAngularWebApplication/header-dark.jpg"],
  ];
  dates: string[][] = [
    ["Coming Soon!"],
    ["4 Oct 2020"],
    ["3 Oct 2020"],
    ["30 Aug 2020"],
    ["04 Aug 2020"],
  ];
  links: string[][] = [
    ["#"],
    // ["/webdev/post/createYourOwnBlogUsingHugo"],
    ["/webdev/post/linkingANamecheapDomainToFirebase"],
    ["/webdev/post/hostingAnAngularAppOnFirebase"],
    ["/webdev/post/hostingAngularApplicationUsingNetlify"],
    ["/webdev/post/creatingASimpleAngularWebApplication"],
  ];
  tags: string[][] = [
    ["Hugo"],
    ["Hosting, Firebase, Namecheap"],
    ["Angular, Hosting, Firebase"],
    ["Angular, Netlify, Hosting"],
    ["Angular"],
  ];
  category: string[][] = [
    ["webdev"],
    ["webdev"],
    ["webdev"],
    ["webdev"],
    ["webdev"],
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1,2,3,4];
    this.href = window.location.href;
    this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);
  }

  isCategory(i){
    return this.hrefId === this.category[i].toString()
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
