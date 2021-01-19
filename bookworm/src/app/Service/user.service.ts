import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "https://localhost:44305/api/"
  constructor(private _http : HttpClient ) { }

  postuser(regobj :any) : Observable<any>{
    return this._http.post<any>(this.url +"Usrs",regobj)
  }
  login(credential : any) : Observable<any>{
    return this._http.post<any>(this.url+"login",credential).pipe(catchError(this.handleError))
  }
  isLoggedIn(){
    return localStorage.getItem('usr');
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client Side Error :', errorResponse.error.message);
    } else {
        console.error('Server Side Error :', errorResponse);
    }
    // return an observable with a meaningful error message to the end user
    return  throwError(errorResponse.message);
  }
}
