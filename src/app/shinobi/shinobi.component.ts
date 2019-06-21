import { Component, OnInit } from '@angular/core';
import { Shinobi } from '..shinobi';

@Component({
  selector: 'app-shinobi',
  templateUrl: './shinobi.component.html',
  styleUrls: ['./shinobi.component.css']
})
export class ShinobiComponent implements OnInit {

  hero: Shinobi = {
    id: 1,
    name: 'Naruto',
    village: 'Konoha'
  }; 

  constructor() { }

  ngOnInit() {
  }

}