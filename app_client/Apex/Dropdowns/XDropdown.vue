<template>
  <div
    class="relative"
    v-click-outside="open = false"
    @close.stop="open = false"
  >
    <div @click="open = !open">
      <slot name="trigger" />
    </div>

    <div
      v-show="open"
      transition-enter="transition ease-out duration-200"
      transition-enter-start="transform opacity-0 scale-95"
      transition-enter-end="transform opacity-100 scale-100"
      transition-leave="transition ease-in duration-75"
      transition-leave-start="transform opacity-100 scale-100"
      transition-leave-end="transform opacity-0 scale-95"
      class="absolute z-50 mt-2 rounded-md shadow-lg"
      :class="boxClasses"
      style="display: none"
      @click="open = false"
    >
      <div
        class="rounded-md ring-1 ring-black ring-opacity-5"
        :class="contentClasses"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  name: "XDropdown",
  props: {
    align: {
      type: String,
      default: "right",
    },
    contentClasses: {
      type: String,
      default: "py-1 bg-white",
    },
    width: {
      type: String,
      default: "w-48",
    },
  },
  setup(props) {
    return {
      open: ref(false),
      alignmentClasses: computed(() => {
        const map = {
          left: "origin-top-left left-0",
          top: "origin-top",
          right: "origin-top-right right-0",
        };
        return map[props.align] || "";
      }),
      boxClasses: computed(() => {
        return `${props.width} ${alignmentClasses.value}`;
      }),
    };
  },
};
</script>
