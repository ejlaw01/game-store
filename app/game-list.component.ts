import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Game } from './game.model';

@Component({
  selector: 'game-list',
  template: `
  <div class="sidebar">
    <h4>Filter by...</h4>
    <select id="filter" (change)="onChange($event.target.value)">
      <option value="all" selected="selected">All Games</option>
      <option value="boardGame">Board Games</option>
      <option value="rolePlayingGame">Role Playing Games</option>
      <option value="partyGame">Party Games</option>
      <option value="deckBuildingGame">Deck-Building Games</option>
      <option value="agilityGame">Agility Games</option>
      <option value="miniaturesGame">Miniatures Games</option>
    </select>
    <div id="cart">
      <button (click)="onCheckoutClick()" id="checkout-button">View Checkout</button>
      <div *ngFor="let currentCart of carts" id="checkout">
        <p class="cartItem">{{ currentCart }}</p>
      </div>
    </div>
  </div>
  <div class="games-list">
    <div *ngFor="let currentGame of childGameList | filter:selectedFilter" class="display-items">
        <h2 (click)="showGameDetails(currentGame)">{{ currentGame.name }}</h2>
        <h4>{{ "by " + currentGame.company }}</h4>
        <h4>{{ currentGame.price | currency:'USD':true:'1.2-2'}}</h4>
        <div *ngIf="selectedGame === currentGame">
          <h5>{{ currentGame.genre + " " + currentGame.type }}</h5>
          <h5>{{ "Players: " + currentGame.minPlayers}} to {{ currentGame.maxPlayers }} {{ "Playing Time: " + currentGame.timeToPlay }}  {{ "Ages " + currentGame.age + "+" }}</h5>
      </div>
    <game-checkout [game]="currentGame"></game-checkout>
    </div>
  </div>
  `
})

export class GameListComponent {
  @Input() childGameList: Game[];
  selectedGame: Game = null;
  showGameDetails(clickedGame: Game) {
    console.log(clickedGame);
    this.selectedGame = clickedGame;
  }
  public selectedFilter: string = "all";
  onChange(optionFromMenu) {
    this.selectedFilter = optionFromMenu;
    console.log(this.selectedFilter);
  }
  // public selectedCheckout: boolean = true;
  public carts: string[] = [];
  onCheckoutClick() {
    for (var i = 0; i < this.childGameList.length; i++) {
      if (this.childGameList[i].buy === true) {
        this.carts.push(this.childGameList[i].name);
      }
    }
    console.log(this.carts);
  }
}
