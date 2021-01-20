<i18n>
{
  "en": {
    "colors": "Colors",    
    "buttons": "Buttons",    
    "icons": "Icons",    
    "text": "Text",    
    "dialogs": "Dialogs",
    "form": "Form",    
    "editor": "Editor",    
    "images": "Images",    
    "tests": "Tests" 
  },
  "pt": {
    "colors": "Cores",    
    "buttons": "Botões",    
    "icons": "Ícones",    
    "text": "Texto",    
    "dialogs": "Alertas",    
    "form": "Formulário",    
    "editor": "Editor",
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
      <li><router-link to="form">{{ t('form') }}</router-link></li>
      <li><router-link to="editor">{{ t('editor') }}</router-link></li>
      <li><router-link to="images">{{ t('images') }}</router-link></li>
      <li><router-link to="tests">{{ t('tests') }}</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Settings from '@src/components/Settings.vue'
import { useI18n } from '@src/composables'

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
  overflow: visible;
  position: sticky;
  z-index: 2;
  top: 0;
  background: var(--color-x-11);
  border-bottom-right-radius: var(--input-border-radius);
  box-shadow: var(--box-shadow-light);
  border-right: var(--input-border-width) var(--input-border-style) var(--color-a-4);
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-a-4);
  transition: transform 200ms ease;
  @media screen and (max-width: #{$tablet-brakepoint}) {
    position: fixed;
    transform: translateX(-95%);
  }
  &:after {
    content: '';
    position: absolute;
    right: -40px; top: 0;
    height: 100%;
    width: 40px;
  }
  &:hover {
    transform: translateX(0);
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
