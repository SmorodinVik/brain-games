import * as utils from '../utils.js';

export default () => {
  const maxValue = 100;
  const firstNumber = utils.getRandomNumber(maxValue);
  const secondNumber = utils.getRandomNumber(maxValue);
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = `${utils.getGreatestCommonDivisor(firstNumber, secondNumber)}`;
  const description = 'Find the greatest common divisor of given numbers.';
  return { description, question, correctAnswer };
};
