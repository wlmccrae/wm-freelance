import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: match your CRA port
  },
  build: {
    outDir: 'build', // Optional: keep the output folder as 'build' to match CRA
  },
  test: {
    globals: true,        // Allows using 'describe' and 'it' without importing
    environment: 'jsdom', // Simulates a browser environment
},
});
