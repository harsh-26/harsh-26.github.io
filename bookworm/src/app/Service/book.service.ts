import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibook } from '../Interface/ibook';
import { Icart } from '../Interface/icart';
import { Iorder } from '../Interface/iorder';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  url = "https://localhost:44305/api/"
  constructor(private _http : HttpClient) { }

  getBooks() : Observable<Ibook[]>{
    return this._http.get<Ibook[]>(this.url+"Books");
  }
  getBookById(code) : Observable<Ibook>{
    return this._http.get<Ibook>(this.url + "Books/"+code);
  }
  getPopularBook() : Observable<Ibook[]>{
    return this._http.get<Ibook[]>(this.url+"popular")
  }
  addToCart(cartdata : Icart) : Observable<Icart>{
    return this._http.post<Icart>(this.url+"Carts",cartdata)
  }
  getAllCartBook(userid : number) : Observable<Ibook[]>{
    return this._http.get<Ibook[]>(this.url+"allcartbooks/"+userid)
  }
  deleteFromCart(cart_item : String) : Observable<any>{
    return this._http.delete<any>(this.url+"Deletebook/"+cart_item)
  }
  getAllLendingBooks() : Observable<Ibook[]>{
    return this._http.get<Ibook[]>(this.url+"lendinglib")
  }
  placeOrder(cartitems : Array<Iorder>) : Observable<any>{
    return this._http.post<any>(this.url+"placeOrder",cartitems);
  }
}
