import { ImportMetaEnv } from '/@/types/vite-env'
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export const setupVitePlugin = (env: ImportMetaEnv, isBuild: boolean): PluginOption[] => {
  const plugins: PluginOption[] = [vue(), vueJsx()]

  return plugins
}
