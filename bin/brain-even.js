#!/usr/bin/env node

import queryName from '../src/cli.js';
import evenGame from '../src/even.js';

console.log('Welcome to the Brain Games!');

const name = queryName();
const isWon = evenGame();
if (isWon) {
  console.log(`Congratulations, ${name}`);
} else {
  console.log(`Let's try again, ${name}`);
}
