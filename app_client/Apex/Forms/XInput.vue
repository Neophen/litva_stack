<template>
  <input
    :disabled="disabled"
    class="rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "XInput",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
