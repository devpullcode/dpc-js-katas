// eslint.config.js
import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/coverage/**',
  ]),

  // JS
  {
    name: 'js',
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.node },
    },
    ...js.configs.recommended,
    rules: {
      'no-console': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': 'error',
      'no-unused-vars': 'warn',
      'no-implicit-coercion': 'error',
    },
  },

  // TS (type-aware)
  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      ...config.languageOptions,
      parserOptions: {
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  })),

  // (Opcional, pero muy útil) Jest globals en tests
  {
    name: 'tests',
    files: ['**/*.test.{js,ts}', '**/__tests__/**/*.{js,ts}'],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },

  // Prettier al final
  prettier,
]);
