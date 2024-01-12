export class WishItem {
  // writing public means that the information can be accessed outside of this class //
  // boolean = false means we have set the default value to false //
  constructor(public wishText: string, public isComplete: boolean = false) {

  }
}