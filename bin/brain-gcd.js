#!/usr/bin/env node

import queryName from '../src/cli.js';
import gcdGame from '../games/gcd.js';
import { greeting, endGame } from '../src/index.js';

greeting();

const name = queryName();
console.log('Find the greatest common divisor of given numbers.');
const isWon = gcdGame();

endGame(isWon, name);
