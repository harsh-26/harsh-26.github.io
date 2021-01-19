import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { BookDetailsComponent } from './Component/book-details/book-details.component';
import { BooksComponent } from './Component/books/books.component';
import { CartComponent } from './Component/cart/cart.component';
import { CheckoutComponent } from './Component/checkout/checkout.component';
import { HomeComponent } from './Component/home/home.component';
import { LendLibraryComponent } from './Component/lend-library/lend-library.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path : "register" , component : RegisterComponent},
  {path : "login" , component : LoginComponent},
  {path : "home" , component : HomeComponent},
  {path : "books" , component : BooksComponent},
  {path : "book/:code", component : BookDetailsComponent},
  {path : "cart",component: CartComponent,canActivate: [LoginGuard]},
  {path : "lending", component : LendLibraryComponent},
  {path : "checkout", component : CheckoutComponent},
  {path : "aboutus", component : AboutUsComponent},
  {path : "",component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
