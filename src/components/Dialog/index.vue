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

<script lang="ts">
import { onMounted, onUnmounted } from 'vue'

export default {
  setup(props, context) {
    const onEsc = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') context.emit('cancel', ev)
    }
    onMounted(() => {
      document.body.classList.add('scroll-lock')
      window.addEventListener('keyup', onEsc)
    })
    onUnmounted(() => {
      document.body.classList.remove('scroll-lock')
      window.removeEventListener('keyup', onEsc)
    })
  }
}
</script>

<style scoped>
.dialog {
  display: grid;
  overflow: auto;
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 100%;
  padding: 0 2em;
  box-sizing: border-box;
}
.dialog__mask {
  z-index: 1;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  background: var(--color-x-11);
  opacity: 0.6;
}
.dialog__content {
  position: relative;
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  align-self: center;
  z-index: 2;
  margin: 2em auto;
}
.dialog__content > [class*='dialog:'] {
  opacity: 0;
  animation-name: fade-in;
  animation-duration: var(--transition-duration);
  animation-delay: var(--transition-duration);
  animation-timing-function: var(--transition-timing-function);
  animation-fill-mode: forwards;
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
