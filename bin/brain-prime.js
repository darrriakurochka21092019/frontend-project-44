#!/usr/bin/env node

import readlineSync from 'readline-sync';
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

// Основная логика игры
const playPrimeGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    for (let i = 0; i < 3; i++) {
        const number = randomInt(1, 100); // Генерация случайного числа от 1 до 100
        const correctAnswer = isPrime(number) ? 'yes' : 'no';

        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playPrimeGame();