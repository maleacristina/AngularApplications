import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  books: Observable<any[]>;
  favoriteBooks: Observable<any[]>;
  unreadBooks: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getBooks() {
    this.books = this.db.list('/books').valueChanges() as Observable<any[]>;
    return this.books;
  }

  getFavoriteBooks() {
    this.favoriteBooks = this.db.list('/books').map(books => {
      const topRateBooks = books.filter(item => item.rate > 4);
      return topRateBooks;
    });
    return this.favoriteBooks;
  }

  getUnreadBooks() {
    this.unreadBooks = this.db.list('/books').map(books => {
      const ub = books.filter(item => item.dateread == null);
      return ub;
    });
    return this.unreadBooks;
  }
}
