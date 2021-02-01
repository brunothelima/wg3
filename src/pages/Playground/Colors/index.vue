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
      <component :is="Examples.Primary" />
      <component :is="Examples.Secondary" />
      <component :is="Examples.Grayish" />
    </div>
    <component :is="Examples.System" />
    <component :is="Examples.Gradient" />
  </section>
</template>

<script lang="ts" setup>
import { glob2Components } from '@src/utils'
import { useI18n } from '@src/composables'

const Examples = glob2Components(
  import.meta.globEager('./Examples/*.vue')
)

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
