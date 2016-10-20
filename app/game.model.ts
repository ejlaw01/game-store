export class Game {
  public buy: boolean = false;
  constructor(public name: string, public company: string, public type: string, public genre: string, public price: number, public minPlayers: number, public maxPlayers: number, public timeToPlay: number, public age: number, public inventory: number) { }
  oneLessInventory() {
    if (this.inventory > 0) {
      this.inventory--;
    } else {
      alert("Sorry! This game is out of stock.");
    }
  }
}
