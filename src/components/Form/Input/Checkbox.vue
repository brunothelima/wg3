<template>
  <div data-test="input" :class="['input:checkbox', { 'input:checkbox--checked': input?.checked }]">
    <i data-test="ui" class="input:checkbox__ui" @click="input?.click()"/>
    <input
      ref="input"
      type="checkbox"
      :name="name"
      :id="`${name}Id`"
      :disabled="disabled"
      @input.prevent="onInput"
    />
    <label :for="`${name}Id`">{{ t(title) }}</label>  
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent } from 'vue'
import { useI18n } from '@src/composables'

export default defineComponent({
   props: {
    name: String,
    disabled: Boolean,
    title: String,
  },
  setup(props, context) {
    const input = ref<HTMLInputElement>()
    const { t } = inject('i18n', useI18n()) 

    function onInput(ev: OnInputEvent) {
      const { name, checked } = ev.target
      context.emit('update', ev, { name, value: checked })
    }

    return {
      t,
      input,
      onInput
    }
  }
})
</script>

<style lang="scss" scoped>
.input\:checkbox {
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
.input\:checkbox__ui {
  display: grid;
  align-content: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border: 1px var(--input-border-style) var(--color-x-6);
  border-radius: 2px;
  font-family: var(--icon-family);
  font-style: normal;
  color: white;
  cursor: pointer;
  &:before {
    content: "\e90c";
    opacity: 0;
  }
  &:hover {
    border-color: var(--color-info);
  }
}
.input\:checkbox--checked .input\:checkbox__ui {
  border-color: var(--color-info);
  background-color: var(--color-info);
  &:before {
    opacity: 1;
  }
}
</style>
