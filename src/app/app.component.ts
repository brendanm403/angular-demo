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

  
  get visibleItems(): WishItem[] {
    let value = this.listFilter;
    if (value === "0") {
      return this.items; 
    } else if (value === "1") {
      return this.items.filter(wish => wish.isComplete === false);
    } else {
      return this.items.filter(wish => wish.isComplete === true);
    }
  } 

  newWishText = "";

  toggleWish(item: WishItem) {
    // toggles each items boolean for isComplete property when clicked //
    item.isComplete = !item.isComplete;
    console.log(item);  
  }

  addNewWish() {
    // adds a new wish item to the items array //
    this.items.push(new WishItem(this.newWishText));
    // clear textbox //
    this.newWishText = "";
  }

  // the value of list filter is coming from the value of the options attribute "value", which is a string, default is set to 0 which is "All" //
  listFilter: string = "0";

}