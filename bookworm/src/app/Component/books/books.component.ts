import { Component, OnInit } from '@angular/core';
import { Ibook } from 'src/app/Interface/ibook';
import { Icategory } from 'src/app/Interface/icategory';
import { BookService } from 'src/app/Service/book.service';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Ibook[];
  category : Icategory[];
  categoryList : number[]=[];
  s1 : String
  constructor(private bookService : BookService,private categoryService : CategoryService) {
   }

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data
      console.log(this.books)
    });
    this.categoryService.getAllCategory().subscribe(data =>{
      this.category = data;
      console.log(this.category)
    });
  }
  onChange(option,event){
    if(event.target.checked){
      this.categoryList.push(option)
    }else{
      for(var i=0; i < this.categoryList.length ; i++)
      {
        if(this.categoryList[i] == option)
        {
          this.categoryList.splice(i,1);
        }
      }
    }
    console.log(this.categoryList);
    this.s1 = this.categoryList.join(",")
    console.log(this.s1)
    if(this.s1 == ''){
      this.bookService.getBooks().subscribe(data => {
        this.books = data
        console.log("this.books")
      });
    }else{
    this.categoryService.getSelectedCategory(this.s1).subscribe(data => this.books = data);
    }
   
  }

  sortLogic(event){
    console.log(event.target.value);
    if(event.target.value == "low-high"){
      this.books.sort((left,right):number =>{
        return left.price - right.price
      })
    }
    if(event.target.value == "high-low"){
      this.books.sort((left,right):number =>{
        return right.price - left.price
      })
    }
  }

}
