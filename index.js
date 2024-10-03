import { input } from '@inquirer/prompts';

import { hello } from './hello.js';
hello();

const answer = await input({ message: 'Enter your name' });

console.log(`Hello ${answer}, you are welcome!`);