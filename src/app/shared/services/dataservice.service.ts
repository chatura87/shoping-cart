import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class DataserviceService {

  cakeList: any = [];
  public mainCakeLst = new Subject<any>();
  public mainToffeeList = new Subject<any>();

  constructor() { }

  addCakeItem(cake) {
  this.mainCakeLst.next(cake);
  }

  addToffeeItem(toffee) {
    this.mainToffeeList.next(toffee);
  }

  getAllCakes() {
    return [{'name': 'CAKE 1'}, {'name': 'CAKE 2'}];
}
  getAllToffees() {
    return [{'name': 'TOFFEE 1'}, {'name': 'TOFFEE - 2'}];
  }
}
