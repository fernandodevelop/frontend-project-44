#!/usr/bin/env node

import queryName from '../src/cli.js';
import progressionGame from '../games/progression.js';
import { greeting, endGame } from '../src/index.js';

greeting();

const name = queryName();
console.log('What number is missing in the progression?');
const isWon = progressionGame();

endGame(isWon, name);
