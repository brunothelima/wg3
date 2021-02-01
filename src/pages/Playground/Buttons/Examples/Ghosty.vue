<template>
  <div class="ghosty-buttons">
    <h6>Ghosty</h6>
    <ButtonsList skin="ghosty" size="small" />
    <ButtonsList skin="ghosty" size="medium" />
    <ButtonsList skin="ghosty" size="large" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const ButtonsList = defineAsyncComponent(
  () => import('../List.vue')
)
</script>
