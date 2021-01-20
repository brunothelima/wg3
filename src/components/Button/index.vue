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

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    icon: String,
    reverse: Boolean,
    disabled: Boolean,
    skin: String as PropType<'glassy' | 'ghosty' | 'default'>,
    tag: String as PropType<'a' | 'span' | 'button' | 'div'>,
    size: String as PropType<'small' | 'medium' | 'large'>
  }
})
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

<style lang="scss" scoped>
// GHOSTY
.button\:ghosty {
  position: relative;
  padding: 0.8em 0.25em;
  background-color: transparent;
  border: none;
  color: var(--color-x-1);
  font-weight: 400;
  &:not([disabled]):hover,
  &:not([disabled]).button--hover {
    color: var(--color-a-3);
  }
  &:not([disabled]):active,
  &:not([disabled]).button--active {
    color: var(--color-x-6);
  }
  &::v-deep(i),
  &::v-deep(span) {
    color: inherit;
  }
}

// GLASSY
.button\:glassy {
  position: relative;
  background-color: var(--color-x-11);
  border: 1px solid var(--color-a-1);
  color: var(--color-a-1);
  font-weight: 600;
  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--color-a-7);
  }
  &:not(.button\:glassy--disabled):hover,
  &:not(.button\:glassy--disabled).button--hover {
    color: var(--color-x-11);
  }
  &:not(.button\:glassy--disabled):hover:before,
  &:not(.button\:glassy--disabled).button--hover:before {
    background-color: var(--color-a-3);
  }
  &:not(.button\:glassy--disabled):active,
  &:not(.button\:glassy--disabled).button--active {
    color: var(--color-x-11);
  }
  &:not(.button\:glassy--disabled):active:before,
  &:not(.button\:glassy--disabled).button--active:before {
    background-color: var(--color-a-1);
  }
  &::v-deep(i),
  &::v-deep(span) {
    position: relative;
    z-index: 1;
    color: inherit;
    white-space: nowrap;
  }
}
</style>