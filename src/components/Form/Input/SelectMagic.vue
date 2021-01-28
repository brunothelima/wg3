<template>
  <div data-test="input" :class="['input:select-magic', { 'input:select-magic--invalid': errors?.length }]">
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
    <div data-test="selected" class="input:select-magic__selected" v-if="selected">{{ t(selected) }}</div>
    <div data-test="placeholder" class="input:select-magic__placeholder" v-else>{{ t(placeholder || 'Select an option') }}</div>
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
.input\:select-magic {
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex: 1;
  border-radius: var(--input-border-radius);
  margin-bottom: 0.5rem;
  background-color: var(--color-x-11);
  border: var(--input-border-width) var(--input-border-style) transparent;
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
  &:hover {
    border-color: var(--color-x-8);
  }
  &__selected,
  &__placeholder {
    display: block;
    padding: 0.5em 1em;
  }
  &__selected {
    color: var(--color-x-3);
  }
  &__placeholder {
    color: var(--color-x-7);
  }
  &--invalid {
    border-color: var(--color-error);
  }
}

</style>
