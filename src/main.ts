import App from '/@/App.vue'
import LoadingApp from '/@/LoadApp.vue'
import { setupI18n } from '/@/locales'
import { setupRouter } from '/@/router'
import { setupStore } from '/@/stores'
import { setupAssets } from '/@/styles'
import { createApp } from 'vue'

async function bootstrap() {
  setupAssets()

  const loadApp = createApp(LoadingApp)

  loadApp.mount('#load-app')

  const app = createApp(App)

  await setupI18n(app)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

await bootstrap()
