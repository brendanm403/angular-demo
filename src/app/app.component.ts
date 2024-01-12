import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wish-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wishlist';

  items = [
    // if you hover over WishItem it will tell you the isComplete property is optional, which is indicated by the ? //
    new WishItem("Learn Angular"),
    new WishItem("Get Lunch", true),
    new WishItem("Find self cutting grass")
  ];
}
