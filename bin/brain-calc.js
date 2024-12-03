
import runEngine from '../src/index.js'

const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
};

const calculation = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        throw new Error(`invalide operator - ${operator}`);
    }
  };
  
const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const operator = getRandomOperator();
    const question = `${num1} ${operator} ${num2}`;
    const answer = String(calculation(num1, num2, operator));
    // return { question: `${num1} ${operator} ${num2}`, answer: eval(`${num1} ${operator} ${num2}`) };
    return [question, answer];
};

const startGame = () => {
    const gameRules = 'What is the result of the expression?';
    runEngine(gameRules, generateQuestion);
};

startGame();