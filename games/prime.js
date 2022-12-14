import { gameLoop } from '../src/index.js';

const generatePrimeString = () => `${Math.round(Math.random() * 100)}`;
const primeAnswerFunc = (input) => {
  const N = Number(input);
  for (let i = 2; i * i <= N; i += 1) {
    if (N % i === 0) return 'no';
  }
  return 'yes';
};
const primeGame = () => gameLoop(generatePrimeString, primeAnswerFunc);

export default primeGame;
