import { createApp, h } from "vue";
import { App, plugin } from "@inertiajs/inertia-vue3";
import "./index.css";

import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el);
  },
});

import StaticLayout from "./Layouts/StaticLayout.vue";

const el = document.getElementById("app");

const setDefaultLayout = ({ default: page }) => {
  page.layout = page.layout === undefined ? StaticLayout : page.layout;
  return page;
};

const app = createApp({
  render: () =>
    h(App, {
      initialPage: JSON.parse(el.dataset.page),
      resolveComponent: (path) => {
        // To make dynamic imports work we need you to always use 'Folder/Component' paths
        const [folder, name] = path.split("/");
        return import(`./Pages/${folder}/${name}.vue`).then(setDefaultLayout);
      },
    }),
});

app.config.globalProperties.__ = (key) => key;

app.directive("click-outside", {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

app.use(plugin);
app.mount(el);
