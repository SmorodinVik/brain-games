import * as utils from '../utils.js';

export default () => {
  const maxValue = 100;
  const firstValue = utils.getRandomNumber(maxValue);
  const secondValue = utils.getRandomNumber(maxValue);
  const actionSymbol = utils.getRandomArg('+', '-', '*');
  const question = `${firstValue} ${actionSymbol} ${secondValue}`;
  const mapping = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  const correctAnswer = `${mapping[actionSymbol](firstValue, secondValue)}`;
  const description = 'What is the result of the expression?';
  return { description, question, correctAnswer };
};
