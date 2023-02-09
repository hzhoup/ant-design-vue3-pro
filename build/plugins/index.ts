import { setupMock } from '/#/plugins/mock'
import { setupUnoCss } from '/#/plugins/unoCss'
import { setupUnplugin } from '/#/plugins/unplugin'
import { ImportMetaEnv } from '/@/types/vite-env'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { PluginOption } from 'vite'

export const setupVitePlugin = (env: ImportMetaEnv, isBuild: boolean): PluginOption[] => {
  const plugins: PluginOption[] = [vue(), vueJsx()]

  plugins.push(setupUnplugin())

  plugins.push(setupUnoCss())

  plugins.push(setupMock(isBuild))

  return plugins
}
