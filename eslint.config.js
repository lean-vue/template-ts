import jsRules from '@eslint/js';
import tsRules from 'typescript-eslint';
import vueRules from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';

export default [
  {
    name: 'app/opt-in-files',
    files: ['src/**/*.{ts,vue}'],
  },
  jsRules.configs['recommended'],
  ...tsRules.configs['recommended'],
  ...vueRules.configs['flat/recommended'],
  {
    files: ['src/**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  },
  prettier,
];
