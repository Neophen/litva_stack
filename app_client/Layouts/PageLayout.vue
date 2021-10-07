<script setup name="PageLayout">
export default {
  name: "PageLayout",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="px-4 py-2 bg-white">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>
