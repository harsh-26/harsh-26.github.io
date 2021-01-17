import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ibook } from '../Interface/ibook';
import { Icategory } from '../Interface/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = "https://localhost:44305/api/"
  constructor(private _http : HttpClient ) { }
  
  getAllCategory() : Observable<Icategory[]>{
    return this._http.get<Icategory[]>(this.url+"categories")
  }

  getSelectedCategory(selectedList : String) : Observable<Ibook[]>{
   
    return this._http.get<Ibook[]>(this.url +"Categories/"+selectedList)
  }

}
