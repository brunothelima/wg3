<template>
  <div :class="['input:money', { 'input:money--error': errors && errors.length }]">
    <slot name="before" />
    <div class="input:money__wrapper">
      <span class="input:money__currency">{{ currency }}</span>
      <input
        ref="input"
        type="text"
        :name="name"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="t(placeholder)"
      />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import VMasker from 'vanilla-masker'
import { defineComponent, onMounted, ref } from 'vue'
import { useI18n } from '/@composables/useI18n'
import { FormInputMoney } from '/@types/form'

export default defineComponent({
  props: ['name', 'value', 'errors', 'disabled', 'readonly', 'placeholder', 'currency', 'messages'],
  setup(props: FormInputMoney) {
    const input = ref(null)
    const { t } = useI18n(props.messages)

    onMounted(() => {
      VMasker(input.value).maskMoney({
        precision: 2,
        separator: ',',
        delimiter: '.'
      })
    })

    return {
      t,
      input
    }
  }
})
</script>
<style lang="scss" scoped>
.input\:money {
  display: flex;
}
.input\:money__wrapper {
  position: relative;
  flex: 1;
  display: grid;
  grid-template-columns: 48px auto;
  margin-bottom: 0.5rem;
}
.input\:money__currency {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-x-10);
  font-weight: 600;
  color: var(--color-a-1);
  border-radius: var(--input-border-radius) 0 0 var(--input-border-radius);
}
input {
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  box-sizing: border-box;
  padding: 1em 1em 1em calc(48px + 1em);
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: transparent;
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
.input\:money--error {
  input {
    border-color: var(--color-error);
  }
}
</style>