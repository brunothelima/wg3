<template>
  <div
    data-test="input"
    :class="['input:text-magic', { 'input:text-magic--invalid': errors?.length }]"
  >
    <input
      type="text"
      :name="name"
      :id="`${name}Id`"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, inputRef.value])"
    />
  </div>
</template>


<script lang="ts" setup>
import { inject, ref, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const props = defineProps<{
  name?: string,
  value?: string | number
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[],
}>()

const inputRef = ref()
const { t } = inject('i18n', useI18n())
</script>

<style lang="scss" scoped>
.input\:text-magic {
  display: flex;
  margin-bottom: 0.5rem;
  flex: 1;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 0.5em 1em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) transparent;
    background-color: transparent;
    color: var(--color-x-3);
    outline: none;
    &::placeholder {
      color: var(--color-x-7);
    }
    &:hover {
      border-color: var(--color-x-8);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
      background-color: var(--color-x-11);
    }
  }
  &--invalid {
    i,
    input {
      color: var(--color-error);
    }
    input::placeholder {
      color: var(--color-error);
    }
  }
}
</style>