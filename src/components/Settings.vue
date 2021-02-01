<template>
  <div class="settings">
    <Select
      name="theme"
      :value="theme"
      @input="theme = inputRef?.value"
      :options="[
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' }
      ]"
    />
    <Select
      name="locale"
      :value="locale"
      @input="locale = inputRef?.value"
      :options="[
        { value: 'en', label: 'EN' },
        { value: 'pt', label: 'PT' }
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineAsyncComponent } from 'vue'
import { useI18n, useTheme } from '@src/composables'

const Select = defineAsyncComponent(
  () => import('@src/components/Form/Input/Select.vue')
)

const inputRef = ref()

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