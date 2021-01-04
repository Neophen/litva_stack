<template>
  <div v-if="status" class="font-medium text-sm text-green-600">
    <slot>
      {{ status }}
    </slot>
  </div>
</template>

<script>
export default {
  name: "XAuthSessionStatus",
  props: {
    status: {
      type: String,
      default: "",
    },
  },
};
</script>
