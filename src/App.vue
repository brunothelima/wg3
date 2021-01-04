<template>
  <div :class="['wg3', theme]">
    <Notifications />
    <div id="portal:dialog"></div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { useTheme } from '/@src/composables/useTheme'
import Notifications from '/@src/components/Notifications.vue'

export default {
  components: {
    Notifications
  },
  setup() {
    const { theme } = useTheme()

    return {
      theme
    }
  }
}
</script>
<style lang="scss">
@import './assets/scss/wg3';
</style>
