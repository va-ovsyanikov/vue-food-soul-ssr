import './assets/main.css';
import { createSSRApp  } from 'vue';
import { createPinia } from 'pinia';
import App from '../src/App.vue';

export const  createApp = () => {

  const app = createSSRApp(App);

  const pinia = createPinia();

  app.use(pinia);

  return { app };

}
