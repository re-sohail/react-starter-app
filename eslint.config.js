// eslint.config.js
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  // Base ESLint recommended rules
  js.configs.recommended,

  // React configuration
  {
    files: ['src/**/*.{js,jsx}', '**/*.test.js'],
    ignores: ['node_modules/', 'build/', 'dist/', 'public/'],
    plugins: {
      react: reactPlugin,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2020,
        ...globals.jest,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false,
      },
    },
    settings: {
      react: {
        version: '18.2',
      },
    },
    rules: {
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/prop-types': 'off',
      'react-refresh/only-export-components': 'warn',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Test-specific configuration
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },

  // Prettier compatibility
  prettierConfig,
];
