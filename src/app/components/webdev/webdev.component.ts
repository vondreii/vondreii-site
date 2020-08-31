import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit {

  postArray: number[];

  titles: string[][] = [
      ["Hosting an Angular Application using Netlify"],
      ["Creating A Simple Angular Web Application"],
  ];
  images: string[][] = [
      ["../../assets/articles/web-dev-images/hostingAngularApplicationUsingNetlify/header-dark.jpg"],
      ["../../assets/articles/web-dev-images/creatingASimpleAngularWebApplication/header-dark.jpg"],
  ];
  dates: string[][] = [
      ["30 Aug 2020"],
      ["04 Aug 2020"],
  ];
  links: string[][] = [
      ["/webdev/post/hostingAngularApplicationUsingNetlify"],
      ["/webdev/post/creatingASimpleAngularWebApplication"],
  ];
  tags: string[][] = [
    ["Angular, Netlify, Hosting"],
    ["Angular"],
  ];

  constructor() { }

  ngOnInit() {
    this.postArray = [0,1];
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
