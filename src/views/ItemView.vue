<script setup lang="ts">
// Defines the properties accepted by this component.
const props = defineProps({
  /**
   * The ID of the item to display.
   * This is expected to be passed as a route parameter and converted to a Number.
   */
  id: {
    type: Number,
    required: true, // It's good practice to mark required props.
  },
});

// Log the item ID to the console for debugging purposes during development.
console.log({ id: props.id });
</script>

<template>
  <!-- Displays the item ID. In a real application, this would fetch and display item details. -->
  <h1>Item # {{ id }}</h1>
</template>
