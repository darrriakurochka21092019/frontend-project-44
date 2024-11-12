#!/usr/bin/env node

import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const startGame = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswers = 0;
    
    while (correctAnswers < 3) {
        const randomNum = Math.floor(Math.random() * 100);
        console.log(`Question: ${randomNum}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = isEven(randomNum) ? 'yes' : 'no';

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }

        console.log('Correct!');
        correctAnswers += 1;
    }

    console.log(`Congratulations, ${name}!`);
};

startGame();