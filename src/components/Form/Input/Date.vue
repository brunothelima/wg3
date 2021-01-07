<template>
  <div data-test="input" :class="['input:date', { 'input:date--invalid': errors?.length }]">
    <i color="a" class="icon-calendar" />
    <input
      ref="input"
      type="text"
      :name="name"
      :id="`${name}Id`"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, input?.value])"
    />
  </div>
</template>

<script lang="ts">
import { computed, ref, inject, watch, watchEffect, onMounted, onUnmounted, defineComponent, PropType } from 'vue'
import { Instance as FPInstance } from 'flatpickr/dist/types/instance'
import { CustomLocale } from 'flatpickr/dist/types/locale'
import { useI18n } from '@src/composables'

import FP from 'flatpickr'
import 'flatpickr/dist/l10n/pt.js'
import flatpickr from 'flatpickr'

export default defineComponent({
  props: {
    name: String,
    value: String,
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array,
    mode: String as PropType<'single' | 'range' | 'time'>
  },
  setup(props, context) {
    const input = ref()
    const { t, locale } = inject('i18n', useI18n()) 
    const options = computed(() => ({
      static: true,
      mode: props.mode,
      locale: locale.value,
      dateFormat: props.mode === 'time' 
        ? 'Y/m/d H:i' : 'Y/m/d',
    }))

    let FPInstance: FPInstance;

    watch(() => locale.value, lang => {
      FP.localize(FP.l10ns[lang] as CustomLocale)
    })
    
    onMounted(() => {
      FPInstance = FP(input.value, options.value)
    })

    onUnmounted(() => FPInstance.destroy())

    return {
      t,
      input
    }
  }
})
</script>

<style lang="scss" scoped>
.input\:date {
  display: flex;
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 48px auto;
  margin-bottom: 0.5rem;
}
i {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  justify-self: center;
  color: var(--color-x-5);
}
.input\:date::v-deep(.flatpickr-wrapper) {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}
.input\:date::v-deep(.flatpickr-calendar) {
  &::after,
  &::before {
    border-bottom-color: var(--color-x-10);
  }
}
.input\:date::v-deep(.flatpickr-calendar.arrowBottom) {
  &::after,
  &::before {
    border-top-color: var(--color-x-10);
  }
}
input {
  width: 100%;
  box-sizing: border-box;
  padding: 1em 1em 1em 48px;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: transparent;
  color: var(--color-x-3);
  outline: none;
  cursor: pointer;
}
input::placeholder {
  color: var(--color-x-7);
}
input:focus {
  border-color: var(--color-x-4);
  box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
}
.input\:date--invalid input {
  border-color: var(--color-error);
}
.input\:date--invalid i {
  color: var(--color-error);
}
</style>
