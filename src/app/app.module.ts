import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule, MatButtonToggleModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { CakeComponent } from './components/cake/cake.component';
import { ToffeeComponent } from './components/toffee/toffee.component';
import { SearchComponent } from './components/search/search.component';
import {DataserviceService} from './shared/services/dataservice.service';


@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    ToffeeComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [DataserviceService],
  entryComponents: [ SearchComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
