import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  
  configUrl = "http://127.0.0.1:8000/api/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }


  getLists(): Observable<any>{
    return this.http.get<any>(this.configUrl+"lists/all", this.httpOptions).pipe(catchError(this.handleError));
  }


 getOneList(id:any): Observable<any> {
  return this.http.get(this.configUrl+"lists/{id}", id).pipe(catchError(this.handleError));
 }


 createList(value:any): Observable<any> {
  return this.http.post(this.configUrl+"lists", value, this.httpOptions).pipe(catchError(this.handleError));
  }


  deleteRecipeFromList(id:any): Observable<any> {
    return this.http.delete(this.configUrl+"lists/{id}", id).pipe(catchError(this.handleError));
  }


  deleteList(id:any): Observable<any> {
    return this.http.delete(this.configUrl+"lists", id).pipe(catchError(this.handleError));
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
