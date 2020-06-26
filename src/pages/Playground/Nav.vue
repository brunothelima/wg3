<template>
  <nav>
    <header><Settings /></header>
    <ul>
      <li><router-link to="colors">Colors</router-link></li>
      <li><router-link to="buttons">Buttons</router-link></li>
      <li><router-link to="icons">Icons</router-link></li>
      <li><router-link to="text">Text</router-link></li>
      <li><router-link to="dialogs">Dialogs</router-link></li>
      <li><router-link to="inputs">Inputs</router-link></li>
      <li><router-link to="/tests">Tests</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Settings from '/@components/Settings.vue'

export default defineComponent({
  components: {
    Settings
  }
})
</script>

<style scoped lang="scss">
@import '../../assets/scss/vars';
nav {
  position: sticky;
  z-index: 2;
  top: 0;
  background: var(--color-x-11);
  border-bottom-right-radius: var(--input-border-radius);
  box-shadow: var(--box-shadow-light);
  border-right: var(--input-border-width) var(--input-border-style) var(--color-a-1);
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-a-1);
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
  border-color: var(--color-a-1);
}
nav ul li {
  padding: 1em 2em;
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-a-6);
}
nav ul li a {
  display: inline-block;
  transition: var(--transition-duration);
}
nav ul li a.router-link-exact-active {
  color: var(--color-x-1);
  transform: translateX(0.5em);
}
</style>
