import Board from './board.js'

// let canvas = document.getElementById('canvas')
// canvas.innerHTML = 'Battleships'

class Battleship {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.tableone = new Board(this);
    this.tabletwo = new Board(this);

    // shis.stage = new createjs.Stage(this.canvas);
  }

  start() {
    this.canvas.innerHTML = 'Battleships';
    this.tableone.create('tableone');
    this.tabletwo.create('tabletwo');
  }
}

let battleship = new Battleship();
battleship.start();
