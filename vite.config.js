import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/maxdraw/', // Required for GitHub Pages
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
