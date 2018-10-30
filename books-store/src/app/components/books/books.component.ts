import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: AngularFireList<any[]>;
  allBooks: any;
  constructor(db: AngularFireDatabase) {
    this.books = db.list('/books');
    this.books.valueChanges().subscribe (books => {
      this.allBooks = books;
      console.log(this.allBooks);
    });
    console.log(this.books);
   }

  ngOnInit() {
  }

}
