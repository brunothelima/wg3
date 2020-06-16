<template>
  <div :class="['wg3', theme]">
    <Notifications />
    <div id="portal:modal"></div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { useTheme } from "./composables/useTheme";
import Notifications from "./components/Notifications.vue";

export default {
  components: {
    Notifications,
  },
  setup() {
    const { theme } = useTheme();

    return {
      theme,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/scss/wg3";
</style>
