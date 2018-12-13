import { CategoryService } from './../../services/category.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // categories: Category[];
  categoriesCollection: AngularFirestoreCollection<Category>;
  categories: Observable<Category[]>;
  categoriesDoc: AngularFirestoreDocument<Category>;
  categoryService: any;

  constructor(public db: AngularFirestore, public authService: AuthService) { }

  ngOnInit() {
   /*  this.categoryService.subscribe(categories => {
      // console.log(items);
      this.categories = categories;
     }); */
     this.categories = this.db.collection('categories').valueChanges();
  }

  getCategories() {
    this.categoriesCollection = this.db.collection('category', ref => ref.where('name', '==', 'name')); // ,ref => ref.orderBy('id', 'asc')
}
}
