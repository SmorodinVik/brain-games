import * as utils from '../utils.js';

export default () => {
  const lengths = [7, 8, 9, 10, 11];
  const progressionLength = utils.getRandomArg(...lengths);
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
