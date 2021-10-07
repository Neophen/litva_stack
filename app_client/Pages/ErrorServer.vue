<script setup name="ErrorServer">
import { computed } from "vue";

import PageLayout from "../Layouts/PageLayout.vue";

const props = defineProps({
  status: {
    type: Number,
    default: 500,
  },
});

const TITLES = {
  503: "503: Service Unavailable",
  500: "500: Server Error",
  404: "404: Page Not Found",
  403: "403: Forbidden",
};
const DESCRIPTIONS = {
  503: "Sorry, we are doing some maintenance. Please check back soon.",
  500: "Whoops, something went wrong on our servers.",
  404: "Sorry, the page you are looking for could not be found.",
  403: "Sorry, you are forbidden from accessing this page.",
};

const title = computed(() => TITLES[props.status] || props.status);
const description = computed(() => DESCRIPTIONS[props.status] || props.status);
</script>

<template>
  <PageLayout>
    <h1>{{ title }}</h1>
    <div>{{ description }}</div>
  </PageLayout>
</template>
