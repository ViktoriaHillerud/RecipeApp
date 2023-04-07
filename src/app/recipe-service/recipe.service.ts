import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Recipe } from '../recipe';
import { RecipeList } from '../recipelist';


 @Injectable({
 providedIn: 'root'
})

export class RecipeService {

    appid = "02f016bc";
    appKey = "00fbad8632b6e722e97e070840fd1232";
    configUrl = "https://api.edamam.com/api/recipes/v2?type=public";
  

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept-Language': 'en'
        })
     }

     
    constructor(private http:HttpClient) { }


    getRecipes(q: string) {
        let searchQuery =  this.configUrl + "&q=" + q + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=dinner&tag=starter&tag=dessert&tag=breakfast";
        return this.http.get<any>(searchQuery, this.httpOptions);
    }

    getOneRecipe(id:any){
        let onerecipe =  "https://api.edamam.com/api/recipes/v2/" + id +  "?type=public&app_id=" + this.appid + "&app_key=" + this.appKey + "&mealType=Dinner&tag=dinner&tag=starter&tag=dessert&tag=breakfast";
        return this.http.get<any>(onerecipe, this.httpOptions);
    }

    //Add recipe from edamam recipe_id to backend api....
    //I need to send the recipe's Id, listTitle and preferably img columns to my backend recipeList-API...But How? 
    //Can I somehow send the parameters here in the service?
    addToList(listId: any, recipe: any){
        return this.http.post<any>("https://u06-fullstack-recipe-vikhil-production.up.railway.app/api/lists/" + listId, recipe).pipe(catchError(this.handleError));
    }
  
    getDinner() {
        let dinner =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&mealType=Dinner&tag=dinner";
        return this.http.get<any>(dinner, this.httpOptions);
    }


    getStarter() {
        let starter =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=starter";
        return this.http.get<any>(starter, this.httpOptions);
    }

    getDessert() {
        let dessert =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=dessert";
        return this.http.get<any>(dessert, this.httpOptions);
    }

    vegetarian() {
        let vegetarian =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=vegetarian";
        return this.http.get<any>(vegetarian, this.httpOptions);
    }

    vegan() {
        let vegan =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=vegan";
        return this.http.get<any>(vegan, this.httpOptions);
    }

    dairyFree() {
        let dairyFree =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=dairyfree";
        return this.http.get<any>(dairyFree, this.httpOptions);
    }

    glutenFree() {
        let glutenFree =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=glutenfree";
        return this.http.get<any>(glutenFree, this.httpOptions);
    }

    nutAllergy() {
        let nutAllergys =  this.configUrl + "&app_id=" + this.appid + "&app_key=" + this.appKey + "&tag=allergy&nut";
        return this.http.get<any>(nutAllergys, this.httpOptions);
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