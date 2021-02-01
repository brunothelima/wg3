<template>
  <div data-test="input" :class="['input:toggle', { 'input:toggle--checked': inputRef?.checked }]">
    <i data-test="ui" class="input:toggle__ui" @click="inputRef.click()" />
    <input
      ref="inputRef"
      type="checkbox"
      :name="name"
      :id="`${name}Id`"
      :disabled="disabled"
      @input="$emit('update', [$event, name, inputRef?.checked])"
    />
    <label :for="`${name}Id`">{{ t(title) }}</label>
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const props = defineProps<{
  name?: string,
  disabled?: boolean,
  title?: string
}>()

const inputRef = ref()
const { t } = inject('i18n', useI18n()) 
</script>

<style lang="scss" scoped>
.input\:toggle {
  display: flex;
  align-items: center;
  padding: 1em 0;
  margin-left: 1em;
  label {
    cursor: pointer;
    margin-left: 0.5em;
  }
  input {
    display: none;
  }
}
.input\:toggle__ui {
  display: inline-flex;
  width: 42px;
  height: 20px;
  border-radius: 13px;
  background-color: var(--color-x-7);
  cursor: pointer;
  &:before {
    content: "";
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    transform: scale(1.2);
    background: var(--color-x-11);
    border: 1px solid var(--color-x-7);
  }
}
.input\:toggle--checked .input\:toggle__ui {
  background-color: var(--color-info);
  &:before {
    transform: scale(1.2) translateX(100%);
    border-color: var(--color-info);
  }
}
</style>