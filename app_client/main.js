
import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'

import StaticLayout  from "./Layouts/StaticLayout.vue";

// Can we abstract this somehow
// window.axios = require('axios');
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const el = document.getElementById('app')

createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    // resolveComponent: name => require(`./Pages/${name}`).default,
    // resolveComponent: name => import(`./Pages/${name}`).then(module => module.default),
    resolveComponent: name => import(`./Pages/${name}.vue`).then(({ default: page }) => {
        page.layout = page.layout === undefined ? StaticLayout : page.layout;
        return page;
    }),
  })
}).use(plugin).mount(el);
