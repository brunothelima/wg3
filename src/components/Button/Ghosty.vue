<template>
  <button class="button:ghosty">
    <slot />
  </button>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.button\:ghosty {
  position: relative;
  padding: 0.8em 0.25em;
  background-color: transparent;
  border: none;
  color: var(--color-x-1);
  font-weight: 400;
}
.button\:ghosty::v-deep(i),
.button\:ghosty::v-deep(span) {
  color: inherit;
}
.button\:ghosty:not([disabled]):hover,
.button\:ghosty:not([disabled]).button--hover {
  color: var(--color-a-3);
}
.button\:ghosty:not([disabled]):active,
.button\:ghosty:not([disabled]).button--active {
  color: var(--color-x-6);
}
</style>
