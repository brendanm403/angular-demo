import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wish-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wishlist';

  // we know items is only going to be an array of wishitem objects, so we define that as its type. This fixes an error that would occur if the array was empty. The error would say Property 'wishText' does not exist on type 'never'. The items array becomes type never when its empty. Now we get a page of nothing instead of an error if there is nothing in the array //
  items: WishItem[] = [
    // if you hover over WishItem it will tell you the isComplete property is optional, which is indicated by the ? //
    new WishItem("Learn Angular"),
    new WishItem("Get Lunch", true),
    new WishItem("Find self cutting grass")
  ];
}