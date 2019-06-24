import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Shinobi } from './shinobi'};
import { SHINOBI } from './mock-shinobi';
import { MessageService } from './message.service';

@Injectable({
    providedIn: 'root',
  }
)
export class ShinobiService {

  constructor(private messageService: MessageService) { 
    
  }

    getShinobi(): Observable<Shinobi[]> {
      this.messageService.add('ShinobiService: fetched shinobi');
      return of(SHINOBI);
    }

}