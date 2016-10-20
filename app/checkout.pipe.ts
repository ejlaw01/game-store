import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game.model';

@Pipe({
  name: 'checkout',
  pure: false
})

export class CheckoutPipe implements PipeTransform {
  transform (input: Game[], game) {
    var checkout: Game[] = [];
      for (var i = 0; i < input.length; i++) {
        if (input[i].buy === true) {
          checkout.push(input[i]);
        }
      }
    return checkout;
  }
}
