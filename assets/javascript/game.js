$(document).ready(function () {

  var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19); //variable that will hold a random number between 18 and 120 that the player will have to try to get
  var playerNumber = 0; //variable that holds the current player number which increases from one of the crystals when clicked
  var winsText = 0; //wins counter
  var lossesText = 0; //losses counter
  var crystalOneNumber = Math.floor(Math.random() * 11 + 1) //assign a random number between 1 and 12
  var crystalTwoNumber = Math.floor(Math.random() * 11 + 1) //assign a random number between 1 and 12
  var crystalThreeNumber = Math.floor(Math.random() * 11 + 1) //assign a random number between 1 and 12
  var crystalFourNumber = Math.floor(Math.random() * 11 + 1) //assign a random number between 1 and 12

  $("#number-to-guess").text(targetNumber); //Jquery to find the element in the index.html and changes its text dynamically to the targetNumber variable
  $("#your-number").text(playerNumber); // Jquery to find the element in the index.html and changes its text dynamically to the playerNumber variable
  $("#losses").text(lossesText); // Jquery to find the element in the index.html and changes its text dynamically to the lossesText variable
  $("#wins").text(winsText); // Jquery to find the element in the index.html and changes its text dynamically to the winsText variable

  //Function that is used to restart the game without the player having to refresh the page, this function sets new values for the previously declared variables and updates the page dynamically with Jquery to show the new number to guess and players number
  function restartGame() {
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    playerNumber = 0;
    crystalOneNumber = Math.floor(Math.random() * 11 + 1)
    crystalTwoNumber = Math.floor(Math.random() * 11 + 1)
    crystalThreeNumber = Math.floor(Math.random() * 11 + 1)
    crystalFourNumber = Math.floor(Math.random() * 11 + 1)
    $("#number-to-guess").text(targetNumber);
    $("#your-number").text(playerNumber);
  }

  // Jquery Click event for first crystal on the page
  $("#crystal-one").on("click", function () {
    
    //takes current playerNumber and adds the random value stored in crystalOneNumber
    playerNumber += crystalOneNumber

    //Jquery to update the screen with the current playerNumber
    $("#your-number").text(playerNumber);

    // If statement to check if the players number equals the target number if it does then the player wins, increases the winsText variable and updates the wins on the screen, finally it restarts the game. Else increases the losses updates the lossesText on the screen and restarts the game.
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

  // Jquery Click event for second crystal on the page
  $("#crystal-two").on("click", function () {

    //takes current playerNumber and adds the random value stored in crystalTwoNumber 
    playerNumber += crystalTwoNumber
    $("#your-number").text(playerNumber);

    // If statement to check if the players number equals the target number if it does then the player wins, increases the winsText variable and updates the wins on the screen, finally it restarts the game. Else increases the losses updates the lossesText on the screen and restarts the game.
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

  // Jquery Click event for third crystal on the page
  $("#crystal-three").on("click", function () {

    //takes current playerNumber and adds the random value stored in crystalThreeNumber 
    playerNumber += crystalThreeNumber
    $("#your-number").text(playerNumber);

    // If statement to check if the players number equals the target number if it does then the player wins, increases the winsText variable and updates the wins on the screen, finally it restarts the game. Else increases the losses updates the lossesText on the screen and restarts the game.
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

  // Jquery Click event for fourth crystal on the page
  $("#crystal-four").on("click", function () {

    //takes current playerNumber and adds the random value stored in crystalFourNumber 
    playerNumber += crystalFourNumber
    $("#your-number").text(playerNumber);

    // If statement to check if the players number equals the target number if it does then the player wins, increases the winsText variable and updates the wins on the screen, finally it restarts the game. Else increases the losses updates the lossesText on the screen and restarts the game.
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