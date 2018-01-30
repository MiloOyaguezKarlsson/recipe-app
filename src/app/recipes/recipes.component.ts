import {Component, OnInit} from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor(private recipeDataService: RecipeDataService) {
  }

  error;
  recipes;

  ngOnInit() {
    this.recipeDataService.getRecipes().subscribe(data => {
        this.recipes = data;
      },
      error => {
        this.error = 'Something went wrong';
      });
  }

}
