// Bootstrap
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Routes
import routes from './route.js';

// v-md-editor
import VMdEditor from './vmeditor'

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(BootstrapVue3).use(routes).use(VMdEditor).mount('#app');
