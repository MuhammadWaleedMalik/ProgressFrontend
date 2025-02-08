import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this matches your deployment path (e.g., '/' for root)
  build: {
    outDir: 'dist', // Ensure the build output directory is correct
    sourcemap: true, // Enable source maps for debugging
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Exclude problematic dependencies if needed
  },
});
