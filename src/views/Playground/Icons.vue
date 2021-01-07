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
      <li v-for="icon of icons" :key="icon">
        <i color="a" :class="icon" />
        <span>.{{ icon }}</span>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { useI18n } from '@src/composables'
import { defineComponent } from 'vue'

export default defineComponent({
  data: () => ({
    icons: [
      'icon-accordion',
      'icon-anchor',
      'icon-asterisk',
      'icon-custom-form',
      'icon-template',
      'icon-earth-solid',
      'icon-earth',
      'icon-filter',
      'icon-grid-view-small',
      'icon-grid-view',
      'icon-grid-view-solid',
      'icon-icon',
      'icon-layout',
      'icon-small-list',
      'icon-trash-bin-small',
      'icon-thick-2px',
      'icon-avatar',
      'icon-button',
      'icon-calendar',
      'icon-caret-down',
      'icon-caret-left',
      'icon-caret-right',
      'icon-caret-up',
      'icon-arrow-down',
      'icon-arrow-left',
      'icon-arrow-right',
      'icon-arrow-up',
      'icon-checkmark',
      'icon-close-small',
      'icon-close',
      'icon-form',
      'icon-draggable-1',
      'icon-draggable-2',
      'icon-engine',
      'icon-exclamation-mark',
      'icon-eye-closed',
      'icon-eye',
      'icon-floppy-disk',
      'icon-focal-point',
      'icon-folder',
      'icon-folder-solid',
      'icon-form2',
      'icon-hamburger',
      'icon-heading',
      'icon-horizontal-dots',
      'icon-iframe',
      'icon-image',
      'icon-info',
      'icon-list-view-solid',
      'icon-list-view',
      'icon-magnifying-glass',
      'icon-moon',
      'icon-pencil',
      'icon-plus',
      'icon-plus-small',
      'icon-question-mark',
      'icon-quote',
      'icon-sign-out',
      'icon-sun',
      'icon-text',
      'icon-trash-bin',
      'icon-upload',
      'icon-vertical-dots',
      'icon-video',
      'icon-big-list',
      'icon-big-list-solid'
    ]
  }),
  setup() {
    return useI18n()
  }
})
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-a-1);
}
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  @media screen and (max-width: #{$tablet-brakepoint}) {
    grid-template-columns: repeat(1, 1fr);
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
