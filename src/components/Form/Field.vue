<template>
  <div data-test="field" class="field">
    <label data-test="label" class="field__label" :for="id" v-if="input.label">{{
      t(input.label)
    }}</label>
    <slot />
    <div data-test="detail" class="field__detail" v-if="input.detail">{{ (t && t(input.detail)) || input.detail }}</div>
    <ul data-test="errors" class="field__errors" v-if="input.errors && input.errors.length">
      <li v-for="message in input.errors" :key="message">{{ t(message) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: String,
    input: Object,
    t: { type: Function, default: path => path }
  }
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
