import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  // href: string;
  // hrefId: string;
  // organisationDiv: any;

  constructor() { }

  ngOnInit() {
    // Gets the hyperlink in the browser window, eg "vondreii/photography/blue-mountains" and gets the id, eg 'blue-mountains'
    // this.href = window.location.href;
    // this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);
    // console.log(this.hrefId);
    
    // document.getElementById('category').style.fontWeight = "bold";

    // if(this.hrefId == "blog")
    // {
    //   document.getElementById('category').innerHTML = "ALL POSTS";
    //   document.getElementById("organisationDiv").style.display = "block";
    //   document.getElementById("resumesDiv").style.display = "none";
    //   document.getElementById("uniDiv").style.display = "block";
    //   document.getElementById("websitesDiv").style.display = "block";
    // }
    // else
    // {
    //   this.loadCategory("organisation", "Organisation", "organisationDiv");
    //   this.loadCategory("resumes", "Resumes", "resumesDiv");
    //   this.loadCategory("uni", "Uni", "uniDiv");
    //   this.loadCategory("websites", "Websites", "websitesDiv");
    // }
  }

  // loadCategory(hrefSelector: string, h2: string, div: string)
  // {
  //   if(this.hrefId == hrefSelector)
  //   {
  //     document.getElementById('category').innerHTML = h2.toUpperCase();
  //     document.getElementById(div).style.display = "block";
  //   }
  //   else
  //   {
  //     document.getElementById(div).style.display = "none";
  //   }
  // }


}
