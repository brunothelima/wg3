<template>
  <ul class="notifications">
    <li
      v-for="(notification, index) in notifications"
      :key="notification"
      :class="notification.status"
    >
      <i class="icon-close-small" @click="dismiss(index)" />
      <span>{{ notification.message }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import { useNotifications } from "../composables/useNotifications";

export default {
  setup() {
    const { notifications, dismiss } = useNotifications();

    return {
      notifications,
      dismiss,
    };
  },
};
</script>

<style scoped>
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
ul li.error {
  background-color: var(--color-error);
}
ul li.success {
  background-color: var(--color-success);
}
ul li.warning {
  background-color: var(--color-warning);
}

ul li span {
  padding-left: 0.5em;
}
ul li i {
  cursor: pointer;
}
</style>
