import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'fix-media-queries',
      generateBundle(_, bundle) {
        for (const file of Object.values(bundle)) {
          if (file.type === 'asset' && file.fileName.endsWith('.css')) {
            file.source = file.source
              .replace(/\(width<=([^)]+)\)/g, '(max-width: $1)')
              .replace(/\(width>=([^)]+)\)/g, '(min-width: $1)')
          }
        }
      }
    }
  ],
})