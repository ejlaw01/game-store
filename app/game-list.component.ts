import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'game-list',
  template: `
  <div *ngFor="let currentGame of childGameList">
    <h3>{{ currentGame.name }}</h3>
    <h4>{{ "by " currentGame.company }}</h4>
    <h4>{{ currentGame.price | currency:'USD':true:'1.2-2'}}</h4>
  </div>
  `
})

export class GameListComponent {
  @Input() childGameList: Game[];
  @Output() clickedGame = new EventEmitter();
}
