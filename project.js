let humanscore = 0;
let computerscore = 0;

const rockbtn = document.querySelector("#rock");
const paperbtn = document.querySelector("#paper");
const scissorsbtn = document.querySelector("#scissors");

const result = document.querySelector("#result");
const score = document.querySelector("#score");
const winner = document.querySelector("#winner");


rockbtn.addEventListener("click", () => 
  playGame("rock")
);

paperbtn.addEventListener("click", () => 
  playGame("paper")
);

scissorsbtn.addEventListener("click", () => 
  playGame("scissors")
);

function playGame(playerChoice) {
  let randomNumber = Math.floor(Math.random() * 100) / 100;
  
  if (randomNumber === 0 || (randomNumber > 0 && randomNumber < 0.3)) {
    computerChoice ="rock";
  } else if (randomNumber >= 0.3 && randomNumber < 0.6) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  
  
  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie! Both chose " + playerChoice;
  } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
             (playerChoice === "paper" && computerChoice === "rock") ||
             (playerChoice === "scissors" && computerChoice === "paper")) {
    result.textContent = "You win! " + playerChoice + " beats " + computerChoice;
    humanscore++;
  } else {
    result.textContent = "You lose! " + computerChoice + " beats " + playerChoice;
    computerscore++;
  }
  score.textContent = `Your score: ${humanscore} | Computer score: ${computerscore}`;

  if (humanscore === 5) {
    winner.textContent = "You win the game!";
  } else if (computerscore === 5) {
    winner.textContent = "Computer wins the game!";
  } 
}

