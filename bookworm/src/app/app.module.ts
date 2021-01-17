import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './Component/footer/footer.component';
import { CardComponent } from './Component/card/card.component';
import { HomeComponent } from './Component/home/home.component';
import { BooksComponent } from './Component/books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './Service/book.service';
import { BookDetailsComponent } from './Component/book-details/book-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    CardComponent,
    HomeComponent,
    BooksComponent,
    BookDetailsComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
