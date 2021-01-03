<template>
  <PageLayout>
    <h1>This is a basic page layout</h1>
    <div>
      {{ testProp }}
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from "../../Layouts/PageLayout.vue";

export default {
  name: "DashboardIndex",
  components: {
    PageLayout,
  },
  props: {
    testProp: {
      type: String,
      default: "",
    },
  },
  setup() {
    return {};
  },
};
</script>
