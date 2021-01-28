<template>
  <div class="glassy-buttons">
    <h6>Glassy</h6>
    <ButtonsList skin="glassy" size="small" />
    <ButtonsList skin="glassy" size="medium" />
    <ButtonsList skin="glassy" size="large" />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const ButtonsList = defineAsyncComponent(
  () => import('../List.vue')
)
</script>
