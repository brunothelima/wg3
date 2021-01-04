<i18n>
{
  "pt": {
    "title": "Textos e fontes"
  },
  "en": {
    "title": "Texts and fonts"
  }
}
</i18n>

<template>
  <section class="text-demo">
    <h1>{{ t('title') }}</h1>
    <hr />
    <Headings />
    <hr />
    <Paragraph />
    <hr />
    <Labels />
  </section>
</template>

<script lang="ts">
import { useI18n } from '/@src/composables/useI18n'
import Headings from './Headings.vue'
import Paragraph from './Paragraph.vue'
import Labels from './Labels.vue'

export default {
  components: {
    Headings,
    Paragraph,
    Labels
  },
  setup() {
    return useI18n()
  }
}
</script>

<style lang="scss" scoped>
.text-demo > h1 {
  color: var(--color-a-1);
}
</style>
