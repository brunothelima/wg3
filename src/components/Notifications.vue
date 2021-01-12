<template>
  <ul data-test="notifications" class="notifications">
    <li data-test="message" v-for="(note, index) in list" :key="note" :class="note.status">
      <i data-test="icon" class="icon-close-small" @click="dismiss(index)" />
      <span data-test="text">{{ note.message }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { useNotifications } from '@src/composables'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { list, dismiss } = useNotifications()

    return {
      list,
      dismiss
    }
  }
})
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  overflow: visible;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  list-style: none;
}
ul li {
  display: flex;
  align-items: center;
  min-height: 3em;
  padding: 0 0.75em;
  margin-top: 1em;
  border-radius: 4px;
  background-color: var(--color-info);
  color: var(--color-x-10);
  font-weight: 700;
  opacity: 0;
  transform: translateY(-1em) scale(0.9);
  animation-name: bounce-in;
  animation-duration: var(--transition-duration);
  animation-timing-function: var(--transition-timing-function);
  animation-fill-mode: forwards;
  span {
    padding-left: 0.5em;
  }
  i {
    cursor: pointer;
  }
  &.error {
    background-color: var(--color-error);
  }
  &.success {
    background-color: var(--color-success);
  }
  &.warning {
    background-color: var(--color-warning);
  }
}
@keyframes bounce-in {
  from {
    opacity: 0;
    transform: translateY(-1em) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
