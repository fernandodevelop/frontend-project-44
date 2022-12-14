#!/usr/bin/env node

import queryName from '../src/cli.js';
import gcdGame from '../games/gcd.js';
import { greeting, endGame } from '../src/index.js';

greeting();

const name = queryName();
const isWon = gcdGame();

endGame(isWon, name);
