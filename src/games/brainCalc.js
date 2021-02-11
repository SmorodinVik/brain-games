import utils from '../utils.js';

export default () => {
  const maxValue = 100;
  const firstValue = utils.getRandomNumber(maxValue);
  const secondValue = utils.getRandomNumber(maxValue);
  const actionSymbol = utils.getRandomArg('+', '*', '-');
  const question = `${firstValue} ${actionSymbol} ${secondValue}`;
  const mapping = {
    '+': (a, b) => a + b,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
  };
  const correctAnswer = mapping[actionSymbol](firstValue, secondValue);
  return { question, correctAnswer };
};
