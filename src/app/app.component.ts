import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post={
    title: "Title",
    isFavorite: false
  }

  onFavoriteChange() {
    console.log("Favorite Change");
  }
}
