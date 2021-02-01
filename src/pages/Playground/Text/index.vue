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
    <component :is="Examples.Headings" />
    <hr />
    <component :is="Examples.Paragraph" />
    <hr />
    <component :is="Examples.labels" />
  </section>
</template>

<script lang="ts" setup>
import { glob2Components } from '@src/utils'
import { useI18n } from '@src/composables'

const Examples = glob2Components(
  import.meta.glob('./Examples/*.vue')
)

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.text-demo > h1 {
  color: var(--color-a-1);
}
</style>
