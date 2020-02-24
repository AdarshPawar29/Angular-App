import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  post={
    title: "Title",
    isFavorite: false
  }

  onFavoriteChange() {
    console.log("Favorite Change");
  }

  //ngSwitchCase
  viewMode = "list";
}
