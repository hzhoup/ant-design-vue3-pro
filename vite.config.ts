import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const root = process.cwd()

const resolvePath = (...paths: string[]) => resolve(__dirname, ...paths)

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolvePath('src'),
      '#': resolvePath('build')
    }
  }
})