import * as utils from '../utils.js';

export default () => {
  const progressionLength = utils.getRandomNumber(8) + 7;
  const emptyIndex = utils.getRandomNumber(progressionLength);
  const maxEnlager = 11;
  const enlager = utils.getRandomNumber(maxEnlager);
  const maxStartValue = 50;
  const startValue = utils.getRandomNumber(maxStartValue);
  const progression = new Array(progressionLength).fill(startValue)
    .map((cur, i) => (i === emptyIndex ? '..' : cur + enlager * i));
  const question = progression.join(' ');
  const correctAnswer = `${startValue + enlager * emptyIndex}`;
  const description = 'What number is missing in the progression?';
  return { description, question, correctAnswer };
};
