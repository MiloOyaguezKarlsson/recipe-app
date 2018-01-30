import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class RecipeDataService {

  constructor(private http: HttpClient) {
  }

  public getRecipes() {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/recipes?sortby=date_asc';
    return this.http.get(url);
  }

  public getRecipe(id) {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/recipe';
    const params = new HttpParams().set('id', id);
    return this.http.get(url, {params: params});
  }

  public postRecipe(recipe) {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/recipe';
    return this.http.post(url, recipe,
      {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public postComment(comment) {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/comment';
    return this.http.post(url, comment,
      {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public putRecipe(recipe) {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/recipe';
    return this.http.put(url, recipe,
      {headers: new HttpHeaders().set('Content-Type', 'application/json')});
  }

  public deleteRecipe(recipeID) {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/recipe';
    const params = new HttpParams().set('id', recipeID);
    return this.http.delete(url, {params: params});
  }

  public upvoteRecipe(recipeID) {
    const url = 'http://94.46.140.3:8080/milo_recipe_backend/resources/upvote';
    const params = new HttpParams().set('recipe', recipeID).set('user', localStorage.getItem('username'));
    console.log(recipeID);
    return this.http.post(url, null, {params: params});
  }

}
