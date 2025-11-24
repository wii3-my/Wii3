import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Prevent crash if other process.env props are accessed in browser
      'process.env': {}
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  };
});