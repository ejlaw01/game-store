import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model'


@Component({
  selector: 'game-store',
  template: `
  <h1>Same Room Games</h1>
  <h2>be together.</h2>
  <game-list
    [childGameList] = "masterGameList"
    (clickedGame) = "showDetails($event)"
  ></game-list>
  <game-checkout></game-checkout>
  `
})

export class AppComponent {
  public masterGameList: Game[] = [
    new Game("Settlers of Catan", "Mayfair", "Board Game", "Euro Game", 22.99, 4, 120, 20),
  ];
  selectedGame: Game = null;
  showDetails(clickedGame: Game) {
    this.selectedGame = clickedGame;
  }
}
