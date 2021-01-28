<i18n>
{
  "pt": {
    "title": "Família de icones"
  },
  "en": {
    "title": "Icon family"
  }
}
</i18n>

<template>
  <section class="icons-demo">
    <h1>{{ t('title') }}</h1>
    <hr />
    <ul>
      <!-- {{icons}} -->
      <li v-for="icon of widgricon.icons" :key="icon">
        <i color="a" :class="`icon-${icon.properties?.name}`" />
        <span>{{ `.icon-${icon.properties?.name}` }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { useI18n } from '@src/composables'
import widgricon from '@src/assets/scss/icons/selection.json'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-a-1);
}
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  @media screen and (max-width: #{$mobile-brakepoint}) {
    grid-template-columns: repeat(2, 1fr);
  }
}
ul li {
  display: flex;
  align-items: center;
}
ul li i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  border-radius: 0.25em;
  background-color: var(--color-x-9);
}
ul li span {
  padding-left: 1em;
  font-size: var(--font-size-xs);
}
</style>
