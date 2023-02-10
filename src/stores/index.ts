import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import type { App } from 'vue'

export const pinia = createPinia()

export function setupStore(app: App) {
  pinia.use(piniaPluginPersistedstate)

  app.use(pinia)
}

export * from './subscribe'
export * from './modules'
