import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@utils': '/src/utils',
      '@views': '/src/views',
      '@layouts': '/src/layouts',
      '@components': '/src/components',
      '@routes': '/src/routes',
      '@assets': '/src/assets',
    },
  },
})
