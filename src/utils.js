const isEven = (number) => number % 2 === 0;

const getRandomNumber = (maxValue) => Math.floor(Math.random() * maxValue);

const getRandomArg = (...args) => {
  const argsCount = args.length;
  const randomIndex = getRandomNumber(argsCount);
  return args[randomIndex];
};

const getBiggestDivider = (num1, num2) => {
  const lowerNum = Math.min(num1, num2);
  const higherNum = Math.max(num1, num2);
  const result = higherNum % lowerNum;
  return (result === 0 ? lowerNum : getBiggestDivider(result, lowerNum));
};

export {
  isEven,
  getRandomNumber,
  getRandomArg,
  getBiggestDivider,
};
