import { Component, OnInit } from '@angular/core';
import { Shinobi } from '../shinobi';
//import { SHINOBI } from '../mock-shinobi';
import { ShinobiService } from '../shinobi.service';

@Component({
  selector: 'app-shinobi',
  templateUrl: './shinobi.component.html',
  styleUrls: ['./shinobi.component.css']
})
export class ShinobiComponent implements OnInit {

  //shinobi = SHINOBI;
  selectedShinobi: Shinobi;

  shinobi: Shinobi[];

  /*shinobi: Shinobi = {
    id: 1,
    name: 'Naruto',
    village: 'Konoha'
  };*/ 
 

  constructor(private shinobiService: ShinobiService) {

   }

  ngOnInit() {
    this.getShinobi();
  }

   onSelect(shinobi: Shinobi): void {
    this.selectedShinobi = shinobi;
  }

  getShinobi(): void{
    this.shinobiService.getShinobi()
      .subscribe(shinobi => this.shinobi = shinobi);
  }

}