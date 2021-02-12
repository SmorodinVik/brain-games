import * as utils from '../utils.js';

export default () => {
  const progressionLength = utils.getRandomArg(7, 8, 9, 10, 11);
  const emptyIndex = utils.getRandomNumber(progressionLength);
  const enlager = utils.getRandomNumber(11);
  const startValue = utils.getRandomNumber(50);
  const progression = new Array(progressionLength).fill(startValue)
    .map((cur, i) => (i === emptyIndex ? '..' : cur + enlager * i));
  const question = progression.join(' ');
  const correctAnswer = `${startValue + enlager * emptyIndex}`;
  const description = 'What number is missing in the progression?';
  return { description, question, correctAnswer };
};
