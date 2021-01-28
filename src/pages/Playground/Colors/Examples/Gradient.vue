<template>
  <div class="gradient">
    <h6>Gradient</h6>
    <div>
      <code>linear-gradient(to right, var(--color-a-3), var(--color-b-3));</code>
    </div>
  </div>
</template>

<style scoped>
.gradient > div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0.25em 1em;
  background-image: linear-gradient(to right, var(--color-a-3), var(--color-b-3));
  color: var(--color-x-11);
}
</style>
