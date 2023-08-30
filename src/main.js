import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './views/LoginPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginPage },
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
