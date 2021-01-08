<template>
  <div :class="['input:money', { 'input:money--invalid': errors?.length }]">
    <span class="input:money__currency">{{ currency }}</span>
    <input
      ref="inputRef"
      type="text"
      :name="name"
      :id="`${name}Id`"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="t(placeholder)"
      @input="$emit('update', [$event, name, inputRef?.value])"
    />
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent, onMounted } from 'vue'
import { useI18n } from '@src/composables'
import VMasker from 'vanilla-masker'

export default defineComponent({
  props: {
    name: String,
    value: [String, Number],
    placeholder: String,
    disabled: Boolean,
    readonly: Boolean,
    errors: Array,
    currency: String
  },
  setup(props, context) {
    const inputRef = ref()
    const { t } = inject('i18n', useI18n()) 

    onMounted(() => {
      VMasker(inputRef.value).maskMoney({
        precision: 2,
        separator: ',',
        delimiter: '.'
      })
    })

    return {
      t,
      inputRef
    }
  }
})
</script>
<style lang="scss" scoped>
.input\:money {
  display: flex;
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
.input\:money--invalid input {
  border-color: var(--color-error);
}
</style>
