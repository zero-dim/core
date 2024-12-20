import path from 'node:path'

import { definePkgConfig } from '@al-config/vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  return definePkgConfig({
    name: 'ZeroDimDesigner',
    defaultFormats: ['es'],
    options: {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
        },
      },
      css: {
        postcss: {
          plugins: [
            tailwindcss,
            autoprefixer,
          ],
        },
      },
      plugins: [vue()],
    },
  })
})
