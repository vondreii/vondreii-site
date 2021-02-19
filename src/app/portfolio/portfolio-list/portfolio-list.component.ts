import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  @Input() contentList: any[] = [];
  @Input() currentPage: number = 1;

  numRows: number = 0;
  sortedRowsWithItems: Array<Array<Content>> = [];

  constructor() { }

  ngOnInit(): void {
    this.numRows = Math.ceil(this.contentList.length/3);

    // number of items per row and array of items
    this.sortedRowsWithItems = this.createRows();
    // result: [['a','b'], ['c','d'], ['e']]
    console.log(this.sortedRowsWithItems); 
  }

  createRows() {
    var perChunk = 3 
    var inputArray = this.contentList;

    var result = inputArray.reduce((resultArray, item, index) => { 
      const chunkIndex = Math.floor(index/perChunk)

      // start a new chunk
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] 
      }
      // Push the chunk section into the main array
      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])

    return result;
  }

}
