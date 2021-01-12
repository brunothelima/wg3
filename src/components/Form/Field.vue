<template>
  <div data-test="field" :class="['field', { 'field--disabled': !!input.disabled }]">
    <label data-test="label" class="field__label" :for="id" v-if="input.label">{{ t(input.label) }}</label>
    <div class="field__slot">
      <slot />
      <Help data-test="help" v-if="input.help">{{ t(input.help) }}</Help>
    </div>
    <div data-test="detail" class="field__detail" v-if="input.detail">{{ t(input.detail) }}</div>
    <ul data-test="errors" class="field__errors" v-if="input.errors && input.errors.length">
      <li v-for="message in input.errors" :key="message">{{ t(message) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, defineComponent, PropType } from 'vue'
import { useI18n } from '@src/composables'
import Help from './Help.vue'

export default defineComponent({
  components: {
    Help
  },
  props: {
    id: String,
    input: Object as PropType<FormInputTypes>,
  },
  setup(props) {
    const { t } = inject('i18n', useI18n()) 
    
    return {
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-flow: column;
  margin-bottom: 1em;
  &--disabled {
    opacity: 0.4;
    pointer-events: none;
  }
  &__label {
    margin: 0 0 0.5rem 1rem;
    font-size: calc(var(--font-size) - 2px);
    font-weight: 600;
    &:empty {
      display: none;
    }
  }
  &__slot {
    display: flex;
    [class*="input:"] {
      flex: 1;
    }
  }
  &__errors {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 1em 0 0 1em;
    margin: 0.5em 0 0.5em 1em;
    border-bottom: var(--input-border-width) var(--input-border-style) var(--color-error);
    border-left: var(--input-border-width) var(--input-border-style) var(--color-error);
    border-bottom-left-radius: var(--input-border-radius);
    padding: 1em 2em;
    li {
      margin: 0.25em 0;
    }
  }
}
</style>
