import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, ObservedValueOf, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';



import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  configUrl = "http://127.0.0.1:8000/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer'
    })
  }

  constructor(private http: HttpClient, private router: Router) { }


  //Ska fungera likt loginUser
  registerUser(user: User){
    return this.http.post(this.configUrl+"register", user, this.httpOptions).pipe(catchError(this.handleError));
  }


  loginUser(user: User): Observable<any>{
    return this.http.post<any>(this.configUrl+"login", user, this.httpOptions).pipe(catchError(this.handleError));
  }

   logoutUser(): Observable<any> {
    return this.http.post<any>(this.configUrl+"logout", this.httpOptions).pipe(catchError(this.handleError));
    
   }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
    `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}