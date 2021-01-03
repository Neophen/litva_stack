<template>
  <PageLayout>
    <h1>{{ title }}</h1>
    <div>{{ description }}</div>
  </PageLayout>
</template>

<script>
import { computed } from "vue";

import PageLayout from "../../Layouts/PageLayout";

export default {
  name: "ServerError",
  components: {
    PageLayout,
  },
  props: {
    status: Number,
  },
  setup() {
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

    return {
      title: computed(() => TITLES[props.status] || props.status),
      description: computed(() => DESCRIPTIONS[props.status] || props.status),
    };
  },
};
</script>
