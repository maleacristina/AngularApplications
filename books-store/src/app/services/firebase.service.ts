import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  books: Observable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  getBooks() {
    this.books = this.db.list('/books').valueChanges() as Observable<any[]>;
    return this.books;
  }
}
