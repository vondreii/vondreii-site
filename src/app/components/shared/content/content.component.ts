import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() contentList: any[] = [];
  @Input() currentPage: number = 1;
  
  href: string;
  hrefId: string;

  constructor() { }

  ngOnInit() {
    this.href = window.location.href;
    this.hrefId = this.href.substring(this.href.lastIndexOf("/")+1,this.href.length);
    console.log(this.href);
  }

  getURL(i) {
    return this.contentList[i].imagePath;
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
