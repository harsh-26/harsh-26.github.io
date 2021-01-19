import { Component, OnInit } from '@angular/core';
import { Ibook } from 'src/app/Interface/ibook';
import { BookService } from 'src/app/Service/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularBooks : Ibook[];
  constructor(private popserv : BookService) { 
  
  }

  ngOnInit(): void {
    this.popserv.getPopularBook().subscribe(data => this.popularBooks = data)
  }

}
