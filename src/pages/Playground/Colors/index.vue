<i18n>
{
  "pt": {
     "title": "Palheta de cores"
  },
  "en": {
    "title": "Color palette"
  }
}
</i18n>

<template>
  <section class="colors-demo">
    <h1>{{ t('title') }}</h1>
    <hr />
    <div class="css-vars">
      <PrimaryExample />
      <SecondaryExample />
      <GrayishExample />
    </div>
    <SystemExample />
    <GradientExample />
  </section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useI18n } from '@src/composables'

const PrimaryExample = defineAsyncComponent(() => import('./Examples/Primary.vue')) 
const SecondaryExample = defineAsyncComponent(() => import('./Examples/Secondary.vue')) 
const GrayishExample = defineAsyncComponent(() => import('./Examples/Grayish.vue')) 
const SystemExample = defineAsyncComponent(() => import('./Examples/System.vue')) 
const GradientExample = defineAsyncComponent(() => import('./Examples/Gradient.vue')) 

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.colors-demo > h1 {
  color: var(--color-a-1);
}
.css-vars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.143em;
  margin-bottom: 1.143em;
  @media screen and (max-width: #{$mobile-brakepoint}) {
    grid-template-columns: 1fr;
  }
}
.system-colors {
  margin-bottom: 4.571em;
}
</style>
