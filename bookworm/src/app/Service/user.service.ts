import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:44305/api/"
  constructor(private _http : HttpClient ) { }

  postuser(regobj :any) : Observable<any>{
    return this._http.post<any>(this.url +"Usrs",regobj)
  }

}
