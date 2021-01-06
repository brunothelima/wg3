<i18n>
{
  "pt": {
    "title": "Tons de cinza"
  },
  "en": {
    "title": "Shades of gray"
  }
}
</i18n>

<template>
  <div class="grayish-colors">
    <h6>{{ t('title') }}</h6>
    <Palette class="grayish" :range="11" cssVar="--color-x" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '@src/composables/useI18n'
import Palette from './Palette.vue'

export default defineComponent({
  components: {
    Palette
  },
  setup() {
    return useI18n()
  }
})
</script>

<style scoped>
.grayish-colors::v-deep(li:nth-child(1n + 5)) {
  color: var(--color-x-1);
}
.grayish-colors::v-deep(li:nth-child(1n + 5)):last-child {
  border: 1px solid var(--color-x-1);
}
</style>
