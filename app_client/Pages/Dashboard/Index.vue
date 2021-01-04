<template>
  <x-app-layout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __("Dashboard") }}
      </h2>
    </template>

    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            You're logged in!
          </div>
        </div>
      </div>
    </div>
  </x-app-layout>
</template>

<script>
import XAppLayout from "../../Layouts/XAppLayout.vue";

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
