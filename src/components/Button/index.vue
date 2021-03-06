<template>
  <component
    data-test="button"
    :is="tag || 'button'"
    :disabled="disabled"
    :class="[
      'button', 
      `button:${skin || 'glassy'}`, 
      `button--${size || 'medium'}`, 
      { 'button--reverse': reverse },
      { 'button--disabled': disabled }
    ]"
  >
    <i data-test="icon" :class="icon" v-if="icon" />
    <span data-test="slot">
      <slot />
    </span>
  </component>
</template>

<script lang="ts" setup>  
import { defineProps } from "vue"

const props = defineProps<{
  tag?: CustomButtonTags,
  size?: CustomButtonSizes,
  skin?: CustomButtonSkins,
  icon?: string,
  reverse?: boolean,
  disabled?: boolean,
}>()
</script>

<style lang="scss" scoped>
.button {
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: inherit;
  outline: none;
  cursor: pointer;
  i,
  svg,
  span {
    display: inline-flex;
  }
  i {
    font-size: 16px;
  }
  span {
    text-decoration: none;
  }
  * ~ span {
    margin: 0 0 0 1em;
  }
  &--disabled {
    opacity: 0.24;
    cursor: not-allowed;
    pointer-events: none;
  }
  &--reverse {
    flex-direction: row-reverse;
  }
  &--reverse * ~ span {
    margin: 0 1em 0 0;
  }
  &--small {
    font-size: var(--font-size-xs);
    padding: 0.8em 1.5em;
  }
  &--large {
    font-size: var(--font-size-xl);
  }
}
</style>

<style src="./_glassy.scss" lang="scss" scoped></style>
<style src="./_ghosty.scss" lang="scss" scoped></style>
