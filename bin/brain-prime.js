#!/usr/bin/env node

import queryName from '../src/cli.js';
import game from '../games/prime.js';
import { greeting, endGame } from '../src/index.js';

greeting();

const name = queryName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const isWon = game();

endGame(isWon, name);
