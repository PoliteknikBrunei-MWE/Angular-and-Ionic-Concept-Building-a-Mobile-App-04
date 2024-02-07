import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadComponent: () => import('./recipes/recipes.page').then( m => m.RecipesPage)
  },
  {
    path: 'recipes/:recipeId',
    loadComponent: () => import('./recipes/recipe-detail/recipe-detail.page').then( m => m.RecipeDetailPage)
  },
];
