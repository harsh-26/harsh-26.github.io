import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';
import { Cart } from 'src/app/Class/cart';
import { Ibook } from 'src/app/Interface/ibook';
import { Icart } from 'src/app/Interface/icart';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cartMessage : number[]
  book_selected : number;
  user_logged : number;
  passmessage : string;
  @Output() cartDataEvent = new EventEmitter();
  @Input() singlebook : Ibook;
  constructor(private router : Router) {
   }

  ngOnInit(): void {
  }
  handleCartClick(event)
  {
    if(!localStorage.getItem('usr')){
      this.router.navigate(["/login"])
    }
    else{
    this.cartMessage = [];
    this.book_selected=this.singlebook.book_id;
    this.user_logged=JSON.parse(localStorage.getItem('usr')).user_id;
    this.cartMessage.push(this.book_selected)
    this.cartMessage.push(this.user_logged)
    
    // this.cartData ={
    //   book_id : this.book_selected,
    //   user_id : this.user_logged
    // }
   this.router.navigate(["/cart"],{
     state : {
       data : this.cartMessage
     }
   })
  }
  }

  
  
  

}
