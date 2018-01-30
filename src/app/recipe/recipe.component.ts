import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() {
  }

  canEdit;
  @Input() recipe;

  ngOnInit() {
    if (localStorage.getItem('username') === this.recipe.user) {
      this.canEdit = true;
    }
  }

}
