<template>
  <body class="font-sans antialiased">
    <div class="min-h-screen bg-gray-100">
      <x-navigation />

      <!-- Page Heading -->
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <slot name="header" />
        </div>
      </header>

      <!-- Page Content -->
      <main>
        <slot />
      </main>
    </div>
  </body>
</template>

<script>
import XNavigation from "../Apex/Application/XNavigation.vue";

export default {
  name: "XAppLayout",
  components: {
    XNavigation,
  },
};
</script>
