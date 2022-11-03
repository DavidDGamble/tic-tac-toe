// Business Logic--------------------------------------------------------------------------
function Board() {
  this.player = 'x';
  this.board = [['','',''],['','',''],['','','']]
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

Board.prototype.winner = function () {
  

};

SpaceBool.prototype.checked = function (id) {
  const firstCoordinate = parseInt(id[0]);
  const secondCoordinate = parseInt(id[1]);
  this.spaceArray[firstCoordinate][secondCoordinate] = false;
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
        board.switchPlayer();
        spaceBool.checked(currentId);
      } else {
        const newImg = document.createElement('img');
        newImg.setAttribute('src', 'img/o.jpeg');
        document.getElementById(currentId).append(newImg);
        board.addClick(currentId);
        board.switchPlayer();
        spaceBool.checked(currentId);
      }
    }
  }
  console.log(board);
  console.log(spaceBool);
}






window.addEventListener("load", function () {
  board = new Board();
  spaceBool = new SpaceBool();
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