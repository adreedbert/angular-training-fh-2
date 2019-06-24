import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShinobiComponent } from './shinobi/shinobi.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
    ],
  declarations: [ 
    AppComponent, 
    ShinobiComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
