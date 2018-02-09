import { Component, OnInit } from '@angular/core';
import { DataserviceService} from '../../shared/services/dataservice.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {

  title: String = 'CAKE';
  cakeList: any = [];

  constructor(private data: DataserviceService) { }

  ngOnInit() {
    this.cakeList = this.data.getAllCakes();
    this.data.mainCakeLst.subscribe(data => this.cakeList.push(data));
  }

  onSubmit(cake: any) {
    console.log(cake);
  }

}
