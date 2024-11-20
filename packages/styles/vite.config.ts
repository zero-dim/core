import { definePkgConfig } from '@al-config/vite'
import { defineConfig } from 'vite'

export default defineConfig(async () => {
  return definePkgConfig({
    name: 'ZeroDimStyles',
    defaultFormats: ['es', 'cjs'],
  })
})
