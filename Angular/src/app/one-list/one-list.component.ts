import { Component, OnInit } from '@angular/core';
import { ListService } from '../lists/list.service';
import { ActivatedRoute } from '@angular/router';

import { RecipeList } from 'src/app/recipelist';
import { Recipe } from 'src/app/recipe';


@Component({
  selector: 'app-one-list',
  templateUrl: './one-list.component.html',
  styleUrls: ['./one-list.component.css']
})
export class OneListComponent implements OnInit{

  lists:any;

  recipeList!: RecipeList;

  recipeAPI!: Recipe;

  listId: any;


  constructor(private listService: ListService, private route: ActivatedRoute){ }

  
  ngOnInit(): void {
    this.showList();
  }
  
  showList() {
  const id = this.route.snapshot.params['id'];
   this.listService.getOneList(id).subscribe(data => {
    this.lists = data;
    return this.lists;
  
  })
}


deleteList() {
  this.listService.deleteList(this.listId).subscribe((result: { token: string; }) => {
    this.listId = result;
  })
 }
}
