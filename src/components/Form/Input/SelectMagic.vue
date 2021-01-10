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

<script lang="ts">
import { computed, inject, defineComponent, defineProps, PropType } from 'vue'
import { useI18n } from '@src/composables'

export default defineComponent({
  props: {
    name: String,
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array,
    options: Array as PropType<FormInputOption[]>,
  },
  setup(props, context) {
    const { t } = inject('i18n', useI18n())

    // Computes the current select option title for display
    const selected = computed(() => {
      if (!props.value) return null
      // Query for the selected option title
      let query = (option: FormInputOption) => {
        return `${option.value}` === `${props.value}`
      }
      return props.options?.find(query)?.label
    })

    return {
      t,
      selected 
    }
  }
})
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
}
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
.input\:select-magic:hover {
  border-color: var(--color-x-8);
}

.input\:select-magic__selected,
.input\:select-magic__placeholder {
  display: block;
  padding: 0.5em 1em;
}
.input\:select-magic__selected {
  color: var(--color-x-3);
}
.input\:select-magic__placeholder {
  color: var(--color-x-7);
}
.input\:select-magic--invalid {
  border-color: var(--color-error);
}
</style>
