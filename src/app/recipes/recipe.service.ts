import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  constructor(private slService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Wagyu Burger',
      'Wagyu Burger with Aged cheddar, lettuce and a side of fries',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/6/1/2/FNM_070112-Copy-That-Almost-Famous-Animal-Style-Burger-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541460839.jpeg',
      [
        new Ingredient('Beef', 2),
        new Ingredient('Buns', 2),
        new Ingredient('Lettuce', 1),
        new Ingredient('Cheddar', 2),
      ]
    ),
    new Recipe(
      'Seafood Platter',
      'Seafood Platter With Mango Salsa & Horseradish Mayo',
      'https://foodhub.scene7.com/is/image/woolworthsltdprod/2112-seafood-platter-with-mango-salsa-and-horseradish-mayo:Square-1300x1300',
      [
        new Ingredient('Prawns', 8),
        new Ingredient('Lobster', 1),
        new Ingredient('Oysters', 6),
      ]
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
