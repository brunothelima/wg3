<template>
  <div :class="['input:textarea', { 'input:textarea--invalid': errors?.length }]">
    <textarea
      ref="input"
      :value="value"
      :name="name"
      :placeholder="t(placeholder)"
      :disabled="disabled"
      :maxlength="maxlength"
      @input.prevent="onInput"
    ></textarea>
    <small>{{ maxlength ? `${value.length}/${maxlength}` : value.length }}</small>
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent, computed } from 'vue'
import { useI18n } from '@src/composables'

export default defineComponent({
  props: {
    name: String,
    value: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array,
    maxlength: Number
  },
  setup(props, context) {
    const input = ref<HTMLInputElement>()
    const { t } = inject('i18n', useI18n()) 

    function onInput(ev: OnInputEvent) {
      if (props.value && props.maxlength 
      && props.value.length >= props.maxlength) {
        return
      }

      const { name, value } = ev.target
      context.emit('update', ev, { name, value })
    }
    
    return {
      t,
      input,
      onInput,
    }
  }
})
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
}
.input\:textarea--invalid {
  textarea {
    border-color: var(--color-error);
  }
  i {
    color: var(--color-error);
  }
}
</style>
