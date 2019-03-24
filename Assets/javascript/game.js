$(document).ready(function() {
  // Variables

  var randomNum = Math.floor(Math.random() * 101 + 19);
  $("#bigNumber").text(randomNum);

  var losses = 0;
  $("#losses").text("Losses: " + losses);

  var wins = 0;
  $("#wins").text("Wins: " + wins);

  var amount = 0;
  var c1 = Math.floor(Math.random() * 11 + 1);
  var c2 = Math.floor(Math.random() * 11 + 1);
  var c3 = Math.floor(Math.random() * 11 + 1);
  var c4 = Math.floor(Math.random() * 11 + 1);

  // Functions

  function restart() {
    randomNum = Math.floor(Math.random() * 101 + 19);
    $("#bigNumber").text(randomNum);

    c1 = Math.floor(Math.random() * 11 + 1);
    c2 = Math.floor(Math.random() * 11 + 1);
    c3 = Math.floor(Math.random() * 11 + 1);
    c4 = Math.floor(Math.random() * 11 + 1);
    amount = 0;
    $("#totalNum").text(amount);
  }

  $("#red").on("click", function() {
    amount = amount + c1;
    $("#totalNum").text("Your Number: " + amount);
  });
  $("#blue").on("click", function() {
    amount = amount + c2;
    $("#totalNum").text("Your Number: " + amount);
  });
  $("#green").on("click", function() {
    amount = amount + c3;
    $("#totalNum").text("Your Number: " + amount);
  });
  $("#yellow").on("click", function() {
    amount = amount + c4;
    $("#totalNum").text("Your Number: " + amount);
  });
  $(".cButton").on("click", function() {
    if (amount === randomNum) {
      win();
      restart();
    }
    if (amount > randomNum) {
      lose();
      restart();
    }
  });

  // Declaring Wins or Losses

  function win() {
    alert("You Win!");
    wins++;
    $("#wins").text("Wins: " + wins);
  }

  function lose() {
    alert("You Lose...");
    losses++;
    $("#losses").text("Losses: " + losses);
  }
});
