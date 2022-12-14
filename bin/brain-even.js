#!/usr/bin/env node

import queryName from '../src/cli.js';
import evenGame from '../games/even.js';
import { greeting, endGame } from '../src/index.js';

greeting();

const name = queryName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const isWon = evenGame();

endGame(isWon, name);
