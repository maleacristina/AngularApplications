import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // post = {
  //   title: "Title",
  //   isFavourite: true
  // }

  // onFavoriteChanged(isFavorite){
  //   console.log("Favorite changed: ", isFavorite);
  tweet = {
    body: '...',
    likeCount: 10,
    isLiked: true
  }
}
