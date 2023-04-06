import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './auth-service/register/register.component';
import { LoginComponent } from './auth-service/login/login.component';
import { RecipeComponent } from './RecipeRelated-Files/recipe/recipe.component';
import { ListsComponent } from './lists/lists.component';
import { RecipeService } from './recipe-service/recipe.service';
import { DisplayRecipiesComponent } from './RecipeRelated-Files/display-recipies/display-recipies.component';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth-service/auth.service';
import { OneListComponent } from './one-list/one-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    RecipeComponent,
    ListsComponent,
    DisplayRecipiesComponent,
    OneListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [RecipeService,
    AuthService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
