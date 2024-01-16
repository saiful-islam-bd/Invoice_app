
import './bootstrap';

import { createApp } from 'vue';

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
app.component('example-component', ExampleComponent);

import router from './router/index.js';


app.use(router).mount('#app')