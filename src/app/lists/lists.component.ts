import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { Recipe } from '../recipe';




@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit{

  myLists: any;
  createListForm: FormGroup;
  userLoggedIn: any;
  recipeAPI!: Recipe;


  //Read a specific users lists.
  constructor(private authService: AuthService, private listService: ListService,  public fb: FormBuilder, public route: Router){  
  this.createListForm = this.fb.group({
    listTitle: []
  })

}

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

  getLists() {
    this.listService.getLists().subscribe(result => {
      this.myLists = result;
    })
  }


   onSubmit() {
    this.listService.createList(this.createListForm.value).subscribe((result: { token: string; })=> {
     this.myLists.push = result;
    },
  )

 }


}

