<template>
  <div data-test="input" :class="['input:date', { 'input:date--invalid': errors?.length }]">
    <i color="a" class="icon-calendar" />
    <input
      ref="inputRef"
      type="text"
      :name="name"
      :id="`${name}Id`"
      :value="value"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, inputRef.value])"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, inject, watch, onMounted, onUnmounted, defineProps } from 'vue'
import { useI18n } from '@src/composables'

// Flatpickr import of typings, instance and localizations
// import { Instance as FPInstance } from 'flatpickr/dist/types/instance'
// import { CustomLocale as FPLocale } from 'flatpickr/dist/types/locale'

import FP from 'flatpickr'
// import 'flatpickr/dist/l10n/pt.js'

const props = defineProps<{
  name?: string,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  readonly?: boolean,
  errors?: string[],
  mode?: 'single' | 'range' | 'time'
}>()

const inputRef = ref()
const { t, locale } = inject('i18n', useI18n())

const fpOptions = computed(() => ({
  mode: props.mode,
  static: true, // true so the fpInstance element is crated in the component's parentElement
  locale: locale.value,
  dateFormat: props.mode === 'time' ? 'Y/m/d H:i' : 'Y/m/d'
}))

let fpInstance: any;

onMounted(() => {
  fpInstance = FP(inputRef.value, fpOptions.value)
})

// On locale change we relocalize the flatpickr instance
watch(() => locale.value, newLocale => {
  FP.localize(FP.l10ns[newLocale] as any)
})

onUnmounted(() => {
  fpInstance.destroy()
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
  i {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
    justify-self: center;
  }
  &::v-deep(.flatpickr-wrapper),
  &::v-deep(input.flatpickr-mobile) {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
  }
  &::v-deep(.flatpickr-calendar) {
    &::after,
    &::before {
      border-bottom-color: var(--color-x-10);
    }
  }
  &::v-deep(.flatpickr-calendar.arrowBottom) {
    &::after,
    &::before {
      border-top-color: var(--color-x-10);
    }
  }
  input,
  &::v-deep(.flatpickr-mobile) {
    width: 100%;
    box-sizing: border-box;
    padding: 1em 1em 1em 48px;
    border-radius: var(--input-border-radius);
    border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
    background-color: transparent;
    color: var(--color-x-3);
    outline: none;
    cursor: pointer;
    &::placeholder {
      color: var(--color-x-7);
    }
    &:focus {
      border-color: var(--color-x-4);
      box-shadow: 0 0 0 var(--input-border-width) var(--color-x-4);
    }
  }
  &--invalid input,
  &--invalid::v-deep(.flatpickr-mobile) {
    border-color: var(--color-error);
  }
  &--invalid i {
    color: var(--color-error);
  }
}
</style>