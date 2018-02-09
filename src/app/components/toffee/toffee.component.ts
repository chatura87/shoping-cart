import {Component, OnInit} from '@angular/core';
import {DataserviceService} from '../../shared/services/dataservice.service';

@Component({
  selector: "app-toffee",
  templateUrl: "./toffee.component.html",
  styleUrls: ["./toffee.component.css"]
})
export class ToffeeComponent implements OnInit {

  toffeeList: any = [];
  constructor(private data: DataserviceService) {
  }

  ngOnInit() {
    this.toffeeList = this.data.getAllToffees();
    this.data.mainToffeeList.subscribe(data => this.toffeeList.push(data));
  }


  onSubmit(cake: any) {
    console.log(cake);
  }

}
