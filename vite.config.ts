import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url'; // ✅ no 'node:' prefix
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      '@API': fileURLToPath(new URL('./src/services/API', import.meta.url)),
      "@services":  fileURLToPath(new URL('./src/services/', import.meta.url)),
      "@features":  fileURLToPath(new URL('./src/features/', import.meta.url)),
      "@contexts": fileURLToPath(new URL('./src/contexts/', import.meta.url)),
      "@components":fileURLToPath(new URL('./src/components/', import.meta.url)),
      "@models":fileURLToPath(new URL('./src/models/', import.meta.url)),

    },
  },
});
