import { ImportMetaEnv } from '@/types/vite-env'
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'

export const setupVitePlugin = (env: ImportMetaEnv, isBuild: boolean): PluginOption[] => {
    const plugins: PluginOption[] = []

    plugins.push(vue())

    return plugins
}