import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');
const endGame = (isWon, name) => {
  if (isWon) {
    console.log(`Congratulations, ${name}`);
  } else {
    console.log(`Let's try again, ${name}`);
  }
};

const gameLoop = (generateFunc, anserFunc) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const question = generateFunc();
    console.log(`Question: ${question}`);
    const anser = readlineSync.question('Your answer: ');

    const correctAnswer = anserFunc(question);

    if (correctAnswer.toString() === anser.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${anser} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return false;
    }
  }
  return true;
};

const generateNumber = () => Math.round(Math.random() * 10);
// eslint-disable-next-line import/prefer-default-export
export {
  greeting, endGame, gameLoop, generateNumber,
};
