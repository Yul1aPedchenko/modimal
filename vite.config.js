import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// заміни "modimal" на точну назву твого репозиторію
export default defineConfig({
  plugins: [react()],
  base: '/modimal/', 
})
