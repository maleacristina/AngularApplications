import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;
  categoriesDoc: AngularFirestoreDocument<Category>;

  constructor(public afs: AngularFirestore) {
    this.categoriesCollection = this.afs.collection('categories');

    this.categories = this.afs.collection('categories').snapshotChanges().map(changes => {
      return changes.map(a => {
         const data = a.payload.doc.data() as Category;
         data.id = a.payload.doc.id;
         return data;
      });
    });
  }

/*   getCategories() {

  } */
}
