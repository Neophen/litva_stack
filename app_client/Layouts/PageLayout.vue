<template>
  <div class="bg-gray-100 min-h-screen">
    <div class="bg-white px-4 py-2">
      <h1 class="text-4xl font-bold">{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script>
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
