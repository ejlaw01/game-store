import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Game } from './game.model';

@Component({
  selector: 'game-list',
  template: `
  <div *ngFor="let currentGame of childGameList" class="display-items">
    <h2 (click)="showGameDetails(currentGame)">{{ currentGame.name }}</h2>
    <h4>{{ "by " + currentGame.company }}</h4>
    <h4>{{ currentGame.price | currency:'USD':true:'1.2-2'}}</h4>
    <div *ngIf="selectedGame === currentGame">
      <h5>{{ "Type: " + currentGame.type }} -- {{ "Genre: " + currentGame.genre }}</h5>
      <h5>{{ "Players: " + currentGame.minPlayers}} to {{ currentGame.maxPlayers }} {{ "Playing Time: " + currentGame.timeToPlay }}  {{ "Age: " + currentGame.age }}</h5>
    </div>
  </div>
  <div>
    <game-checkout></game-checkout>
    <button></button>
  </div>
  `
})

export class GameListComponent {
  @Input() childGameList: Game[];
  selectedGame: Game = null;
  showGameDetails(clickedGame: Game) {
    this.selectedGame = clickedGame;
  }
}
