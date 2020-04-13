import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import {ToggleButtonModule} from 'primeng/togglebutton';
import {TabViewModule} from 'primeng/tabview';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ToggleButtonModule, TabViewModule ],
  declarations: [ AppComponent, CardViewComponent, ListViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
