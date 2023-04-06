import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { LoginComponent } from './auth-service/login/login.component';
import { DisplayRecipiesComponent } from './RecipeRelated-Files/display-recipies/display-recipies.component';
import { RecipeComponent } from './RecipeRelated-Files/recipe/recipe.component';
import { RegisterComponent } from './auth-service/register/register.component';
import { OneListComponent } from './one-list/one-list.component';

const routes: Routes = [
  {  path: '', component: RecipeComponent },
  { path: 'recipe/:id', component: DisplayRecipiesComponent},
  {  path: 'login', component: LoginComponent },
  {  path: 'register', component: RegisterComponent },
  {  path: 'lists', component: ListsComponent },
  {  path: 'lists/:id', component: OneListComponent  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
