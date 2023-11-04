import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Telur Dadar','Enak mantap gurih','https://awsimages.detik.net.id/community/media/visual/2022/02/06/resep-dadar-telur-ala-rumah-makan-padang_43.jpeg?w=1200'),
    new Recipe('Telur Dadar','Enak mantap gurih','https://awsimages.detik.net.id/community/media/visual/2022/02/06/resep-dadar-telur-ala-rumah-makan-padang_43.jpeg?w=1200')
  ];
}
