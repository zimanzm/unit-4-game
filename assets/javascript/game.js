$(document).ready(function() {

    var guessNumber = 0;
  
    var randomN = renderRandomN();
  
    var wins = 0;
    var losses = 0;
    var crystals;
  
    function randomCN() {
      return {
        c1: {
          points: Math.floor(Math.random() * 10) + 1,
          imageUrl: "assets/images/c1.png"
        },
        c2: {
          points: Math.floor(Math.random() * 10) + 1,
          imageUrl: "assets/images/c2.png"
        },
        c3: {
          points: Math.floor(Math.random() * 10) + 1,
          imageUrl: "assets/images/c3.png"
        },
        c4: {
          points: Math.floor(Math.random() * 10) + 1,
          imageUrl: "assets/images/c4.png"
        }
      };
    }
  
    function renderRandomN() {
      return Math.floor(Math.random() * 100) + 20;
    }
  
    function Start() {
      guessNumber = 0;
      crystals = randomCN();
      randomN = renderRandomN();
      $("#numberHere").text(randomN);
    }
  
    function showResult(win) {
      $("#updateHere").empty();
  
      if (win === true) {
        $("#updateHere").append($("<p>").text("Good Job!"));
        Start();
        CurrentN();
      }
      else if (win ===false) {
        $("#updateHere").append($("<p>").text("You lost!!"));
        Start();
        CurrentN();
      }
  
      var winSpan = $("<span>").text(wins);
      var lossSpan = $("<span>").text(losses);
  
      var ptagWin = $("<p>").text("Wins: ");
      var ptagLoss = $("<p>").text("Losses: ");
  
      ptagWin.append(winSpan);
      ptagLoss.append(lossSpan);
  
      $("#updateHere").append(ptagWin);
      $("#updateHere").append(ptagLoss);
    }
  
    function Crystal() {
      for (var key in crystals) {
        var crystalDiv = $("<div class='cButton' data-name='" + key + "'>");
        var crystalImg = $("<img alt='image' class='cImg'>").attr("src", crystals[key].imageUrl);
        crystalDiv.append(crystalImg);
        $("#crystalHere").append(crystalDiv);
      }
    }
  
    function updateN(crystal) {
      guessNumber += crystals[crystal.attr("data-name")].points;
    }
  
    function CurrentN() {
      var scoreDiv = $("<div id='score'>").text(guessNumber);
      $("#scoreHere").html();
      $("#scoreHere").html(scoreDiv);
    }
  
    Start();
    showResult();
    Crystal();
    CurrentN();
  
    $(".cButton").on("click", function(event) {
      updateN($(this));
      CurrentN();
  
      if (guessNumber === randomN) {
        wins++;
        Start();
        showResult(true);
      }
      else if (guessNumber > randomN) {
        losses++;
        Start();
        showResult(false);
      }
    });
  
  });
  