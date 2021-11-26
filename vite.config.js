import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  define: {
    'process.env': {
      API_BASE_URL: "http://localhost:5000"
    }
  }
})
