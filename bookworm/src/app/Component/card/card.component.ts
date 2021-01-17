import { Component, Input, OnInit } from '@angular/core';
import { Ibook } from 'src/app/Interface/ibook';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() singlebook : Ibook;
  constructor() {
   }

  ngOnInit(): void {
  }

  
  
  

}
