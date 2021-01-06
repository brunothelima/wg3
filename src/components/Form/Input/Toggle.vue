<template>
  <div data-test="input" :class="['input:toggle', { 'input:toggle--checked': value }]">
    <i data-test="ui" class="input:toggle__ui" @click="onClick" />
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
import { defineComponent, ref, PropType } from 'vue'
import { I18nMessages } from '/@src/types'
import { useI18n } from '/@src/composables/useI18n'

export default defineComponent({
   props: {
    name: String,
    disabled: Boolean,
    value: Boolean,
    title: String,
    messages: Object as PropType<I18nMessages>,
  },
  setup(props) {
    const checkbox = ref<HTMLInputElement>()
    const { t } = useI18n(props.messages)

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
.input\:toggle {
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
.input\:toggle__ui {
  display: inline-flex;
  width: 42px;
  height: 20px;
  border-radius: 13px;
  background-color: var(--color-x-7);
  cursor: pointer;
  &:before {
    content: "";
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    transform: scale(1.2);
    background: white;
    border: 1px solid var(--color-x-7);
  }
}
.input\:toggle--checked .input\:toggle__ui {
  background-color: var(--color-info);
  &:before {
    transform: scale(1.2) translateX(100%);
    border-color: var(--color-info);
  }
}
</style>
