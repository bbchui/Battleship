import Board from './board.js';
import Ship from './ship.js';

// let canvas = document.getElementById('canvas')
// canvas.innerHTML = 'Battleships'

class Battleship {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.tableone = new Board(this);
    this.tabletwo = new Board(this);
    // this.ship = new Ship(this);

    // shis.stage = new createjs.Stage(this.canvas);
  }

  start() {
    this.canvas.innerHTML = 'Battleships';
    this.tableone.create('tableone', 'a');
    this.tabletwo.create('tabletwo', 'b');
    let ship1 = new Ship(5)
    ship1.hor_highlight('a');
    ship1.vert_highlight('b');
    ship1.hor_placeship('a');
    ship1.vert_placeship('b')
  }

  
}

let battleship = new Battleship();
battleship.start();
