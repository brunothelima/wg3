<template>
  <button class="button:glassy">
    <slot />
  </button>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.button\:glassy {
  position: relative;
  background-color: var(--color-x-11);
  border: 1px solid var(--color-a-1);
  color: var(--color-a-1);
  font-weight: 600;
}
.button\:glassy:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--color-a-7);
}
.button\:glassy::v-deep(i),
.button\:glassy::v-deep(span) {
  position: relative;
  z-index: 1;
  color: inherit;
  white-space: nowrap;
}
.button\:glassy:not([disabled]):hover,
.button\:glassy:not([disabled]).button--hover {
  color: var(--color-x-11);
}
.button\:glassy:not([disabled]):hover:before,
.button\:glassy:not([disabled]).button--hover:before {
  background-color: var(--color-a-3);
}
.button\:glassy:not([disabled]):active,
.button\:glassy:not([disabled]).button--active {
  color: var(--color-x-11);
}
.button\:glassy:not([disabled]):active:before,
.button\:glassy:not([disabled]).button--active:before {
  background-color: var(--color-a-1);
}
</style>
