import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibook } from '../Interface/ibook';

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
}
