import { gameLoop, generateNumber } from '../src/index.js';

// да, глобальные переменные это плохо, но кого это волнует в нубском учебном проекте ?^_^
let uknown = null;

// а еще говорят что комменты надо делать на английском,
// на что отвечу - кто не понимает по русски - гугл/яндекс транслейт в помощь!

const minTotal = 5;

const generateProgressionString = () => {
  const a0 = generateNumber();
  const total = minTotal + Math.round(Math.random() * minTotal);
  const arr = [a0];
  const d = generateNumber();
  // формируем массив прогрессии
  for (let i = 1; i < total; i += 1) {
    arr[i] = arr[i - 1] + d;
  }
  // определяем позицию элемента, которую будем спрашивать
  const position = Math.round(Math.random() * (minTotal - 1));
  // запоминаем ответ на вопрос
  uknown = arr[position];
  // и "маскируем" нужную позицию
  arr[position] = '...';
  return arr.join(' ');
};

const progressionAnserFunc = () => uknown;
const progressionGame = () => gameLoop(generateProgressionString, progressionAnserFunc);

export default progressionGame;
