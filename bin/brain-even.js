import runEngine from '../src/index.js'

const isEven = (num) => num % 2 === 0;

const startGameEven = () => {
  const question = Math.floor(Math.random() * 100);
  const answer = isEven(question) ? 'yes' : 'no'
  
  return [question, answer]
}

function runEvenGame() {
  runEngine('Answer "yes" if the number is even, otherwise answer "no".', startGameEven)
}

runEvenGame();