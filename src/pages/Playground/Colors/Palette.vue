<template>
  <ul class="color-palette">
    <li v-for="(color, index) in Array(range)" :key="color" :style="`background-color: var(${cssVar}-${index + 1})`">
      <code>{{ `${cssVar}-${index + 1}` }}</code>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps<{
  cssVar: string,
  range: number
}>()
</script>

<style scoped>
.color-palette {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-bottom: 2.857rem;
}
.color-palette li {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: var(--color-x-11);
}
</style>
