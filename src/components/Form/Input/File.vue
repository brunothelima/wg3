<template>
  <div :class="['input:file', { 'input:file--invalid': errors && errors.length }]">
    <slot name="before" />
    <div class="input:file__wrapper" @click="input?.click()">
      <input
        ref="input"
        type="file"
        :name="name"
        :id="`${name}Id`"
        :disabled="disabled"
        :readonly="readonly"
        @input.prevent="onInput"
      />
      <span class="input:file__selected" v-if="value">{{ value?.name }}</span>
      <span class="input:file__placeholder" v-else>{{ t(placeholder) }}</span>
      <i color="a" class="icon-upload" />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent, PropType } from 'vue'
import { useI18n } from '@src/composables'

export default defineComponent({
   props: {
    name: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array,
    value: [String, Object] as PropType<File | ''>
  },
  setup(props, context) {
    const input = ref<HTMLInputElement>()
    const { t } = inject('i18n', useI18n()) 

    function onInput(ev: OnInputEvent) {
      const { name, files } = ev.target
      context.emit('update', ev, { name, value: files?.[0] })
    }

    return {
      t,
      input,
      onInput
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
.input\:file--invalid .input\:file__wrapper {
  border-color: var(--color-error);
}
.input\:file--invalid i {
  color: var(--color-error);
}
</style>
