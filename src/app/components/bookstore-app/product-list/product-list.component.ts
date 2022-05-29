import { Component, OnInit } from '@angular/core';
import { Book } from './model/Book';
import { BookService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  bookService;
  books: Array<Book> = [];

  constructor( bookService : BookService) {
    this.bookService = bookService;
   }

  ngOnInit(): void {

    // this.books = this.bookService.getBook().subscribe( data => {
    //   this.books = data;      
    // })

    this.books = this.bookService.getBook();

  }

}
