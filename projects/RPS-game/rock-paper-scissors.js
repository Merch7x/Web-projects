let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};


function pickCompMove () {
  const randomNumber = Math.random();
  let compMove = '';
  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    compMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = 'Paper';
  } else if (randomNumber >= 2 /3 && randomNumber < 1) {
    compMove = 'Scissors';
  }
  return compMove;
} 

function playGame(playerMove) {
  const compMove = pickCompMove();
  let result = '';
  if (playerMove === 'Scissors') {
    if (compMove === 'Rock') {
      result = 'Lose';
    } else if (compMove === 'Paper') {
      result = 'Win';
    } else if (compMove === 'Scissors') {
      result = 'Tie';
    }
    
  } else if (playerMove === 'Paper') {
    if (compMove === 'Rock') {
      result = 'Win';
    } else if (compMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'Lose';
    }

  } else if (playerMove === 'Rock') {
    if (compMove === 'Rock') {
      result = 'Tie';
    } else if (compMove === 'Paper') {
      result = 'Lose';
    } else {
      result = 'Win';
    }
  }

  if (result === 'Win') {
    score.Wins += 1;
  } else if (result === 'Lose') {
    score.Losses += 1
  } else if (result === 'Tie') {
    score.Ties +=1;
  } 

  localStorage.setItem('score', JSON.stringify(score));

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;        
    }

  updateScoreElement();
 
  document.querySelector('.js-result')
  .innerHTML = `You ${result}.`

  document.querySelector('.js-pick') 
  .innerHTML = `You
  <img src="images/${playerMove}-emoji.png" class="emoji">
  <img src="images/${compMove}-emoji.png" class="emoji">
  Computer`;
}