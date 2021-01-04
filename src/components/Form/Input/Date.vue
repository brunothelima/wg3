<template>
  <div :class="['input:date', { 'input:date--invalid': errors && errors.length }]">
    <slot name="before" />
    <div class="input:date__wrapper">
      <i color="a" class="icon-calendar" />
      <input
        ref="input"
        type="text"
        :name="name"
        :readonly="readonly"
        :disabled="disabled"
        :placeholder="t(placeholder)"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watch, defineComponent } from 'vue'
import { WgInputDate } from '/@src/types/form'
import { useI18n } from '/@src/composables/useI18n'

import flatpickr from 'flatpickr'
import 'flatpickr/dist/l10n/pt.js'

export default defineComponent({
  props: ['name', 'value', 'time', 'mode', 'placeholder', 'readonly', 'disabled', 'errors', 'messages'],
  setup(props: WgInputDate, context) {
    const input = ref<HTMLInputElement>()
    const { locale, t } = useI18n(props.messages)

    const options = computed(() => ({
      static: true,
      locale: locale.value,
      enableTime: props.time,
      mode: props.mode || 'single',
      dateFormat: props.time ? 'Y/m/d H:i' : 'Y/m/d',
      defaultDate: props.value || null,
    }))

    watch(() => locale, l10n => {
      flatpickr.localize(flatpickr.l10ns[l10n.value])
      flatpickr(input.value, options.value)
    })

    onMounted(() => {
      flatpickr(input.value, options.value)
    })

    return {
      t,
      input
    }
  }
})
</script>

<style lang="scss">
@import 'flatpickr/dist/flatpickr.min.css';
.wg3 {
  .flatpickr {
    &-calendar {
      box-sizing: content-box;
      padding: 1em;
      border: none;
      left: 2px;
      background-color: var(--color-x-10);
      box-shadow: var(--box-shadow-medium);
      font-family: var(--font-family);
      &.arrowBottom {
        top: unset;
        bottom: calc(100% - 6px);
      }
    }
    &-current-month {
      margin-left: 0.5em;
      font-size: var(--font-size);
      color: var(--color-a-1);
      select {
        text-align: right;
        -moz-appearance: none !important;
        -webkit-appearance: none !important;
      }
      option {
        color: #222;
      }
    }
    &-days .dayContainer {
      justify-content: flex-start;
    }
    &-weekday {
      font-size: var(--font-size-xs);
      color: var(--color-x-1);
    }
    &-day {
      font-size: var(--font-size-xs);
      height: 26px;
      max-width: 26px;
      line-height: 26px;
      border-radius: 13px;
      margin: 0.5em;
      color: var(--color-x-2);
      &.today {
        border-color: var(--color-a-1);
      }
      &.prevMonthDay,
      &.nextMonthDay {
        color: var(--color-x-7);
      }
      &.selected {
        background-color: var(--color-a-1);
        border-color: var(--color-a-1);
      }
      &:hover,
      &.prevMonthDay:hover,
      &.nextMonthDay:hover {
        border-color: var(--color-x-6);
        background-color: var(--color-x-8);
        color: var(--color-x-1);
      }
    }
    &-months {
      margin-bottom: 2em;
      .flatpickr-next-month,
      .flatpickr-prev-month {
        top: 1em;
        padding-left: 2em;
        padding-right: 2em;
        svg {
          fill: var(--color-x-1);
        }
        &:hover svg {
          fill: var(--color-a-1);
        }
      }
    }
    &-current-month .numInputWrapper span {
      &.arrowUp:after {
        border-bottom-color: var(--color-x-1);
      }
      &.arrowDown:after {
        border-top-color: var(--color-x-1);
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.input\:date {
  display: flex;
}
.input\:date__wrapper {
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
.input\:date--error input {
  border-color: var(--color-error);
}
.input\:date--error i {
  color: var(--color-error);
}
</style>
