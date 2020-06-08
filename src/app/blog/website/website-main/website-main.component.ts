import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-main',
  templateUrl: './website-main.component.html',
  styleUrls: ['./website-main.component.css']
})
export class WebsiteMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchbar() {
    var input, filter, ul, li, a, i, txtValue, noResults;
    var resultsExist = false;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    noResults = document.getElementById("no-results");
    li = ul.getElementsByTagName("section");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            resultsExist = true;
        } else {
            li[i].style.display = "none";
        }
    }
    if(resultsExist)
    {
      noResults.style.display = "none";
    }
    else
    {
      noResults.style.display = "block";
    }
  }
}
