import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartPageComponent} from './start-page/start-page.component';
import {AddPageComponent} from './add-page/add-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: 'start', component: StartPageComponent},
  {path: 'add', component: AddPageComponent},
  {path: 'edit/:id', component: EditPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'recipe/:id', component: RecipePageComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
