import runEngine from '../src/index.js';
import { randomInt } from 'crypto';

// Функция для проверки, является ли число простым
const isPrime = (num) => {
  if (num < 2) return false; // Числа меньше 2 не являются простыми
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // Если число делится на i, оно не простое
    }
  }
  return true; // Если не нашли делителей, число простое
};

// Генерация вопроса
const generateQuestion = () => {
  const number = randomInt(1, 100); // Генерация случайного числа от 1 до 100
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

// Запуск игры
const startGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(gameRules, generateQuestion);
};

startGame();
