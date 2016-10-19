import { Component } from '@angular/core';
import { Game } from './game.model'

@Component({
  selector: 'game-list',
  template: `
  <h3>{{ currentGame.name }}</h3>
  <h4>{{ currentGame.price }}</h4>
  `
})

export class AppComponent {
  @Input() childGameList: Game[];
  @Output() clickedGame = new EventEmitter();
}
