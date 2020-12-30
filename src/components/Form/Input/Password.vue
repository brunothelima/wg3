<template>
  <div data-test="input" :class="['input:text', { 'input:password--invalid': errors && errors.length }]">
    <slot name="before" />
    <div class="input:text__wrapper">
      <input
        class="input-text"
        :type="type"
        :name="name"
        :id="`${name}Id`"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="t(placeholder)"
      />
      <i
        data-test="icon"
        color="a"
        :class="`icon-eye${type === 'text' ? '-closed' : ''}`"
        @click="type = type === 'text' ? 'password' : 'text'"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useI18n } from "/@composables/useI18n"
import { FormInputText } from "/@types/form"

export default defineComponent({
  props: ['name', 'errors', 'disabled', 'readonly', 'placeholder', 'value', 'messages'],
  setup(props: FormInputText) {
    const type = ref('password')
    const { t } = useI18n(props.messages)
    
    return {
      t,
      type
    }
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
  display: grid;
  grid-template-columns: auto 48px;
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
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
i {
  padding: 0.25em;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  cursor: pointer;
}
input::placeholder {
  color: var(--color-x-7);
}
input:focus {
  border-color: var(--color-x-4);
  box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
}
.input\:password--invalid input {
  border-color: var(--color-error);
}
.input\:password--invalid i {
  border-color: var(--color-error);
}
</style>
