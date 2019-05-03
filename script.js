let humanWins = 0;
let compWins = 0;

const computerPlay = () => {
  return num = (Math.floor(Math.random() * 3) + 1);
}

const getItem = (num) => {
  if(num == 1){
    return "Rock";
  } else if(num == 2) {
      return "Paper";
  } else {
    return "Scissors";
  }
}

const getResult = (human, computer) => {
  if(human != 1 && human != 2 && human != 3){
    return "You didn't enter a number!!";
  } else if(human == 1 && computer === 3){
    humanWins++;
    return "You win!!!";
  } else if(human == 2 && computer === 1){
    humanWins++;
    return "You win!!!";
  } else if(human == 3 && computer === 2){
    humanWins++;
    return "You win!!";
  } else if(human == computer){
    return "Tie! Play again!!";
  } else {
    compWins++;
    return "Sorry, you lose.";
  }
}

const checkWinner = () => {
  console.log("Score is Computer: " + compWins + " Human: " + humanWins);
  if (humanWins == 5){
    humanWins = 0;
    compWins = 0;
    return "You win!!!!"
  } else if (compWins == 5){
    humanWins = 0;
    compWins = 0;
    return "You lose!!"
  }
}

const playGame = () => {
  let human = window.prompt("Enter 1 for Rock, 2 for Paper or 3 for Scissors");
  let computer = computerPlay();

  console.log(getItem(human) + " vs. " + getItem(computer));

  const result = getResult(human, computer);
  console.log(result);
  checkWinner();
  return result;
}