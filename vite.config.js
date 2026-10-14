import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // El repositorio grupal se publica como proyecto de GitHub Pages.
  // Esta base permite que los assets compilados carguen desde /GUIAPRACTICA1_DW/.
  base: '/GUIAPRACTICA1_DW/'
})
