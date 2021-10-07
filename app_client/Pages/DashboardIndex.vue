<script setup name="DashboardIndex">
import XAppLayout from "../Layouts/XAppLayout.vue";

export default {
  name: "DashboardIndex",
  components: {
    XAppLayout,
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
        title: "Dashboard",
      },
    };
  },
};
</script>

<template>
  <x-app-layout>
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">
        {{ __("Dashboard") }}
      </h2>
    </template>

    <div class="py-12">
      <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="overflow-hidden bg-white shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            You're logged in!
          </div>
        </div>
      </div>
    </div>
  </x-app-layout>
</template>
