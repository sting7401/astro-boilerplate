import { defineConfig } from "eslint/config";
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from "globals";
import js from "@eslint/js";
import pluginJs from '@eslint/js';
import pluginReact from "eslint-plugin-react";
import prettier from 'eslint-config-prettier';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import svelte from 'eslint-plugin-svelte';
import tsParser from '@typescript-eslint/parser';
import tseslint from "typescript-eslint";

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro,svelte}'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro,svelte}'], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx,astro,svelte}'], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  eslintPluginAstro.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...svelte.configs['flat/recommended'],
  pluginJs.configs.recommended,
  {
      languageOptions: {
          globals: {
              ...globals.browser,
              ...globals.node,
          },
          parser: tsParser,
      },
  },
  {
      languageOptions: {
          parserOptions: {
              parser: '@typescript-eslint/parser',
          },
          globals: { ...globals.browser },
      },
  },
  {
      ignores: ['build/', '.svelte-kit/', 'dist/', 'node_modules/*', 'examples', 'lib'],
  },
  prettier,
  prettierPluginRecommended,
]);

