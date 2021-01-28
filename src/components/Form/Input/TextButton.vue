<template>
  <div data-test="input" :class="['input:text-button', { 'input:text-button--invalid': errors?.length }]">
    <input
      ref="inputRef"
      type="text"
      :name="name"
      :value="value"
      :id="`${name}Id`" 
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, inputRef.value])"
    />
    <Button tag="div" @click="button?.onClick([$event, name, inputRef.value])">
      {{ t(button.text) }}
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, defineAsyncComponent, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const Button = defineAsyncComponent(
  () => import('@src/components/Button/index.vue')
) 

const props = defineProps<{
  name?: string,
  value?: string | number
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[],
  button?: FormInputTextButtonProps
}>()

const inputRef = ref()
const { t } = inject('i18n', useI18n()) 
</script>

<style lang="scss" scoped>
.input\:text-button {
  position: relative;
  display: flex;
  flex: 1;
  margin-bottom: 0.5rem;
  input {
    width: 100%;
    box-sizing: border-box;
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
    input {
      border-color: var(--color-error);
    }
    i {
      border-color: var(--color-error);
    }
  } 
   &::v-deep(.button) {
    position: absolute;
    right: 6px;
    bottom: 6px;
    top: 6px;
  }
}
</style>
