import { FirebaseService } from './../../services/firebase.service';
 import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
 import { Observable } from 'rxjs';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Observable<any[]>;
  allBooks: any;

  constructor(private firebaseService: FirebaseService) {
   }

  ngOnInit() {
    this.firebaseService.getBooks().subscribe(books => {
      this.allBooks = books;
    });
  }

}
