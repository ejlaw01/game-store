import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="header">
    <h1>Same Room Games</h1>
    <h3>be together.</h3>
  </div>
  <game-list
    [childGameList] = "masterGameList"
  ></game-list>
  <game-checkout></game-checkout>
  `
})

export class AppComponent {
  public masterGameList: Game[] = [
    new Game("Settlers of Catan", "Mayfair", "Board Game", "Euro", 22.99, 3, 4, 90, 10, 20),
    new Game("Ticket to Ride", "Days of Wonder", "Board Game", "Euro", 37.99, 2, 5, 45, 8, 12),
    new Game("Dungeons & Dragons: Player's Handbook, 5th Edition", "Wizards of the Coast", "Role Playing Game", "Fantasy", 50.00, 4, 6, 240, 12, 12),
    new Game("Dungeons & Dragons: Dungeon Master's Guide, 5th Edition", "Wizards of the Coast", "Role Playing Game", "Fantasy", 50.00, 4, 6, 240, 12, 11),
    new Game("Dungeons & Dragons: Monster Manual, 5th Edition", "Wizards of the Coast", "Role Playing Game", "Fantasy", 50.00, 4, 6, 240, 12, 11),
    new Game("Cards Against Humany", "Josh Dillon", "Party Game", "Inappropriate", 25.00, 4, 20, 45, 17, 6),
    new Game("Munchkin", "Steve Jackson Games", "Deck-Building Game", "Fantasy", 20.01, 3, 6, 72, 10, 8),
    new Game("Warhammer 40000", "Games Workshop", "Miniatures Game", "War", 2800.00, 2, 8, 120, 12, 1),
    new Game("Hungry Hungry Hippos", "Hasbro", "Agility Game", "Classic", 20.01, 2, 4, 1, 4, 5),
  ];
}
