import { gameLoop, generateNumber } from '../src/index.js';

const op = () => ['+', '-', '*'][Math.round(Math.random() * 2)];
const generateCalcString = () => `${generateNumber()} ${op()} ${generateNumber()}`;
// eslint-disable-next-line no-eval
const answerFunc = (str) => eval(str); // в нубском проекте можно и eval
const calcGame = () => gameLoop(generateCalcString, answerFunc);

export default calcGame;
