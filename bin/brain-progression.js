#!/usr/bin/env node

import readlineSync from 'readline-sync';
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

// Основная логика игры
const playProgressionGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('What number is missing in the progression?');

    const length = randomInt(5, 11); // Длина прогрессии от 5 до 10
    const step = randomInt(1, 10); // Шаг прогрессии
    const hiddenIndex = randomInt(0, length); // Индекс скрытого элемента
    const { progression, correctAnswer } = generateProgression(length, step, hiddenIndex); // Деструктурируем результат

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
    }

    console.log(`Congratulations, ${name}!`);
};

playProgressionGame();