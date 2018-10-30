import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<any[]>;
  allBooks: any;

  constructor(db: AngularFireDatabase) {
    this.books = db.list('/books').valueChanges();
    this.books.subscribe (books => {
      this.allBooks = books;
      // console.log(this.allBooks);
    });
     // console.log(this.books);
   }

  ngOnInit() {
  }

}
