import { Component } from '@angular/core';
import {SearchComponent} from './components/search/search.component';
import {MatDialog} from '@angular/material';
import {DataserviceService} from './shared/services/dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor(public dialog: MatDialog, private data: DataserviceService) {}

  openDialog(): void {

    let dialogRef = this.dialog.open(SearchComponent, {
      width: '500px',
      data: {  value: '' , cake: false, toffee: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.cake) {
        this.data.addCakeItem({'name': result.value});
      }else if (result.toffee) {
        this.data.addToffeeItem({'name': result.value});
      }
    });
  }
}
