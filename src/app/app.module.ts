import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShinobiComponent } from './shinobi/shinobi.component';
import { ShinobiDetailComponent } from './shinobi-detail/shinobi-detail.component';
import { ShinobiService } from './shinobi.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule 
    ],
  declarations: [ 
    AppComponent, 
    ShinobiComponent, 
    ShinobiDetailComponent, MessagesComponent 
    ],
    providers:[
      
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
