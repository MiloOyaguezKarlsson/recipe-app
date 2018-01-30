import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeDataService} from './recipe-data.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatToolbarModule
} from '@angular/material';
import {AppRoutingModule} from './/app-routing.module';
import {StartPageComponent} from './start-page/start-page.component';
import {AddPageComponent} from './add-page/add-page.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {CommentsComponent} from './comments/comments.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from './login.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BackendInterceptor} from './backend.interceptor';
import {ConfirmDeleteComponent} from './confirm-delete/confirm-delete.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeComponent,
    HeaderComponent,
    StartPageComponent,
    AddPageComponent,
    EditPageComponent,
    LoginPageComponent,
    RecipePageComponent,
    CommentsComponent,
    ConfirmDeleteComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatDialogModule,
    MatMenuModule,
    AppRoutingModule
  ],
  entryComponents: [ConfirmDeleteComponent],
  providers: [RecipeDataService, LoginService,
    {provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
