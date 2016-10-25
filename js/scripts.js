

function Player(player1, totalScore1, roll) {
  this.player1 = "Player 1";
  this.totalScore1 = 0;
  this.roll = roll;
  this.hold = [];
}

function Player(player2, totalScore2, roll) {
  this.player1 = "Player 2";
  this.totalScore1 = 0;
  this.roll = roll;
  this.hold = [];
}

$(document).ready(function() {
  $("#play-game-btn").click(function(event) {
    $("#play-game-btn").hide();
    $("#game").show();

    var player1 = "player1";
    var player1score = 0;
    var player2 = "player2";
    var player2score = 0;

    var roll = Math.floor(Math.random() * 6) + 1;

    var player = Player(player1, totalScore1, roll);
    var player = Player(player2, totalScore2, roll);

    event.preventDefault();
  });
});
