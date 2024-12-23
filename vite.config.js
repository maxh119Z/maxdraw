import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // This must match the "outputDirectory" in vercel.json
  },
  base: '/<maxdraw>/'
})


