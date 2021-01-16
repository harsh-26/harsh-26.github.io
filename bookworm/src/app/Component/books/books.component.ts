import { Component, OnInit } from '@angular/core';
import { Ibook } from 'src/app/Interface/ibook';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Ibook[];
  constructor(private bookService : BookService) {
   }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data
      console.log(this.books)
    });
  }

}
