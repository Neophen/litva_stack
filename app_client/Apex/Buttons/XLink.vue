<template>
  <InertiaLink v-bind="$attrs">
    <slot />
  </InertiaLink>
</template>

<script>
export default {
  name: "XLink",
};
</script>
