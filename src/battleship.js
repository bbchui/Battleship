import Board from './board.js';
import Ship from './ship.js';

// let canvas = document.getElementById('canvas')
// canvas.innerHTML = 'Battleships'

class Battleship {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.tableone = new Board(this);
    this.tabletwo = new Board(this);
    this.ship = new Ship(this);

    // shis.stage = new createjs.Stage(this.canvas);
  }

  start() {
    this.canvas.innerHTML = 'Battleships';
    this.tableone.create('tableone', 'a');
    this.tabletwo.create('tabletwo', 'b');
    this.ship.hor_highlight('a');
    this.ship.vert_highlight('b');
    this.ship.hor_placeship('a');
    this.ship.vert_placeship('b')
  }
}

let battleship = new Battleship();
battleship.start();
