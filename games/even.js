import { gameLoop, generateNumber } from '../src/index.js';

const evenAnswerFunc = (n) => ['yes', 'no'][n % 2];
const evenGame = () => gameLoop(generateNumber, evenAnswerFunc);

export default evenGame;
