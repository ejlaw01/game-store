import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';


@Component({
  selector: 'my-app',
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
    new Game("Settlers of Catan", "Mayfair", "Board Game", "Eurogame", 22.99, 3, 4, 90, 10, 20),
    new Game("Ticket to Ride", "Days of Wonder", "Board Game", "Eurogame", 37.99, 2, 5, 45, 8, 12),
    new Game("Dungeons & Dragons: Player's Handbook, 5th Edition", "Wizards of the Coast", "Role Playing Game", "Fantasy", 50.00, 4, 6, 240, 12, 12),
    new Game("Dungeons & Dragons: Dungeon Master's Guide, 5th Edition", "Wizards of the Coast", "Role Playing Game", "Fantasy", 50.00, 4, 6, 240, 12, 11),
    new Game("Dungeons & Dragons: Monster Manual, 5th Edition", "Wizards of the Coast", "Role Playing Game", "Fantasy", 50.00, 4, 6, 240, 12, 11),
    new Game("Ticket to Ride", "Days of Wonder", "Board Game", "Eurogame", 37.99, 2, 5, 45, 8, 12),
    new Game("Cards Against Humany", "Josh Dillon", "Party Game", "Inappropriate", 25.00, 4, 20, 45, 17, 6),
    new Game("Munchkin", "Steve Jackson Games", "Deck-Building", "Fantasy", 20.01, 3, 6, 72, 10, 8),
    new Game("Warhammer 40000", "Games Workshop", "Miniatures Game", "War", 2800.00, 2, 8, 120, 12, 1),
    new Game("Hungry, Hungry Hippos", "Hasbro", "Classic", "Agility", 20.01, 2, 4, 1, 4, 5),
  ];
  selectedGame: Game = null;
  showDetails(clickedGame: Game) {
    this.selectedGame = clickedGame;
  }
}
