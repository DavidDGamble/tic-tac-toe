// Business Logic--------------------------------------------------------------------------
function Board() {
  this.player = 'x';
  this.board = [['', '', ''], ['', '', ''], ['', '', '']]
}

function SpaceBool() {
  this.spaceArray = [[true, true, true], [true, true, true], [true, true, true]];
}

Board.prototype.switchPlayer = function () {
  if (this.player === 'x') {
    this.player = 'o';
  } else {
    this.player = 'x';
  }
};

Board.prototype.addClick = function (id) {
  const firstCoordinate = parseInt(id[0]);
  const secondCoordinate = parseInt(id[1]);
  this.board[firstCoordinate][secondCoordinate] = this.player;
};

Board.prototype.winner = function (id) {
  const case1 = this.board[0][0] + this.board[0][1] + this.board[0][2];
  const case2 = this.board[1][0] + this.board[1][1] + this.board[1][2];
  const case3 = this.board[2][0] + this.board[2][1] + this.board[2][2];
  const case4 = this.board[0][0] + this.board[1][0] + this.board[2][0];
  const case5 = this.board[0][1] + this.board[1][1] + this.board[2][1];
  const case6 = this.board[0][2] + this.board[1][2] + this.board[2][2];
  const case7 = this.board[0][0] + this.board[1][1] + this.board[2][2];
  const case8 = this.board[2][0] + this.board[1][1] + this.board[0][2];
  if (case1 === 'xxx' || case1 === 'ooo') {
    return this.player;
  } else if (case2 === 'xxx' || case2 === 'ooo') {
    return this.player;
  } else if (case3 === 'xxx' || case3 === 'ooo') {
    return this.player;
  } else if (case4 === 'xxx' || case4 === 'ooo') {
    return this.player;
  } else if (case5 === 'xxx' || case5 === 'ooo') {
    return this.player;
  } else if (case6 === 'xxx' || case6 === 'ooo') {
    return this.player;
  } else if (case7 === 'xxx' || case7 === 'ooo') {
    return this.player;
  } else if (case8 === 'xxx' || case8 === 'ooo') {
    return this.player;
  }
  return '';
};

SpaceBool.prototype.checked = function (id) {
  const firstCoordinate = parseInt(id[0]);
  const secondCoordinate = parseInt(id[1]);
  this.spaceArray[firstCoordinate][secondCoordinate] = false;
}

SpaceBool.prototype.endGame = function () {
  this.spaceArray = [[false, false, false], [false, false, false], [false, false, false]];
}

SpaceBool.prototype.tieGame = function () {
  let tie = true;
  this.spaceArray.forEach(function (element) {
    element.forEach(function (innerElement) {
      if (innerElement === true) {
        tie = false;
      }
    });
  });
  return tie;
}


// UI Logic--------------------------------------------------------------------------------
function handleClick(event) {
  event.preventDefault();

  const currentId = event.target.getAttribute("id");
  if (currentId !== null) {
    const firstCoordinate = parseInt(currentId[0]);
    const secondCoordinate = parseInt(currentId[1]);

    if (spaceBool.spaceArray[firstCoordinate][secondCoordinate]) {
      if (board.player === 'x') {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', 'img/x.jpeg');
        document.getElementById(currentId).append(newImg);
        board.addClick(currentId);
        if (board.winner() === 'x' || board.winner() === 'o') {
          document.getElementById('playerX').removeAttribute('class', 'hidden');
          spaceBool.endGame();
          document.getElementById('resetBtn').removeAttribute('class', 'hidden');
        } else {
          board.switchPlayer();
          spaceBool.checked(currentId);
        }
      } else {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', 'img/o.jpeg');
        document.getElementById(currentId).append(newImg);
        board.addClick(currentId);
        if (board.winner() === 'x' || board.winner() === 'o') {
          document.getElementById('playerO').removeAttribute('class', 'hidden');
          spaceBool.endGame();
          document.getElementById('resetBtn').removeAttribute('class', 'hidden');
        } else {
          board.switchPlayer();
          spaceBool.checked(currentId);
        }
      }
      if (spaceBool.tieGame()) {
        document.getElementById('resetBtn').removeAttribute('class', 'hidden');
      }
    }

  }
}

function handleReset(event) {
  event.preventDefault();

  location.reload()


}

window.addEventListener("load", function () {
  board = new Board();
  spaceBool = new SpaceBool();
  document.getElementById("resetBtn").addEventListener("click", handleReset);
  document.getElementById("00").addEventListener('click', handleClick);
  document.getElementById("01").addEventListener('click', handleClick);
  document.getElementById("02").addEventListener('click', handleClick);
  document.getElementById("10").addEventListener('click', handleClick);
  document.getElementById("11").addEventListener('click', handleClick);
  document.getElementById("12").addEventListener('click', handleClick);
  document.getElementById("20").addEventListener('click', handleClick);
  document.getElementById("21").addEventListener('click', handleClick);
  document.getElementById("22").addEventListener('click', handleClick);
});