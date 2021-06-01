import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredients.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'Secret',
      'This is a secret recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHMZTemyzHdxOPxmGn5PaE5sF0qOe9wl_MZQ&usqp=CAU',
      [
        new Ingredient('secret', 5),
        new Ingredient('meat', 8)
      ]),
    new Recipe(
      'Popey',
      'This is popey',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuZ2X8797oiJuUAMETFyIbz5MxaahXCv0bPQ&usqp=CAU',
      [
        new Ingredient('look', 4),
        new Ingredient('spinazie', 10)
      ]),
    new Recipe(
      'Pasta',
      'Pasta favourite',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWQn2X9CLxa8vx_fHOcU8l_laOrMMNZ6cFmA&usqp=CAU',
      [
        new Ingredient('tomatoes', 4),
        new Ingredient('pasta', 100)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService ) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
