$( document ).ready(function(){
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
var playerNumber = 0;
var winsText = 0;
var lossesText = 0;
var crystalOneNumber = Math.floor(Math.random()*11+1)
var crystalTwoNumber = Math.floor(Math.random()*11+1)
var crystalThreeNumber = Math.floor(Math.random()*11+1)
var crystalFourNumber = Math.floor(Math.random()*11+1)

$("#number-to-guess").text(targetNumber);
$("#your-number").text(playerNumber);
$("#losses").text(lossesText);
$("#wins").text(winsText);

function restartGame (){
  targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
  playerNumber = 0;
  crystalOneNumber = Math.floor(Math.random()*11+1)
  crystalTwoNumber = Math.floor(Math.random()*11+1)
  crystalThreeNumber = Math.floor(Math.random()*11+1)
  crystalFourNumber = Math.floor(Math.random()*11+1)
  $("#number-to-guess").text(targetNumber);
  $("#your-number").text(playerNumber);
}


$("#crystal-one").on("click", function() {
    playerNumber += crystalOneNumber
    $("#your-number").text(playerNumber);

    

    if (playerNumber === targetNumber) {
        winsText++
        $("#wins").text(winsText);
        restartGame();
    } else if (playerNumber >= targetNumber) {
        lossesText++
        $("#losses").text(lossesText);
        restartGame();
    }
  });

    $("#crystal-two").on("click", function() {
      playerNumber += crystalTwoNumber
      $("#your-number").text(playerNumber);

      
  
      if (playerNumber === targetNumber) {
          winsText++
          $("#wins").text(winsText);
          restartGame();
      } else if (playerNumber >= targetNumber) {
          lossesText++
          $("#losses").text(lossesText);
          restartGame();
      }
    });

      $("#crystal-three").on("click", function() {
        playerNumber += crystalThreeNumber
        $("#your-number").text(playerNumber);
 
        
    
        if (playerNumber === targetNumber) {
            winsText++
            $("#wins").text(winsText);
            restartGame();
        } else if (playerNumber >= targetNumber) {
            lossesText++
            $("#losses").text(lossesText);
            restartGame();
        }
      });

        $("#crystal-four").on("click", function() {
          playerNumber += crystalFourNumber
          $("#your-number").text(playerNumber);

          
      
          if (playerNumber === targetNumber) {
              winsText++
              $("#wins").text(winsText);
              restartGame();
          } else if (playerNumber >= targetNumber) {
              lossesText++
              $("#losses").text(lossesText);
              restartGame();
          }
        });



}); 