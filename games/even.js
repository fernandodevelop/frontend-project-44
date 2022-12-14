import { gameLoop, generateNumber } from '../src/index.js';

const evenAnserFunc = (n) => ['yes', 'no'][n % 2];
const evenGame = () => gameLoop(generateNumber, evenAnserFunc);

export default evenGame;
