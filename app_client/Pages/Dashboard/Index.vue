<template>
  <PageLayout v-bind="page">
    <h1>Ok is this working now</h1>
    <div>
      {{ testProp }}
    </div>
    <InertiaLink href="/test-error" >Test error</InertiaLink>
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
    return {
        page: {
            title: 'Dashboard'
        }
    };
  },
};
</script>
