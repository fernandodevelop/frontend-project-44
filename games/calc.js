import { gameLoop, generateNumber } from '../src/index.js';

const generateCalcString = () => generateNumber().toString() + ['+', '-', '*'][Math.round(Math.random() * 3)] + generateNumber().toString();
// eslint-disable-next-line no-eval
const anserFunc = (str) => eval(str);
const calcGame = () => gameLoop(generateCalcString, anserFunc);

export default calcGame;
