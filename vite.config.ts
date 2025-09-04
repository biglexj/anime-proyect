import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { fileURLToPath } from 'url'

// Recrear __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr()
  ],
  resolve: {
  alias: {
    '@components': path.resolve(__dirname, './src/components'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@modules': path.resolve(__dirname, './src/modules'),
    '@utils': path.resolve(__dirname, './src/utils'),
    '@lib': path.resolve(__dirname, './src/lib'),
    '@assets': path.resolve(__dirname, './src/assets'),
    '@hooks': path.resolve(__dirname, './src/hooks'),
    '@context': path.resolve(__dirname, './src/context'),
    '@services': path.resolve(__dirname, './src/services'),
   },
  },
  // Configuración del servidor para manejar SPA routing
  server: {
    // For SPA routing, use the following instead of middlewareMode
    fs: {
      strict: true,
    },
  },
  // Esto asegura un enrutamiento adecuado en la compilación de producción
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})