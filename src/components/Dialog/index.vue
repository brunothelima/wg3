<template>
  <Teleport to="#portal\:dialog">
    <div class="dialog">
      <div class="dialog__mask"></div>
      <div class="dialog__content">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, defineEmit } from 'vue'

const emit = defineEmit()

/**
 * onEsc() will emit a @cancel event to the dialog parent,
 * if the given KeyboardEvent.key pressed is "Escape"
 */
const onEsc = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    emit('cancel', event)
  }
}

onMounted(() => {
  document.body.classList.add('scroll-lock')
  // Binding onEsc to the DOM 
  window.addEventListener('keyup', onEsc)
})
onUnmounted(() => {
  document.body.classList.remove('scroll-lock')
  // Unbinding onEsc from the DOM 
  window.removeEventListener('keyup', onEsc)
})
</script>

<style lang="scss" scoped>
.dialog {
  display: grid;
  overflow: auto;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  padding: 0 2em;
  box-sizing: border-box;
  &__mask {
    z-index: 1;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background: var(--color-x-11);
    opacity: 0.6;
  }
  &__content {
    position: relative;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    align-self: center;
    z-index: 2;
    margin: 2em auto;
    > [class*='dialog:'] {
      opacity: 0;
      animation-name: fade-in;
      animation-duration: var(--transition-duration);
      animation-delay: var(--transition-duration);
      animation-timing-function: var(--transition-timing-function);
      animation-fill-mode: forwards;
    }
  }
}
@keyframes fade-in {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
