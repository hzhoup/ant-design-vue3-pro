import App from '/@/App.vue'
import LoadingApp from '/@/LoadApp.vue'
import 'uno.css'
import { createApp } from 'vue'

async function bootstrap() {
  const loadApp = createApp(LoadingApp)

  loadApp.mount('#load-app')

  const app = createApp(App)

  setTimeout(() => {
    app.mount('#app')
  }, 1000000)
}

await bootstrap()
