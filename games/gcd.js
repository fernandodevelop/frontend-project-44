import { gameLoop, generateNumber } from '../src/index.js';

const generateGCDString = () => `${generateNumber()} ${generateNumber()}`;
const gcdAnserFunc = (gcdString) => {
  const [n1, n2] = gcdString.split(' ');
  const gcd = (p1, p2) => (p2 === 0 ? p1 : gcd(p2, p1 % p2));
  const [nMax, nMin] = [Math.max(n1, n2), Math.min(n1, n2)];
  return gcd(nMax, nMin);
};
const gcdGame = () => gameLoop(generateGCDString, gcdAnserFunc);

export default gcdGame;
