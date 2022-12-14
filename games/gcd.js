import { gameLoop, generateNumber } from '../src/index.js';

const generateGCDString = () => `${generateNumber()} ${generateNumber()}`;
const gcdAnswerFunc = (gcdString) => {
  // Мы приняли на вход два числа разделенных пробелом
  // Формально следующая строка не верна тк в результате получаем два числа в виде строки.
  // Но кого это волнует в языке с динамической типизацией ? Работает ведь.
  const [n1, n2] = gcdString.split(' ');
  // функция - непосредственного вычисления НОД
  const gcd = (p1, p2) => (p2 === 0 ? p1 : gcd(p2, p1 % p2));
  // в первом параметре передается наибольшее, во втором - наименьшее из двух чисел
  const [nMax, nMin] = [Math.max(n1, n2), Math.min(n1, n2)];
  return gcd(nMax, nMin);
};
const gcdGame = () => gameLoop(generateGCDString, gcdAnswerFunc);

export default gcdGame;
