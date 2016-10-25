

function Player(player) {
  this.player = player;
  this.totalScore = 0;
}

function PigDice(player1, player2) {
  this.currentPlayer = player1;
  this.roll = Math.floor(Math.random() * 6) + 1;
  this.currentScore = 0;
}

PigDice.protopype.playGame(player, currentScore) {
  var roll = this.roll;
  if(roll === 1) {
    this.currentScore = 0;
    this.switchPlayer();
  } else if(roll !== 1) {
    this.currentScore += roll;

  }
}

PigDice.protopype.switchPlayer(){
  if(this.currentPlayer = player1) {
    this.currentPlayer = player2;
  } else {
    this.currentPlayer = player1;
  }
}

$(document).ready(function() {
  $("#play-game-btn").click(function(event) {
    $("#play-game-btn").hide();
    $("#game").show();

    var currentPlayer1 = "player1";
    var currentPlayer2 = "player2";

    var player1 = new Player(currentPlayer1);
    var player2 = new Player(currentPlayer2);

    var game = new PigDice(player1, player2)

    event.preventDefault();
  });
});
