import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ibook } from 'src/app/Interface/ibook';
import { BookService } from 'src/app/Service/book.service';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book : Ibook;
  active = 1;
  constructor(private _bookservice : BookService,private _route : ActivatedRoute,) { }


  ngOnInit(): void {
    let key = this._route.snapshot.params['code'];
    this._bookservice.getBookById(key).subscribe(data => {this.book = data
    console.log(this.book)
    })
  }

}
