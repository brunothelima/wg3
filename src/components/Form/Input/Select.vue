<template>
  <div data-test="input" :class="['input:select', { 'input:select--invalid': errors?.length }]">
    <select
      data-test="select"
      :id="`${name}Id`"
      :name="name"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @input="$emit('update', [$event, name, $event.target.value])"
    >
      <option v-for="option in options" :key="option" :value="option.value" :selected="option.value === value">
        {{ t(option.label) }}
      </option>
      <slot />
    </select>
    <div data-test="selected" class="input:select__selected" v-if="selected">{{ t(selected) }}</div>
    <div data-test="placeholder" class="input:select__placeholder" v-else>{{ t(placeholder || 'Select an option') }}</div>
    <i class="icon-caret-down" color="a" />
  </div>
</template>

<script lang="ts" setup>
import { computed, inject, defineProps } from 'vue'
import { useI18n } from '@src/composables'

const props = defineProps<{
  name?: string,
  value?: string | number
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[],
  options?: FormInputOption[]
}>()

// Returns the current selected option title
const selected = computed(() => {
  if (!props.value) return null
  // Query for the selected option title
  let query = (option: FormInputOption) => {
    return `${option.value}` === `${props.value}`
  }
  return props.options?.find(query)?.label
})

const { t } = inject('i18n', useI18n())
</script>

<style lang="scss" scoped>
.input\:select {
  display: flex;
  margin-bottom: 0.5rem;
  display: grid;
  grid-template-columns: auto 48px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: var(--color-x-11);
  outline: none;
  select {
    opacity: 0;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  i {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    align-self: center;
    justify-self: center;
  }
  &__selected,
  &__placeholder {
    padding: 1em 48px 1em 1em;
    grid-row: 1 / 2;
    grid-column: 1 / 3;
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
    [class*='icon-'] {
      color: var(--color-error);
    }
  }
}
</style>
