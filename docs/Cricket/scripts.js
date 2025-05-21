

//to store the score of the game in local storage 
//let's you continue the game even after refreshing
let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
  //store score if scoreStr is available else reset the game
  score = scoreStr? JSON.parse(scoreStr) : { win: 0, loss: 0, tie: 0 };
  score.displayScore = function () {
    return `No. of Matches Won:${score.win}, Lost: ${score.loss}, Tie: ${score.tie}`;
  };
  showResult();
}

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
//function for show result messages
function showResult(userChoice, compChoice, result) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector('#user-move').innerText= userChoice?`You have chosen ${userChoice}`:''
  document.querySelector('#computer-move').innerText= compChoice?`Computer have chosen ${compChoice}`:''
  document.querySelector('#result').innerText= result?result:'';
  document.querySelector('#score').innerText= score.displayScore();
  
}


