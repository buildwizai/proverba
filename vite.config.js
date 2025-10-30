import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'assets',
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
  },
});
