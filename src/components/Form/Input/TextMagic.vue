<template>
  <div data-test="input" :class="['input:text-magic', { 'input:text-magic--invalid': errors?.length }]">
    <input
      type="text"
      :name="name"
      :id="`${name}Id`" 
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, $event.target.value])"
    />
  </div>
</template>


<script lang="ts">
import { ref, inject, defineComponent } from 'vue'
import { useI18n } from '@src/composables'

export default defineComponent({
  props: {
    name: String,
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array
  },
  setup(props, context) {
    const { t } = inject('i18n', useI18n()) 
    
    return {
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.input\:text-magic {
  display: flex;
  margin-bottom: 0.5rem;
  flex: 1;
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) transparent;
  background-color: transparent;
  color: var(--color-x-3);
  outline: none;
}
input::placeholder {
  color: var(--color-x-7);
}
input:hover {
  border-color: var(--color-x-8);
}
input:focus {
  border-color: var(--color-x-4);
  box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
  background-color: var(--color-x-11);
}
.input\:text-magic--invalid i,
.input\:text-magic--invalid input {
  color: var(--color-error);
}
.input\:text-magic--invalid input::placeholder {
  color: var(--color-error);
}
</style>
