#!/usr/bin/env node

import queryName from '../src/cli.js';
import calcGame from '../games/calc.js';
import { greeting, endGame } from '../src/index.js';

greeting();

const name = queryName();
console.log('What is the result of the expression?');
const isWon = calcGame();

endGame(isWon, name);
