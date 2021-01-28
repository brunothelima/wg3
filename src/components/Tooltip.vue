<template>
  <div :class="['tooltip', `tooltip--${direction}`]">
    <svg width="16px" height="8px" viewBox="0 0 16 8">
      <g bstroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-148.000000, 1.000000)">
          <g transform="translate(150.000000, 1.000000)">
            <path d="M6,-0.833333333 L13,8.5 L-1,8.5 L6,-0.833333333 Z" />
            <polygon fill="#F2F3F5" points="6 0 12 8 0 8" />
          </g>
        </g>
      </g>
    </svg>
    <span class="tooltip__content">
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>  
import { defineProps } from "vue"

const props = defineProps<{
  direction?: 'left' | 'center' | 'right'
}>()
</script>

<style>
*:hover > .tooltip {
  transform: translate(0, 0);
  visibility: visible;
  opacity: 1;
}
</style>
<style lang="scss" scoped>
.tooltip {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  top: 1.5em;
  min-width: 220px;
  padding-top: 1em;
  margin-top: -1em;
  transform: translate(0, 0.5em);
  visibility: hidden;
  opacity: 0;
  svg {
    position: relative;
    z-index: 2;
    margin-bottom: -1px;
  }
  svg polygon {
    fill: var(--color-x-9);
  }
  svg path {
    stroke: var(--color-x-8);
  }
  &__content {
    display: block;
    background-color: var(--color-x-9);
    padding: 1em;
    border-radius: var(--card-border-radius);
    box-shadow: var(--box-shadow-light);
    border: 1px solid var(--color-x-8);
    font-size: var(--font-size-xs);
    line-height: 150%;
  }
  &--left {
    left: 0;
  }
  &--left svg {
    align-self: flex-start;
    margin-left: 1em;
  }
  &--center {
    left: 0;
    right: 0;
    margin: auto;
  }
  &--center svg {
    align-self: center;
  }
  &--right {
    right: 0;
  }
  &--right svg {
    align-self: flex-end;
    margin-right: 1em;
  }
}
</style>
