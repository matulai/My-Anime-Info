import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://matulai.github.io/My-Anime-Info/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  }
})
