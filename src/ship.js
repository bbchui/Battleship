import $ from 'jquery';

class Ship {
  constructor() {
    // this.hp = size;
  }

  hor_highlight(board) {
    let val;
    $('*').mouseover((e) => {
      let tar = e.target.value
      if (tar && tar + 2 < this.check_bounds(tar)) {
        val = tar;
        for (let i = val; i < val + 4; i++) {
          $(`#${board}${i}`).addClass('highlight')
        }
        $(`#${board}${val}`).mouseout(() => {
          for (let i = val; i < val + 4; i++) {
            $(`#${board}${i}`).removeClass('highlight')
          }
        })
      }
    })
  }

  vert_highlight(board) {
    let val;
    let num = board === 'a' ? 1 : 2;
    $('*').mouseover((e) => {
      let tar = e.target.value
      if (tar && tar + 30 < num * 100 + 1) {
        val = tar;
        for (let i = val; i < val + 40; i += 10) {
          $(`#${board}${i}`).addClass('highlight')
        }
        $(`#${board}${val}`).mouseout(() => {
          for (let i = val; i < val + 40; i += 10) {
            $(`#${board}${i}`).removeClass('highlight')
          }
        })
      }
    })
  }

  check_bounds(val) {
    return Math.ceil((val)/10)*10
  }

  hor_placeship(board) {
    let val;
    $('*').mouseover((e) => {
      let tar = e.target.value
      if (tar && tar + 2 < this.check_bounds(tar)) {
        val = tar;
        $(`#${board}${val}`).click(() => {

          for (let i = val; i < val + 4; i++) {
            $(`#${board}${i}`).addClass('place')
          }
        })
      }
    })
  }

  is_valid(board, val) {
    return !$(`${board}${val}`).hasClass('place')
  }


}

export default Ship;
