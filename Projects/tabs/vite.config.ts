import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Встановлюємо звичний порт 3000
    open: true, // Автоматично відкривати браузер при запуску
  },
  build: {
    outDir: 'dist', // Стандартна папка для білду у Vite (замість build)
    sourcemap: true, // Корисно для дебагу в продакшені
  },
  // Якщо ви деплоїте у підпапку (наприклад, github.io/repo/tabs/), 
  // тут потрібно вказати base: '/tabs/'
  base: '/Projects/tabs/', 
});