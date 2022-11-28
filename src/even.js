import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const n = Math.round(Math.random() * 100);
    console.log(`Question: ${n}`);
    const anser = readlineSync.question('Your answer: ');

    const correctAnswer = ['yes', 'no'][n % 2];

    if (correctAnswer === anser) {
      console.log('Correct!');
    } else {
      console.log(`${anser} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      return false;
    }
  }
  return true;
};

export default evenGame;
