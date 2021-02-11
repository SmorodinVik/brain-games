import * as utils from '../utils.js';

export default () => {
  const maxValue = 100;
  const question = utils.getRandomNumber(maxValue);
  const correctAnswer = utils.isEven(question) ? 'yes' : 'no';
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return { description, question, correctAnswer };
};
