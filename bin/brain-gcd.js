import runEngine from '../src/index.js';
import { randomInt } from 'crypto';

// Функция для нахождения наибольшего общего делителя (НОД)
const gcd = (a, b) => {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
};

// Генерация вопроса
const generateQuestion = () => {
  const num1 = randomInt(1, 100);
  const num2 = randomInt(1, 100);
  const question = `${num1} ${num2}`;
  const answer = String(gcd(num1, num2));
  return [question, answer];
};

// Запуск игры
const startGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  runEngine(gameRules, generateQuestion);
};

startGame();
