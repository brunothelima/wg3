<template>
  <div class="help">
    <i color="x" class="icon-question-mark" />
    <Tooltip direction="right"><slot /></Tooltip>
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Tooltip = defineAsyncComponent(
  () => import('@src/components/Tooltip.vue')
) 
</script>

<style scoped>
.help {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  margin-top: 1em;
  height: fit-content;
  cursor: help;
}
</style>