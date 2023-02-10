import App from '/@/App.vue'
import LoadingApp from '/@/LoadApp.vue'
import { setupRouter } from '/@/router'
import { setupStore } from '/@/stores'
import 'uno.css'
import { createApp } from 'vue'

async function bootstrap() {
  const loadApp = createApp(LoadingApp)

  loadApp.mount('#load-app')

  const app = createApp(App)

  setupStore(app)

  await setupRouter(app)

  app.mount('#app')
}

await bootstrap()
