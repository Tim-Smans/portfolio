import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // General rules
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'eqeqeq': 'error',

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React-specific rules
      'react/jsx-key': 'error',
      'react/jsx-indent': ['error', 2],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': [1, { 'extensions': ['.ts', '.tsx'] }],
      'func-style': ['error', 'expression', { 'allowArrowFunctions': true }],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];