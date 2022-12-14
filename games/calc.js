import { gameLoop, generateNumber } from '../src/index.js';

const generateCalcString = () => generateNumber().toString() + ['+', '-', '*'][Math.round(Math.random() * 3)] + generateNumber().toString();
// eslint-disable-next-line no-eval
const answerFunc = (str) => eval(str); // в нубском проекте можно и eval
const calcGame = () => gameLoop(generateCalcString, answerFunc);

export default calcGame;
