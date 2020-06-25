<template>
  <div data-test="input" :class="['input:text', { 'input:text--invalid': errors.length }]">
    <slot name="before" />
    <div class="input:text__wrapper">
      <input
        type="text"
        :name="name"
        :id="`${name}Id`"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="t(placeholder)"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    name: String,
    errors: Array,
    disabled: Boolean,
    readonly: Boolean,
    placeholder: String,
    value: [String, Number],
    t: { type: Function, default: path => path },
  }
})
</script>

<style scoped>
.input\:text {
  display: flex;
  margin-bottom: 0.5rem;
}
.input\:text__wrapper {
  flex: 1;
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: var(--color-x-11);
  color: var(--color-x-3);
  outline: none;
}
input::placeholder {
  color: var(--color-x-7);
}
input::focus {
  border-color: var(--color-x-4);
  box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
}
.input\:text--invalid input {
  border-color: var(--color-error);
}
.input\:text--invalid i {
  border-color: var(--color-error);
}
</style>
