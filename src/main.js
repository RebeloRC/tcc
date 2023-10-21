import { createApp } from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue3-apexcharts';
import router from './router';
import './style.scss';

const app = createApp(App);
app.use(VueApexCharts);
app.use(router);
app.mount('#app');