const isEven = (number) => number % 2 === 0;

const getRandomNumber = (maxValue) => Math.floor(Math.random() * maxValue);

const getRandomArg = (...args) => {
  const argsCount = args.length;
  const randomIndex = getRandomNumber(argsCount);
  return args[randomIndex];
};

export {
  isEven,
  getRandomNumber,
  getRandomArg,
};
