<template>
  <div data-test="input" :class="['input:checkbox', { 'input:checkbox--checked': value }]">
    <i data-test="ui" class="input:checkbox__ui" @click="onClick"/>
    <input
      ref="checkbox"
      type="checkbox"
      :name="name"
      :id="`${name}Id`"
      :disabled="disabled"
    />
    <label :for="`${name}Id`">{{ t(title) }}</label>
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent, PropType } from 'vue'
import { useI18n } from '/@src/composables/useI18n'

export default defineComponent({
   props: {
    name: String,
    disabled: Boolean,
    value: Boolean,
    title: String,
  },
  setup(props) {
    const checkbox = ref<HTMLInputElement>()
    const { t } = useI18n(inject('messages', {}))

    const onClick = (ev: InputEvent) => {
      checkbox.value?.click()
    }

    return {
      t,
      checkbox,
      onClick
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
