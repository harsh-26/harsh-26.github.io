import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Cart } from 'src/app/Class/cart';
import { Ibook } from 'src/app/Interface/ibook';
import { Icart } from 'src/app/Interface/icart';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartFill : Icart;
  book : Ibook[];
  dataArr : number[];
  userid : number
  cart_item : number[]=[];
  cart_string : String;
  totalPrice : number;
  finalTotal : number =0;
  conv : number;
  constructor(private bookserv : BookService, private router : Router) { }

  ngOnInit(): void {
    this.userid = JSON.parse(localStorage.getItem('usr')).user_id;
    this.dataArr = history.state.data
    if(this.dataArr != null)
    {
    this.cartFill = new Cart(null,null);
    this.cartFill.book_id = this.dataArr[0];
    this.cartFill.user_id = this.dataArr[1];
    this.bookserv.addToCart(this.cartFill).subscribe();
    }
    this.bookserv.getAllCartBook(this.userid).subscribe(data => 
      {
        this.book = data;
        console.log(this.book);
        this.calcPrice();
      
      });

  }
  calcPrice(){
    this.book.forEach(element => {
      this.conv = parseInt(element.price.toString().trim());
      this.finalTotal = this.finalTotal +this.conv;
      console.log(this.conv + " type " + typeof(this.conv))
      console.log(this.finalTotal);
     });
     this.totalPrice = this.finalTotal;
  }
 

  handleDelete(bkid){
    this.cart_string="";
    this.cart_item.push(bkid);
    this.cart_item.push(this.userid);
    this.cart_string = this.cart_item.join(",");
    console.log(this.cart_string);
    this.bookserv.deleteFromCart(this.cart_string).subscribe();
    window.location.reload();
  }

  sendToCheckout()
  {
    this.router.navigate(["/checkout"],{
      state : {
        data : this.book,
        price : this.totalPrice
      }
    });
  }

}
