// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

import pocketbase from 'astro-pocketbase';

import superforms from 'astro-superforms';

// https://astro.build/config                 
export default defineConfig({
  integrations: [svelte(), vue(), solidJs(), react(), pocketbase(), superforms()],

  vite: {
    plugins: [tailwindcss()]
  }
});