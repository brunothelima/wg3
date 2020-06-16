<template>
  <button class="button:clean">
    <slot />
  </button>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.button\:clean {
  position: relative;
  padding: 0.8em 0.25em;
  background-color: transparent;
  border: none;
  color: var(--color-x-1);
  font-weight: 400;
}
.button\:clean::v-deep(i),
.button\:clean::v-deep(span) {
  color: inherit;
}
.button\:clean:not([disabled]):hover,
.button\:clean:not([disabled]).button--hover {
  color: var(--color-a-3);
}
.button\:clean:not([disabled]):active,
.button\:clean:not([disabled]).button--active {
  color: var(--color-x-6);
}
</style>
