<template>
  <div :class="['input:select', { 'input:select--invalid': errors }]">
    <slot name="before" />
    <div class="input:select__wrapper">
      <select
        :id="`${name}Id`"
        :name="name"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option.value"
          :selected="option.value === value"
          >{{ (t && t(option.label)) || option.label }}</option
        >
        <slot />
      </select>
      <div class="input:select__selected" v-if="selected">
        {{ (t && t(selected)) || selected }}
      </div>
      <div class="input:select__placeholder" v-else>
        {{ (t && t(placeholder)) || "Select an option" }}
      </div>
      <i class="icon-caret-down" color="a" />
    </div>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { FormInputOption } from "../../../types/form";
import { computed } from "vue";

export default {
  props: [
    "name",
    "value",
    "options",
    "placeholder",
    "disabled",
    "readonly",
    "errors",
    "t",
  ],
  setup(props) {
    // Computes the current select option title for display
    const selected = computed(() => {
      if (!props.value) return null;
      // Query for the selected option title
      let query = (option: FormInputOption) => {
        return String(option.value) === props.value;
      };
      return props.options.find(query).label;
    });

    return {
      selected,
    };
  },
};
</script>

<style scoped>
.input\:select {
  display: flex;
  margin-bottom: 0.5rem;
}
select {
  opacity: 0;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.input\:select__wrapper {
  display: grid;
  grid-template-columns: auto 48px;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  border-radius: var(--input-border-radius);
  border: var(--input-border-width) var(--input-border-style) var(--color-x-8);
  background-color: var(--color-x-11);
  outline: none;
}
.input\:select__selected,
.input\:select__placeholder {
  padding: 1em 48px 1em 1em;
  grid-row: 1 / 2;
  grid-column: 1 / 3;
}
.input\:select__selected {
  color: var(--color-x-3);
}
.input\:select__placeholder {
  color: var(--color-x-7);
}
i {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  align-self: center;
  justify-self: center;
}
.input\:select--error .input-select__wrapper {
  border-color: var(--color-error);
}
.input\:select--error [class*="icon-"] {
  color: var(--color-error);
}
</style>
