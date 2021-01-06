<i18n>
{
  "pt": {
    "title": "Cores Secundárias"
  },
  "en": {
    "title": "Secondary colors"
  }
}
</i18n>

<template>
  <div class="secondary-colors">
    <h6>{{ t('title') }}</h6>
    <Palette class="secondary" :range="7" cssVar="--color-b" />
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

<style lang="scss" scoped>
.secondary-colors::v-deep(li:nth-child(1n + 4)) {
  color: var(--color-x-1);
}
</style>
