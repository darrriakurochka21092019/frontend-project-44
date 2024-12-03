import runEngine from '../src/index.js';
import { randomInt } from 'crypto';

// Функция для генерации арифметической прогрессии
const generateProgression = (length, step, hiddenIndex) => {
  const progression = [];
  const start = randomInt(1, 10); // Начальное число прогрессии

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }

  // Заменяем скрытое значение на '..'
  progression[hiddenIndex] = '..';
  return { progression, correctAnswer: start + hiddenIndex * step }; // Возвращаем прогрессию и правильный ответ
};

// Генерация вопроса
const generateQuestion = () => {
  const length = randomInt(5, 11); // Длина прогрессии от 5 до 10
  const step = randomInt(1, 10); // Шаг прогрессии
  const hiddenIndex = randomInt(0, length); // Индекс скрытого элемента
  const { progression, correctAnswer } = generateProgression(length, step, hiddenIndex); // Деструктурируем результат
  return [progression.join(' '), String(correctAnswer)]; // Возвращаем вопрос и правильный ответ
};

// Запуск игры
const startGame = () => {
  const gameRules = 'What number is missing in the progression?';
  runEngine(gameRules, generateQuestion);
};

startGame();
