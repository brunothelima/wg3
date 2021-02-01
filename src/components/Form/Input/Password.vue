<template>
  <div data-test="input" :class="['input:password', { 
    'input:password--invalid': errors?.length 
  }]">
    <input
      ref="inputRef"
      :name="name"
      :id="`${name}Id`"
      :value="value"
      :type="inputType"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, inputRef.value])"
    />
    <i
      data-test="icon"
      color="a"
      :class="`icon-eye${inputType === 'text' ? '-closed' : ''}`"
      @click="inputType = inputType === 'text' ? 'password' : 'text'"
    />
  </div>
</template>

<script lang="ts" setup>
import { inject, ref, defineProps } from "vue"
import { useI18n } from '@src/composables'

const props = defineProps<{
  name?: string,
  value?: string | number
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[]
}>()


const inputRef = ref()
const inputType = ref('password')

const { t } = inject('i18n', useI18n())
</script>

<style lang="scss" scoped>
.input\:password {
  display: flex;
  flex: 1;
  display: grid;
  grid-template-columns: auto 48px;
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
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
    }
  }
  i {
    padding: 0.25em;
    align-self: center;
    justify-self: center;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    cursor: pointer;
  }
  &--invalid {
    input {
      border-color: var(--color-error);
    }
    i {
      border-color: var(--color-error);
    }
  }
}
</style>
