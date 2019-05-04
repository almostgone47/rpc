let humanWins = 0;
let compWins = 0;
const roundPicks = document.getElementById("roundPicks");

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
    return "Point for you!";
  } else if(human == 2 && computer === 1){
    humanWins++;
    return "Point for you!";
  } else if(human == 3 && computer === 2){
    humanWins++;
    return "Point for you!";
  } else if(human == computer){
    return "Tie! Play again!!";
  } else {
    compWins++;
    return "Point to computer. :(";
  }
}

const checkWinner = () => {
  const score = document.getElementById("score");

  score.innerHTML = ("Score is Computer: " + compWins + " Human: " + humanWins);

  if (humanWins == 5){
    humanWins = 0;
    compWins = 0;
    roundPicks.innerHTML = "You win!!!!";
  } else if (compWins == 5){
    humanWins = 0;
    compWins = 0;
    roundPicks.innerHTML = "You lose!!";
  }
}

const playGame = (humanGuess) => {
  const human = humanGuess
  const computer = computerPlay();
  const roundWinner = document.getElementById("roundWinner");

  roundPicks.innerHTML = (getItem(human) + " vs. " + getItem(computer));

  const result = getResult(human, computer);
  roundWinner.innerHTML = result;

  checkWinner();
}

const buttons = document.querySelectorAll('button');

let human = buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playGame(button.value);
  });
});