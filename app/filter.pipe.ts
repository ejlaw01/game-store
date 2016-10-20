import { Pipe, PipeTransform } from '@angular/core';
import { Game } from './game.model';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform (input: Game[], game) {
    var output: Game[] = [];
      if (game === "boardGame") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Board Game") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (game === "rolePlayingGame") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Role Playing Game") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (game === "partyGame") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Party Game") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (game === "deckBuildingGame") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Deck-Building Game") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (game === "agilityGame") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Agility Game") {
            output.push(input[i]);
          }
        }
        return output;
      } else if (game === "miniaturesGame") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].type === "Miniatures Game") {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }
