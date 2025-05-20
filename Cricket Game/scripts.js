<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cricket Game</title>
  <style>
    body {
      text-align: center;
    }
  </style>
</head>

<body>
  <h1>Bat Ball Stump Game</h1>
  <button onclick="
  //function call to generate computer choiceGenerator
  let computerChoice=choiceGenerator();
   //function to return result 
  let resultMsg=returnResult(computerChoice,'Bat');
  //alert with result popup
  alertUser('Bat',computerChoice,resultMsg);">
    Bat
  </button>
  <button onclick="
      //function call to generate computer choice
      computerChoice=choiceGenerator();
       //function to return result 
  resultMsg=returnResult(computerChoice,'Ball');
  //alert with result popup
  alertUser('Ball',computerChoice,resultMsg);">
    Ball
  </button>
  <button onclick="
  //function call to generate computer choice 
  computerChoice=choiceGenerator();
  //function to return result 
  resultMsg=returnResult(computerChoice,'Stump');
  //alert with result popup
  alertUser('Stump',computerChoice,resultMsg);
  ">
    Stump
  </button>
  <script src="scripts.js">
  </script>
</body>

</html>
