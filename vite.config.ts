import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "https://Diego2Drm.github.io/interactive-card-details-form",
  plugins: [react()],
})
