/// <reference types="vitest" />
import { setupVitePlugin } from '/#/plugins'
import { wrapperEnv } from '/#/utils/helpers'
import { createProxy } from '/#/utils/proxy'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'

const root = process.cwd()

const resolvePath = (...paths: string[]) => resolve(__dirname, ...paths)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'

  const env = loadEnv(mode, root, ['VITE_', 'APP_'])
  const viteEnv = wrapperEnv(env)

  return {
    root,
    base: viteEnv.VITE_BASE,
    envPrefix: ['VITE_', 'APP_'],
    plugins: setupVitePlugin(viteEnv, isBuild),
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        '/@': resolvePath('src'),
        '/#': resolvePath('build')
      }
    },
    server: {
      host: true,
      port: viteEnv.VITE_PORT,
      cors: true,
      proxy: createProxy(viteEnv.VITE_PROXY)
    },
    esbuild: {
      pure: isBuild ? ['console.log', 'debugger'] : []
    },
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      chunkSizeWarningLimit: 2048
    },
    test: {
      globals: true,
      environment: 'jsdom',
      transformMode: {
        web: [/.[tj]sx$/]
      }
    }
  }
})
