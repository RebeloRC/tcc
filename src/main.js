import { createApp } from 'vue';
import App from './App.vue';
import VueApexCharts from 'vue3-apexcharts';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';
import './style.scss';

const app = createApp(App);
app.use(VueApexCharts);
app.use(router);
app.mount('#app');