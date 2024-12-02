// game-log.js

import fs from 'fs';
import path from 'path';

const logFilePath = path.join(process.cwd(), 'game-log.txt');

const logGameResults = (results) => {
    fs.appendFileSync(logFilePath, results + '\n', 'utf8');
};

// Пример записи результатов игры
const exampleResults = `
Welcome to the Brain Games!
May I have your name? Sam
Hello, Sam!
What is the result of the expression?
Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
`;

logGameResults(exampleResults);
console.log('Game results logged to game-log.txt');