const tseslint = require('typescript-eslint');
const eslintConfigPrettier = require('eslint-config-prettier');

module.exports = tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.ts'],
    extends: [tseslint.configs.recommended],
    rules: {
      // The client factory (lib/client/index.ts) binds resource methods at
      // runtime; the resource layer casts around that with `any` on purpose
      // (see CLAUDE.md's OmitFirstArg note) since TS can't type-check it.
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  eslintConfigPrettier,
);
