import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeDataService} from '../recipe-data.service';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {
  recipeID;
  recipe;
  error;

  constructor(route: ActivatedRoute, private recipeDataService: RecipeDataService) {
    // hämta id från url:en genom ActivatedRoute som är den routen i routingmodulen som aktiverats
    route.params.subscribe(data => {
      this.recipeID = data.id;
    });
  }

  ngOnInit() {
    // hämta receptet med id:et som hämtats
    this.recipeDataService.getRecipe(this.recipeID).subscribe(data => {
      this.recipe = data;
    }, error => {
      this.error = 'Something went wrong';
    });
  }

  public upvoteRecipe() {
    this.recipeDataService.upvoteRecipe(this.recipeID).subscribe();
  }

}
