import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Secret', 'This is a secret recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHMZTemyzHdxOPxmGn5PaE5sF0qOe9wl_MZQ&usqp=CAU'),
    new Recipe('Popey', 'This is popey', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuZ2X8797oiJuUAMETFyIbz5MxaahXCv0bPQ&usqp=CAU'),
    new Recipe('Pasta', 'Pasta favourite', 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWQn2X9CLxa8vx_fHOcU8l_laOrMMNZ6cFmA&usqp=CAU')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
