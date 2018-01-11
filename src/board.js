import Ship from './ship.js'

class Board {
  constructor() {
    // this.ship = new Ship(this);
    // this.ship.hor_highlight;
  }

  create(table, onetwo) {
    let tbl = document.getElementById(table);
    let id = onetwo === 'a' ? 0 : 100;
    let asi = 65;
    let num = 1;

    for (let c = 0; c < 11; c++) {
      let row = document.createElement('tr');
      for (let r = 0; r < 11; r++) {
        let cell = document.createElement('td');
        cell.width = "30px";
        cell.height = "30px";
        if (c === 0 && r > 0) {
          cell.innerHTML = num;
          num++;
        } else if (r === 0 && c > 0) {
          cell.innerHTML = String.fromCharCode(asi);
          asi++;
        } else {
          cell.value = id;
          cell.id = `${onetwo}${id++}`;
          // cell.innerHTML = cell.id
        }

        row.appendChild(cell);
      }
      tbl.appendChild(row);
    }
  }
}

export default Board
