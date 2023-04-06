import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/recipe-service/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { RecipeList } from 'src/app/recipelist';
import { Recipe } from 'src/app/recipe';
import { ListService } from 'src/app/lists/list.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-recipies',
  templateUrl: './display-recipies.component.html',
  styleUrls: ['./display-recipies.component.css']
})
export class DisplayRecipiesComponent implements OnInit{

  recipes:any;

  userLoggedIn: any;

  myLists: any;

  // addRecipeForm: FormGroup;

  
addToList: any;

formId: any;

list_id: any;
 

  constructor(private recipeService:RecipeService, private route: ActivatedRoute, private listService: ListService, public fb: FormBuilder){
    this.formId = this.fb.group({
      formId: []
    })
   }

    ngOnInit(): void {
    this.showRecipe();
    this.userLoggedIn = this.readLocalStorage();
    console.log(this.userLoggedIn);
    }

    showRecipe() {
      const recid = this.route.snapshot.params['id'];
   this.recipeService.getOneRecipe(recid).subscribe(data => {
    let recipe = data.recipe;
    return this.recipes = recipe;
    
   })
   
  }
    
    public readLocalStorage() {
      if (localStorage.getItem('token')){
        return true;
      }else  {
        return false;
      }
    }



    //Chose wich list to add recipe to!
    addToListBtn() {
      this.listService.getLists().subscribe(result => {
        this.myLists = result;
        alert("Choose list that you want to add recipe to");
        
   })
  }



   
    //add edamam api_recipe to backend recipe list api....
    //I need to send the recipe's Id, listTitle and preferably img columns to my backend recipeList-API...
    //Do I do this in the recipe-service or here?...
    //Or can I make a Form with hidden blocks that posts the values of the specific recipes...?

    //addToListChoose()

   onSubmit() {
    
    this.addToList = {
      api_id: this.route.snapshot.params['id'],
      label: this.recipes.label,
      // img: this.recipes.image,
      list_id: this.formId.value.formId
    }
    this.list_id = this.formId.value.formId
    console.log(this.addToList);
    this.recipeService.addToList(this.list_id, this.addToList).subscribe(response => {
   console.log(response);



   //     let recipe = result;
   // return this.recipeAdd = recipe;
     })
   }


  
}
