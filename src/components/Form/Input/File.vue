<template>
  <div :class="['input:file', { 'input:file--invalid': errors?.length }]" @click="inputRef?.click()">
    <input
      ref="inputRef"
      type="file"
      :name="name"
      :id="`${name}Id`"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('update', [ev, name, inputRef?.files?.[0]])"
    />
    <span class="input:file__selected" v-if="value">{{ value?.name }}</span>
    <span class="input:file__placeholder" v-else>{{ t(placeholder) }}</span>
    <i color="a" class="icon-upload" />
  </div>
</template>

<script lang="ts" setup>
import { ref, inject, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const props = defineProps<{
  name?: string,
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[],
  value?: File
}>()

const inputRef = ref()
const { t } = inject('i18n', useI18n()) 
</script>

<style lang="scss" scoped>
.input\:file {
  display: flex;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
  margin-bottom: 0.5em;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: var(--color-x-11);
  outline: none;
  cursor: pointer;
  input {
    display: none;
  }
  &__selected,
  &__placeholder {
    flex: 1;
    padding-right: 1em;
  }
  &__selected {
    color: var(--color-x-3);
  }
  &__placeholder {
    color: var(--color-x-7);
    opacity: 0.6;
  }
  &--invalid {
    border-color: var(--color-error);
    i {
      color: var(--color-error);
    }
  }
}
</style>