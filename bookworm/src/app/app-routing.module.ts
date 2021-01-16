import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './Component/book-details/book-details.component';
import { BooksComponent } from './Component/books/books.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';

const routes: Routes = [
  {path : "register" , component : RegisterComponent},
  {path : "login" , component : LoginComponent},
  {path : "home" , component : HomeComponent},
  {path : "books" , component : BooksComponent},
  {path : "book/:code", component : BookDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
