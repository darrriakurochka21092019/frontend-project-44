#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { randomInt } from 'crypto';

// Функция для нахождения наибольшего общего делителя (НОД)
const gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
};

// Основная логика игры
const playGcdGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 0; i < 3; i++) {
        const num1 = randomInt(1, 100);
        const num2 = randomInt(1, 100);
        const correctAnswer = gcd(num1, num2);
        
        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (Number(userAnswer) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

playGcdGame();