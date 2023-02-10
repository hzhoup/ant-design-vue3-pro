import autoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import iconsResolver from 'unplugin-icons/resolver'
import icons from 'unplugin-icons/vite'
import components from 'unplugin-vue-components/vite'
import type { PluginOption } from 'vite'

export const setupUnplugin = () => {
  const plugins: PluginOption[] = []

  plugins.push(
    components({
      resolvers: [
        iconsResolver({ prefix: 'icon', alias: { park: 'icon-park-outline' }, customCollections: ['custom'] })
      ],
      dirs: ['src/components'],
      extensions: ['vue', 'tsx'],
      dts: 'src/types/components.d.ts'
    })
  )

  plugins.push(
    autoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vitest'],
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      dts: 'src/types/auto-import.d.ts'
    })
  )

  plugins.push(
    icons({
      autoInstall: true,
      jsx: 'react',
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader('src/assets/svg', svg => svg.replace(/^<svg/, '<svg fill="currentColor"'))
      }
    })
  )

  return plugins
}
