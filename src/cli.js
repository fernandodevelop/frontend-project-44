import readlineSync from 'readline-sync';

const queryName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export default queryName;
