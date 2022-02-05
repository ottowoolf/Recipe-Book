import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is a description',
      'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
    ),
    new Recipe(
      'A test recipe 2',
      'this is a description 2',
      'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg',
      [new Ingredient('Jam', 1), new Ingredient('Toast', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToSHoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
}
