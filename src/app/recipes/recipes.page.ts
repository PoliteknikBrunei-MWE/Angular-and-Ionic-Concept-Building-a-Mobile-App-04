import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Recipe } from './recipes.modal';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RecipesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipes: Recipe[] = [
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
