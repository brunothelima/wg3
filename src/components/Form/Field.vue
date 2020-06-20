<template>
  <div :class="['field', { 'field--disabled': input.disabled }]">
    <label class="field__label" :for="id" v-if="input.label">{{ t(input.label) }}</label>
    <slot />
    <div class="field__detail" v-if="input.detail">{{ input.detail }}</div>
    <ul class="field__errors" v-if="input.errors.length">
      <li v-for="message in input.errors" :key="message">{{ t(message) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: ['id', 'input', 't']
})
</script>

<style scoped>
.field {
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;
}
.field__label {
  margin: 0 0 0.5rem 1rem;
  font-size: calc(var(--font-size) - 2px);
  font-weight: 600;
}
.field__label:empty {
  display: none;
}
.field__errors {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 1em 0 0 1em;
  margin: 0.5em 0 0.5em 1em;
  border-bottom: var(--input-border-width) var(--input-border-style) var(--color-error);
  border-left: var(--input-border-width) var(--input-border-style) var(--color-error);
  border-bottom-left-radius: var(--input-border-radius);
  padding: 1em 2em;
}
.field__errors li {
  margin: 0.25em 0;
}
</style>
