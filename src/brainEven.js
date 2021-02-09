import readlineSync from 'readline-sync';
import isEven from './isEven.js';
import getRandomNumber from './getRandomNumber.js';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let questionCount = 0;
  do {
    const number = getRandomNumber();
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
    console.log('Correct!');
    questionCount += 1;
  } while (questionCount !== 3);
  console.log(`Congratulations, ${userName}!`);
};
