// Business Logic--------------------------------------------------------------------------
function Board() {
  this.player = 1;
  this.zero = [];
  this.one = [];
  this.two = [];
}

Board.prototype.playerSwitch = function() {

};

Board.prototype.addClick = function() {

};

Board.prototype.winner = function() {

};


// UI Logic--------------------------------------------------------------------------------
function handleClick(event){
  event.preventDefault();

  const id = event.target.getAttribute("id");
}






window.addEventListener("load", function() {
  board = new Board();
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