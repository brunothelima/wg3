<template>
  <div class="settings">
    <Select
      name="theme"
      :value="theme"
      @input="theme = $event.target.value"
      :options="[
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' }
      ]"
    />
    <Select
      name="locale"
      :value="locale"
      @input="locale = $event.target.value"
      :options="[
        { value: 'en', label: 'EN' },
        { value: 'pt', label: 'PT' }
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useI18n, useTheme } from '@src/composables'

const Select = defineAsyncComponent(
  () => import('@src/components/Form/Input/Select.vue')
)

const { locale } = useI18n()
const { theme } = useTheme()
</script>

<style scoped>
.settings {
  display: flex;
  margin-left: -1em;
}
.input\:select {
  margin-left: 1em;
  margin-bottom: 0;
}
</style>