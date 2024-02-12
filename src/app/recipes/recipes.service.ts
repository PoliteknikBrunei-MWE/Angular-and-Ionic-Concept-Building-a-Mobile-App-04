import { Injectable } from '@angular/core';
import { Recipe } from './recipes.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId
    })
  }

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'http://mwe.politeknikbrunei.com/Schnitzel.jpg',
      ingredients: ['French Fries', 'Chicken Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Aglio Olio',
      imageUrl: 'http://mwe.politeknikbrunei.com/Aglio-pasta.jpg',
      ingredients: ['Pasta', 'Garlic', 'Tomatoes']
    },
  ];
}
