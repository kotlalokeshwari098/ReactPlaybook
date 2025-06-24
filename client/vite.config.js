import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
import process from 'process';

export default defineConfig({
   plugins: [react(),tailwindcss()],
  define: {
    'process.env': {},
  },
  optimizeDeps: {
    include: ['process'],
  },
})