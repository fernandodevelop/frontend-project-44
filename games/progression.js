import { gameLoop, generateNumber } from '../src/index.js';

let uknown = null;
const generateProgressionString = () => {
  const a0 = generateNumber();
  const total = 5 + Math.round(Math.random() * 5);
  const arr = [a0];
  const d = generateNumber();
  for (let i = 1; i <= total; i += 1) {
    arr[i] = arr[i - 1] + d;
  }

  const position = Math.round(Math.random() * 5);
  uknown = arr[position];
  arr[position] = '...';
  return arr.join(' ');
};
const progressionAnserFunc = () => uknown;
const progressionGame = () => gameLoop(generateProgressionString, progressionAnserFunc);

export default progressionGame;
