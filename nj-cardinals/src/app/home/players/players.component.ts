import {Component, OnInit} from '@angular/core';
import {Player} from './player.model';
import {HandType} from "./HandType";

@Component({
  selector: 'cards-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public players: Player[];

  constructor() {
  }

  ngOnInit() {
    this.players = PlayersComponent.InitializePlayers();
  }

  static InitializePlayers():Player[]{
    let players: Player[] = [];
    players.push({
      Name: 'Kenji Bray',
      Number: 42,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Nick Albert',
      Number: 11,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Lance Anderson',
      Number: 22,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Laird Jones',
      Number: 5,
      Throws:HandType.Right,
      Bats: HandType.Left
    });
    players.push({
      Name: 'Jack Moran',
      Number: 17,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'JT Oldfield',
      Number: 1,
      Throws:HandType.Left,
      Bats: HandType.Left
    });
    players.push({
      Name: 'Ian Tuning',
      Number: 28,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Preston Terranova',
      Number: 23,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Wyatt Morwood',
      Number: 21,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Kai Douglas',
      Number: 12,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Adam Thompson',
      Number: 2,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    players.push({
      Name: 'Zachary Palik',
      Number: 9,
      Throws:HandType.Right,
      Bats: HandType.Right
    });
    return players.sort((a, b) => a.Number - b.Number);
  }

}
