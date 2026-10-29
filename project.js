let playerScore = 0;
let computerScore = 0;
const winningScore = 5; // First to 5 wins

function playGame(playerChoice) {
  // Stop game if someone already won
  if (playerScore >= winningScore || computerScore >= winningScore) return;

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';

  if (playerChoice === computerChoice) {
    result = `It's a Tie! 🤝 Both chose ${playerChoice}`;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = `You Win! ${playerChoice} beats ${computerChoice} 🎉`;
    playerScore++;
  } else {
    result = `You Lose! ${computerChoice} beats ${playerChoice} 😜😢`;
    computerScore++;
  }

  // Check if someone reached winning score
  if (playerScore === winningScore) {
    result = "🏆 YOU WON THE GAME! 🏆";
    disableButtons();
  } else if (computerScore === winningScore) {
    result = "😭 COMPUTER WON THE GAME! 😭";
    disableButtons();
  }

  // Update HTML
  document.getElementById('result').innerHTML = 
    `You: ${playerChoice} | Computer: ${computerChoice} <br><br> ${result}`;
  
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
}

function resetGame() {
  // Reset everything back to 0
  playerScore = 0;
  computerScore = 0;
  document.getElementById('playerScore').innerText = playerScore;
  document.getElementById('computerScore').innerText = computerScore;
  document.getElementById('result').innerText = "New Game! Choose your move!";
  enableButtons();
}

function disableButtons() {
  document.querySelectorAll('.choices button').forEach(btn => btn.disabled = true);
}

function enableButtons() {
  document.querySelectorAll('.choices button').forEach(btn => btn.disabled = false);
}