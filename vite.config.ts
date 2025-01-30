import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hernan-clases/', // Ruta base correcta para GitHub Pages
  plugins: [react()],
  server: {
    open: true, // Abre el navegador automáticamente
    port: 5173, // Asegúrate de que el puerto sea correcto
  },
});