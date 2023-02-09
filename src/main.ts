import App from '/@/App.vue'
import LoadingApp from '/@/LoadApp.vue'
import { setupRouter } from '/@/router'
import 'uno.css'
import { createApp } from 'vue'

async function bootstrap() {
  const loadApp = createApp(LoadingApp)

  loadApp.mount('#load-app')

  const app = createApp(App)

  await setupRouter(app)

  app.mount('#app')
}

await bootstrap()
