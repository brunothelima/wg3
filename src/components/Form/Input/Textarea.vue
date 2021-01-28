<template>
  <div :class="['input:textarea', { 'input:textarea--invalid': errors?.length }]">
    <textarea
      :name="name"
      :id="`${name}Id`"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      :maxlength="maxlength"
      @input="$emit('update', [$event, name, $event.target.value])"
    ></textarea>
    <small>{{ maxlength ? `${value.length}/${maxlength}` : value.length }}</small>
  </div>
</template>


<script lang="ts" setup>
import { inject, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const props = defineProps<{
  name?: string,
  value?: string | number
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[],
  maxlength?: number
}>()

const { t } = inject('i18n', useI18n()) 
</script>

<style lang="scss" scoped>
.input\:textarea {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 0.5rem;
  small {
    display: block;
    padding-top: 0.5rem;
    text-align: right;
  }
  textarea {
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
    min-height: 10em;
    padding: 1em;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: var(--color-x-11);
    color: var(--color-x-3);
    outline: none;
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
    }
  }
  &--invalid {
    textarea {
      border-color: var(--color-error);
    }
    i {
      color: var(--color-error);
    }
  }
}
</style>
