import readlineSync from 'readline-sync';

export default (gameFunc) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const { description } = gameFunc();
  console.log(description);
  let questionCount = 0;
  do {
    const { question, correctAnswer } = gameFunc();
    console.log(`Question: ${question}`);
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
