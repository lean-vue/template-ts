import jsRules from '@eslint/js';

export default [
  {
    name: 'app/opt-in-files',
    files: ['src/**/*.ts'],
  },
  jsRules.configs['recommended'],
];
