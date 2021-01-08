<template>
  <component
    data-test="button"
    :is="skin || 'glassy'"
    :disabled="disabled"
    :class="['button', `button--${size || 'medium'}`, { 'button--reverse': reverse }]"
  >
    <i data-test="icon" :class="icon" v-if="icon" />
    <span data-test="slot">
      <slot />
    </span>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Ghosty from './Ghosty.vue'
import Glassy from './Glassy.vue'

export default defineComponent({
  props: {
    icon: String,
    size: String as PropType<'small' | 'medium' | 'large' >,
    skin: String as PropType<'glassy' | 'ghosty'>,
    reverse: Boolean,
    disabled: Boolean,
  },
  components: {
    Ghosty,
    Glassy
  }
})
</script>

<style scoped>
.button {
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: var(--button-padding);
  border-radius: var(--button-border-radius);
  font-size: inherit;
  outline: none;
  cursor: pointer;
}
.button[disabled] {
  opacity: 0.24;
  cursor: not-allowed;
}
.button i,
.button svg,
.button span {
  display: inline-flex;
}
.button i {
  font-size: 16px;
}
.button span {
  text-decoration: none;
}
.button * ~ span {
  margin: 0 0 0 1em;
}
.button--reverse {
  flex-direction: row-reverse;
}
.button--reverse * ~ span {
  margin: 0 1em 0 0;
}
.button--small {
  font-size: var(--font-size-xs);
  padding: 0.8em 1.5em;
}
.button--large {
  font-size: var(--font-size-xl);
}
</style>
