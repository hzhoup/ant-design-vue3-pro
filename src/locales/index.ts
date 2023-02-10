import { useAppStoreWithOut } from '/@/stores'
import { App } from 'vue'
import { createI18n, I18nOptions } from 'vue-i18n'

export let i18n: ReturnType<typeof createI18n>

async function createI18nOptions(): Promise<I18nOptions> {
  const app = useAppStoreWithOut()
  const messages: Record<string, any> = {}
  const modules = await import.meta.glob('./lang/**.ts', { eager: true })
  for (const [key, value] of Object.entries(modules)) {
    const moduleName = key.replace(/^\.\/(.*)\.\w+$/, '$1')
    const name = moduleName.split('/')[1]
    messages[name] = (value as any).default
  }

  return {
    legacy: false,
    locale: app.locale,
    fallbackLocale: 'zh',
    messages
  }
}

export async function setupI18n(app: App) {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
