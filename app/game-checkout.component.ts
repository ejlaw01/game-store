import { Component, Input } from '@angular/core';
import { Game } from './game.model';

@Component({
  selector: 'game-checkout',
  template: `
  <div>
    <input *ngIf="game.buy === true" type="checkbox" checked (click)="toggleBuy(false)"/>
    <input *ngIf="game.buy === false" type="checkbox" (click)="toggleBuy(true)"/>
    <label>Add to cart</label>
  </div>
  `
})

export class GameCheckoutComponent {
  @Input() game: Game;
  toggleBuy(setBuying: boolean) {
    this.game.buy = setBuying;
    console.log(this.game.buy);
  }

}
