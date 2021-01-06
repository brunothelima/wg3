<i18n>
{
  "en": {
    "colors": "Colors",    
    "buttons": "Buttons",    
    "icons": "Icons",    
    "text": "Text",    
    "dialogs": "Dialogs",    
    "images": "Images",    
    "tests": "Tests" 
  },
  "pt": {
    "colors": "Cores",    
    "buttons": "Botões",    
    "icons": "Ícones",    
    "text": "Texto",    
    "dialogs": "Alertas",    
    "inputs": "Formuláro",    
    "images": "Imagens", 
    "tests": "Testes" 
  }
}
</i18n>

<template>
  <nav>
    <header><Settings /></header>
    <ul>
      <li><router-link to="colors">{{ t('colors') }}</router-link></li>
      <li><router-link to="buttons">{{ t('buttons') }}</router-link></li>
      <li><router-link to="icons">{{ t('icons') }}</router-link></li>
      <li><router-link to="text">{{ t('text') }}</router-link></li>
      <li><router-link to="dialogs">{{ t('dialogs') }}</router-link></li>
      <li><router-link to="inputs">{{ t('inputs') }}</router-link></li>
      <li><router-link to="images">{{ t('images') }}</router-link></li>
      <li><router-link to="tests">{{ t('tests') }}</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Settings from '@src/components/Settings.vue'
import { useI18n } from '@src/composables/useI18n'

export default defineComponent({
  components: {
    Settings
  },
  setup() {
    return useI18n()
  }
})
</script>

<style scoped lang="scss">
nav {
  position: sticky;
  z-index: 2;
  top: 0;
  background: var(--color-x-11);
  border-bottom-right-radius: var(--input-border-radius);
  box-shadow: var(--box-shadow-light);
  border-right: var(--input-border-width) var(--input-border-style) var(--color-a-4);
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-a-4);
  @media screen and (max-width: #{$tablet-brakepoint}) {
    position: fixed;
  }
}
nav header {
  padding: 1em;
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-a-6);
}
nav header::v-deep(.input\:select__selected) {
  padding: 0.5em 48px 0.5em 1em;
}
nav header::v-deep(.input\:select__wrapper) {
  border-color: var(--color-a-4);
}
nav ul li {
  padding: 1em 2em;
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-a-6);
}
nav ul li a {
  display: inline-block;
  transition: color var(--transition-duration);
}
nav ul li a.router-link-exact-active {
  color: var(--color-x-1);
}
</style>
