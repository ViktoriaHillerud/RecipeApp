import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe-service/recipe.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

 
  searchquery = "";

  allRecipes: any;

  userLoggedIn: any;
  
  constructor(private recipeService:RecipeService, private route: Router ){ }

  ngOnInit(): void {
    this.userLoggedIn = this.readLocalStorage();
    console.log(this.userLoggedIn);
    }
    
    public readLocalStorage() {
      if (localStorage.getItem('token')){
        return true;
      }else  {
        return false;
      }
    }

    getRecipes() {
    this.recipeService.getRecipes(this.searchquery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })

      console.log(recipes);
      this.allRecipes = recipes;
    })
  }


  getDinner() {
    this.recipeService.getDinner().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })

      console.log(recipes);
      this.allRecipes = recipes;
    })
  }

  getStarter() {
    this.recipeService.getStarter().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

  getDessert() {
    this.recipeService.getDessert().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
    this.allRecipes = recipes;
    })
  }


  vegetarian() {
    this.recipeService.vegetarian().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

  vegan() {
    this.recipeService.vegan().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

 dairyFree() {
    this.recipeService.dairyFree().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

  glutenFree() {
    this.recipeService.glutenFree().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

  nutAllergy() {
    this.recipeService.nutAllergy().subscribe(result => {
      let recipes = result.hits.map((data: any) => {   
        let recipe = data.recipe;
        recipe.id = data._links.self.href.slice(38,70);
        return recipe;
      })
      this.allRecipes = recipes;
    })
  }

}
