import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeDataService} from '../recipe-data.service';
import {MatDialog} from '@angular/material';
import {ConfirmDeleteComponent} from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor(route: ActivatedRoute, private recipeDataService: RecipeDataService, public dialog: MatDialog) {
    route.params.subscribe(data => {
      this.recipeID = data.id;
    });
  }

  allowedEdit;
  loggedIn;
  recipe;
  recipeID;
  ingredients;
  tags;

  ngOnInit() {
    this.recipeDataService.getRecipe(this.recipeID).subscribe(data => {
      this.recipe = data;
      this.ingredients = this.recipe.ingredients;
      this.tags = this.recipe.tags;
      // kolla om man är inloggad
      if (localStorage.getItem('loggedIn')) {
        this.loggedIn = true;
        // kolla om man är inloggad som samma som la upp receptet
        if (localStorage.getItem('username') === this.recipe.user) {
          this.allowedEdit = true;
        } else {
          this.allowedEdit = false;
        }
      } else {
        this.loggedIn = false;
      }
    });


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

  public editRecipe() {
    // här används banana in a box ngModel så recept objektet är direkt kopplat till formuläret
    this.recipeDataService.putRecipe(this.recipe).subscribe();
  }

  // dialog ruta för att confirma att tabort receptet
  openConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data) { // blir sant om yes knappen trycks
        this.deleteRecipe();
      }
    });
  }

  private deleteRecipe() {
    this.recipeDataService.deleteRecipe(this.recipeID).subscribe();
  }

}
