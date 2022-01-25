import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('A Test Recipe 1', 'A Test 1', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    new Recipe('A Test Recipe 2', 'A Test 2', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')]
  @Output() itemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onItemSelected(recipe: Recipe): void {
    this.itemSelected.emit(recipe)
  }

}
