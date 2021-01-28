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
    <HeadingsExample />
    <hr />
    <ParagraphExample />
    <hr />
    <LabelsExample />
  </section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useI18n } from '@src/composables'

const HeadingsExample = defineAsyncComponent(
  () => import('./Examples/Headings.vue')
)
const ParagraphExample = defineAsyncComponent(
  () => import('./Examples/Paragraph.vue')
)
const LabelsExample = defineAsyncComponent(
  () => import('./Examples/Labels.vue')
) 

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.text-demo > h1 {
  color: var(--color-a-1);
}
</style>
