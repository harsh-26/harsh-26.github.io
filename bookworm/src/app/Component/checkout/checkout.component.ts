import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Class/order';
import { Ibook } from 'src/app/Interface/ibook';
import { Iorder } from 'src/app/Interface/iorder';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private bookserv : BookService,private router : Router) { }
  price : number;
  books : Ibook[];
  urserid : number;
  singleorder : Iorder;
  orderdetails : Array<Iorder> = [];
  ngOnInit(): void {
    this.urserid = JSON.parse(localStorage.getItem('usr')).user_id;
    this.price = history.state.price;
    this.books = history.state.data;
  }
  onSubmit()
  {
    for(let i = 0; i < this.books.length;i++)
    {
      this.singleorder = new Order(0,null,null,null,null,0,0);
      this.singleorder.user_id = this.urserid;
      this.singleorder.book_id = this.books[i].book_id;
      this.singleorder.order_amt = this.books[i].price;
      this.orderdetails.push(this.singleorder);
      this.bookserv.placeOrder(this.orderdetails).subscribe();
      this.router.navigate(["/home"]);
    }
  }

}
