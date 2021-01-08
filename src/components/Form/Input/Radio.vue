<template>
  <div data-test="input" :class="['input:radio', { 'input:radio--invalid': errors?.length }]">
    <div
      v-for="(option, index) of options"
      :key="`option-${index}`"
      :class="{ 'input:radio__option--checked': option.value == value }"
    >
      <i class="input:radio__ui" @click="$event.target.nextElementSibling.click()" />
      <input
        type="radio"
        :name="name"
        :id="`${name}${index}Id`"
        :disabled="disabled"
        :value="option.value"
        :checked="option.value == value"
        @input="$emit('update', [$event, name, input?.value])"
      />
      <label :for="`${name}${index}Id`">{{ t(option.label) }}</label>
    </div>    
  </div>
</template>

<script lang="ts">
import { ref, inject, defineComponent, PropType } from 'vue'
import { useI18n } from '@src/composables'
  
export default defineComponent({
   props: {
    name: String,
    value: String,
    disabled: Boolean,
    errors: Array,
    options: Array as PropType<FormInputOption[]>
  },
  setup(props, context) {
    const { t } = inject('i18n', useI18n()) 

    return {
      t
    }
  }
})
</script>

<style lang="scss" scoped>
.input\:radio {
  display: flex;
  margin-left: -1em;
  > div {
    display: flex;
    align-items: center;
    padding: 1em 0;
    margin-left: 2em;
  }
  label {
    cursor: pointer;
    margin-left: 0.5em;
  }
  input {
    display: none;
  }
}
.input\:radio__ui {
  display: grid;
  align-content: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border: 1px var(--input-border-style) var(--color-x-6);
  border-radius: 10px;
  font-family: var(--icon-family);
  font-style: normal;
  cursor: pointer;
  &:before {
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: var(--color-info);
    opacity: 0;
  }
  &:hover {
    border-color: var(--color-info);
  }
}
.input\:radio__option--checked .input\:radio__ui {
  border-color: var(--color-info);
  &:before {
    opacity: 1;
  }
}
</style>
