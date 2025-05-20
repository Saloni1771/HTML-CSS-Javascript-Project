let score={
  win:0,
  loss:0,
  tie:0
   //encapsulation
  displayScore:function(){
    return `No. of Matches Won:${score.win}, Lost: ${score.loss}, Tie: ${score.tie}`;
  }
};

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
    score.tie++;
    return "It's a tie";
  } else if (
    (compChoice === "Bat" && userChoice === "Ball") ||
    (compChoice === "Ball" && userChoice === "Stump") ||
    (compChoice === "Stump" && userChoice === "Bat")
  ) {
    score.loss++;
    return "Computer Won the Game";
  } else {
    score.win++;
    return "User Won the match";
  }
}
//function for alert messages
function alertUser(userChoice, compChoice, result) {
  console.log(score);
  alert(
    `  'You have chosen ${userChoice}' \n'Computer Choice is ${compChoice}'\n\n "${result}
    Won:${score.win}, Lost: ${score.loss}, Tie: ${score.tie}"`
  );
}
