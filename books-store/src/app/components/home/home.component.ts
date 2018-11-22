import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Favorite books
  favoriteBooks: any;
  unreadBooks: any;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getFavoriteBooks().subscribe(favBooks => {
      this.favoriteBooks = favBooks;
      console.log(this.favoriteBooks);
    });

    this.firebaseService.getUnreadBooks().subscribe(ubBooks => {
      this.unreadBooks = ubBooks;
      console.log('Unread Books', this.unreadBooks);
    });
  }

}
