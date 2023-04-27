import { Component,OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PrivateCircleUI';
  searchText = '';
  detailList:any;
  todayDate = this.datePipe.transform(new Date(), 'short');
  lists = [
        {listName: 'Test_30_results',description: 'this is list 1',entities: '0'},
        {listName: 'To_index',description: 'this is list 2',entities: '3'},
        {listName: 'KPMG Requested Company',description: 'this is list 3',entities: '3'},
        {listName: 'Error Case',description: 'this is list 4',entities: '3'},
    ];
    showDetail(list: any){
      this.detailList = list;
      document.querySelector('table').style.width = '75%';
      document.querySelector('nav').style.width = '75%';
    }
    hideDetail(){
      this.detailList = null;
      document.querySelector('table').style.width = '100%';
      document.querySelector('nav').style.width = '100%';

    }
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

}