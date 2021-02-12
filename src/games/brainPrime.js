import * as utils from '../utils.js';

export default () => {
  const maxValue = 3000;
  const question = utils.getRandomNumber(maxValue);
  const correctAnswer = utils.isPrime(question) ? 'yes' : 'no';
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return { description, question, correctAnswer };
};
