import jsRules from '@eslint/js';
import tsRules from 'typescript-eslint';

export default [
  {
    name: 'app/opt-in-files',
    files: ['src/**/*.ts'],
  },
  jsRules.configs['recommended'],
  ...tsRules.configs['recommended'],
];
