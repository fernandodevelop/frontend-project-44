import { gameLoop } from '../src/index.js';

const generatePrimeString = () => `${Math.round(Math.random() * 100)}`;
const primeAnserFunc = (input) => {
  const N = Number(input);
  for (let i = 2; i * i <= N; i += 1) {
    if (N % i === 0) return 'no';
  }
  return 'yes';
};
const primeGame = () => gameLoop(generatePrimeString, primeAnserFunc);

export default primeGame;
