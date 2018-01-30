import {Component, OnInit} from '@angular/core';
import {RecipeDataService} from '../recipe-data.service';
import {MatChipInputEvent} from '@angular/material';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {

  constructor(private recipeDataService: RecipeDataService) {
  }

  error;
  loggedIn;
  recipe;
  tags = [];
  ingredients = [];

  ngOnInit() {
    if (localStorage.getItem('loggedIn')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  addIngredient(ingredient) {
    this.ingredients.push(ingredient);
  }

  removeIngredient(ingredient) {
    this.ingredients.splice(this.ingredients.indexOf(ingredient), 1);
  }

  addTag(tag) {
    this.tags.push(tag);
  }

  removeTag(tag) {
    this.tags.splice(this.tags.indexOf(tag), 1);
  }

  public postRecipe(recipe) {
    this.recipe = {
      name: recipe.name,
      user: localStorage.getItem('username'),
      picture: recipe.picture,
      description: recipe.description,
      instructions: recipe.instructions,
      portions: recipe.portions,
      ingredients: this.ingredients,
      tags: this.tags
    };
    this.recipeDataService.postRecipe(JSON.stringify(this.recipe)).subscribe( error => {
      this.error = 'Something went wrong';
    });
  }
}
