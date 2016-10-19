export class Game {
  constructor(public name: string, public company: string, public type: string, public genre: string, public price: number, public numberOfPlayers: number, public timeToPlay: number, public inventory: number) { }
  oneLessInventory() {
    if (this.inventory > 0) {
      this.inventory--;
    } else {
      alert("Sorry! " + currentGame.name + " is out of stock.");
    }
  }
}
