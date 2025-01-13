// Bootstrap
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Routes
import routes from './route.js';

// v-md-editor
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
import 'katex/dist/katex.min.css'; 

VMdEditor.use(githubTheme);
VMdEditor.use(createKatexPlugin());

import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(BootstrapVue3).use(routes).use(VMdEditor).mount('#app');
