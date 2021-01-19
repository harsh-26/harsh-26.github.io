import { Component, OnInit } from '@angular/core';
import { Ibook } from 'src/app/Interface/ibook';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-lend-library',
  templateUrl: './lend-library.component.html',
  styleUrls: ['./lend-library.component.css']
})
export class LendLibraryComponent implements OnInit {

  constructor(private bookserv : BookService) { }
  books : Ibook[];
  ngOnInit(): void {
    this.bookserv.getAllLendingBooks().subscribe(data => this.books = data)
  }

}
