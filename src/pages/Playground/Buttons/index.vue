<i18n>
  {
    "pt": {
      "title": "Botões",
      "default": "Botão Normal",
      "disabled": "Desabilitado",
      "small": "Botão Pequeno",
      "large": "Botão Grande"
    },
    "en": {
      "title": "Buttons",
      "default": "Normal Button",
      "disabled": "Disabled",
      "small": "Small Button",
      "large": "Large Button"
    }
  }
</i18n>

<template>
  <section class="buttons-demo">
    <h1>{{ t('title') }}</h1>
    <hr />
    <div class="text"></div>
    <GlassyButtons />
    <GhostyButtons />
  </section>
</template>

<script lang="ts">
import { useI18n } from '/@src/composables/useI18n'
import GhostyButtons from './GhostyButtons.vue'
import GlassyButtons from './GlassyButtons.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    GlassyButtons,
    GhostyButtons
  },
  setup() {
    return useI18n()
  }
})
</script>

<style scoped>
h1 {
  color: var(--color-a-1);
}
.buttons-demo > div {
  margin-bottom: 4em;
}

.buttons-demo::v-deep([class*='-buttons-list']) {
  margin-bottom: 2em;
}
.buttons-demo::v-deep(pre) {
  display: block;
  padding: 1em;
  line-height: 1.5em;
  margin-bottom: 2em;
  border-radius: 0.25em;
  border: 1px solid var(--color-a-1);
  background-color: var(--color-x-9);
  color: var(--color-x-3);
}
.buttons-demo::v-deep(.button) {
  margin-right: 1em;
  margin: 0.5em 1em 0.5em 0;
}
</style>
