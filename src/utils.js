const isEven = (number) => number % 2 === 0;

const getRandomNumber = (maxValue) => Math.floor(Math.random() * maxValue);

const getRandomSign = () => {
  const signs = ['*', '+', '-'];
  const randomIndex = getRandomNumber(signs.length);
  return signs[randomIndex];
};

const getGreatestCommonDivisor = (num1, num2) => {
  const lowerNum = Math.min(num1, num2);
  const higherNum = Math.max(num1, num2);
  const result = higherNum % lowerNum;
  return (result === 0 ? lowerNum : getGreatestCommonDivisor(result, lowerNum));
};

const isPrime = (number) => {
  if (number === 1 || number === 0) return false;
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

export {
  isEven,
  getRandomNumber,
  getRandomSign,
  getGreatestCommonDivisor,
  isPrime,
};
