import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jesus-na-web-react/', // ⚠️ MUDE para o nome do seu repositório
  plugins: [react()],
})