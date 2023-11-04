import { Component } from '@angular/core';
import { Ingredient } from '../model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Telur', 4),
    new Ingredient('Bawang Daun', 2),
  ];
}
