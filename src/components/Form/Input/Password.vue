<template>
  <div data-test="input" :class="['input:text', { 'input:password--invalid': errors?.length }]">
    <input
      :type="type"
      :name="name"
      :id="`${name}Id`"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      @input.prevent="onInput"
    />
    <i
      data-test="icon"
      color="a"
      :class="`icon-eye${type === 'text' ? '-closed' : ''}`"
      @click="type = type === 'text' ? 'password' : 'text'"
    />
  </div>
</template>

<script lang="ts">
import { inject, ref, defineComponent } from "vue"
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
    const type = ref('password')
    const { t } = inject('i18n', useI18n()) 

    function onInput(ev: OnInputEvent) {
      const { name, value } = ev.target
      context.emit('update', ev, { name, value })
    }
    
    return {
      t,
      type,
      onInput
    }
  }
})
</script>

<style scoped>
.input\:text {
  display: flex; 
  flex: 1;
  display: grid;
  grid-template-columns: auto 48px;
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: var(--color-x-11);
  color: var(--color-x-3);
  outline: none;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}
i {
  padding: 0.25em;
  align-self: center;
  justify-self: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  cursor: pointer;
}
input::placeholder {
  color: var(--color-x-7);
}
input:focus {
  border-color: var(--color-x-4);
  box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
}
.input\:password--invalid input {
  border-color: var(--color-error);
}
.input\:password--invalid i {
  border-color: var(--color-error);
}
</style>
