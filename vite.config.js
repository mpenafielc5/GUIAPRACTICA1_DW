import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Usamos rutas relativas para que el build funcione correctamente
  // aunque GitHub Pages publique el proyecto dentro de una subcarpeta.
  // Es la misma estrategia usada en la landing React de TechLab.
  base: './'
})
