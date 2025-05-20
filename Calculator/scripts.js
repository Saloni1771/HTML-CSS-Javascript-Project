//function to get computer choice
    function choiceGenerator() {
      randomNumber = Math.random() * 3;
      if (randomNumber > 0 && randomNumber <= 1) {
        return "Bat";
      } else if (randomNumber <= 2) {
        return "Ball";
      } else {
        return "Stump";
      }
    }
    //function for returning the result
    function returnResult(compChoice, userChoice) {
      if (compChoice === userChoice) {
        return "It's a tie";
      } else if (
        (compChoice === "Bat" && userChoice === "Ball") ||
        (compChoice === "Ball" && userChoice === "Stump") ||
        (compChoice === "Stump" && userChoice === "Bat")
      ) {
        return "Computer Won the Game";
      } else {
        return "User Won the match";
      }
    }
    //function for alert messages
    function alertUser(userChoice, compChoice, result) {
      alert(
        `'You have chosen ${userChoice}' \nComputer Choice is ${compChoice} \n ${result}`
      );
    }