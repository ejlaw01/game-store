import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from './app.component';
import { Game } from './game.model';
// import { FilterPipe } from '.filter.pipe';

@Component({
  selector: 'game-list',
  template: `
  <div class="sidebar">
    <h4>Filter by...</h4>
    <select (change)="onChange($event.target.value)">
      <option value="all" selected="selected">All Games</option>
      <option value="boardGame">Board Games</option>
      <option value="rolePlayingGame">Role Playing Games</option>
      <option value="partyGame">Party Games</option>
      <option value="deckBuildingGame">Deck-Building Games</option>
      <option value="agilityGame">Agility Games</option>
      <option value="miniaturesGame">Miniatures Games</option>
    </select>
  </div>
  <div class="games-list">
    <div *ngFor="let currentGame of childGameList | filter:selectedFilter" class="display-items">
      <h2 (click)="showGameDetails(currentGame)">{{ currentGame.name }}</h2>
      <h4>{{ "by " + currentGame.company }}</h4>
      <h4>{{ currentGame.price | currency:'USD':true:'1.2-2'}}</h4>
      <div *ngIf="selectedGame === currentGame">
        <h5>{{ currentGame.genre + " " + currentGame.type }}</h5>
        <h5>{{ "Players: " + currentGame.minPlayers}} to {{ currentGame.maxPlayers }} {{ "Playing Time: " + currentGame.timeToPlay }}  {{ "Age: " + currentGame.age }}</h5>
      </div>
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
    console.log(clickedGame);
    this.selectedGame = clickedGame;
  }
  public selectedFilter: string = "all";
  onChange(optionFromMenu) {
    this.selectedFilter = optionFromMenu;
    console.log(this.selectedFilter);
  }
}
