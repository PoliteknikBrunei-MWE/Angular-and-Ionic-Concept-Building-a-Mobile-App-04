import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipes.modal';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipeDetailPage implements OnInit {

  loadedRecipe: Recipe | undefined;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
    ) { 
      addIcons({trash});
    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')){
        // redirect
        this.router.navigate(['/recipes']);
        return;
      } 
      const recipeId = paramMap.get('recipeId');
      // fetch recipe
      this.loadedRecipe = this.recipesService.getRecipe(recipeId!) as Recipe | undefined;
      if (this.loadedRecipe === undefined || Object.keys(this.loadedRecipe).length === 0) {
        // handle undefined case
        this.alertController.create({
          header: 'Recipe not found',
          message: 'Seems like the recipe has been removed or does not exist.',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
              this.router.navigate(['/recipes']);
              }
            }
          ]
        }).then(alertEl => {
          alertEl.present();
        });
        return;
      }
    });
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe!.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

}
