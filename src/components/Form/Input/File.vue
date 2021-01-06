<template>
  <div :class="['input:file', { 'input:file--invalid': errors && errors.length }]">
    <slot name="before" />
    <div class="input:file__wrapper" @click="onClick">
      <input
        ref="input"
        type="file"
        :name="name"
        :id="`${name}Id`"
        :disabled="disabled"
        :readonly="readonly"
        @input="onInput"
      />
      <span
        :class="file ? 'input:file__selected' : 'input:file__placeholder'"
      >{{ file?.name || value?.name || t(placeholder) }}</span>
      <i color="a" class="icon-upload" />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { I18nMessages } from '/@src/types'
import { useI18n } from '/@src/composables/useI18n'

export default defineComponent({
   props: {
    name: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array,
    value: Object as PropType<File | undefined>,
    messages: Object as PropType<I18nMessages>,
  },
  setup(props) {
    const input = ref<HTMLInputElement>()
    const file = ref(props.value)
    const { t } = useI18n(props.messages)

    const onInput = () => {
      file.value = input.value?.files?.[0]
    }

    const onClick = () => {
      input.value?.click()
    }

    return {
      t,
      file,
      input,
      onInput,
      onClick
    }
  }
})
</script>

<style scoped>
.input\:file {
  display: flex;
}
input {
  display: none;
}
.input\:file__wrapper {
  position: relative;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
  margin-bottom: 0.5em;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: var(--color-x-11);
  outline: none;
  cursor: pointer;
}
.input\:file__selected,
.input\:file__placeholder {
  flex: 1;
  padding-right: 1em;
}
.input\:file__selected {
  color: var(--color-x-3);
}
.input\:file__placeholder {
  color: var(--color-x-7);
  opacity: 0.6;
}
.input\:file--error .input-file__wrapper {
  border-color: var(--color-error);
}
.input\:file--error i {
  color: var(--color-error);
}
</style>
