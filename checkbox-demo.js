import { checkbox, Separator } from '@inquirer/prompts';
// Or
// import checkbox, { Separator } from '@inquirer/checkbox';

const answer = await checkbox({
  message: 'Select a package manager',
  choices: [
    { name: 'pizza', value: 'npm' },
    { name: 'popcorn', value: 'yarn' },
    new Separator(),
    { name: 'pnpm', value: 'pnpm', disabled: true },
    {
      name: 'pizza',
      value: 'pnpm',
      disabled: '(pnpm is not available)',
    },
  ],
});