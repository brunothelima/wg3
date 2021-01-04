<i18n>
{
  "en": {
    "heading": "Dialogs and notifications",
    "notificationButton": "Notefy me!",
    "notificationMessage": "Notification message"
  },
  "pt": {
    "heading": "Alertas e notificações",
    "notificationButton": "Notificação",
    "notificationMessage": "Mensagem de notificação"
  }
}
</i18n>

<template>
  <section class="dialogs">
    <h1>{{ t('heading') }}</h1>
    <hr />
    <NotificationsDemo />
    <ConfirmationDemo />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '/@src/composables/useI18n'
import ConfirmationDemo from './ConfirmationDemo.vue'
import NotificationsDemo from './NotificationsDemo.vue'

export default defineComponent({
  components: {
    ConfirmationDemo,
    NotificationsDemo
  },
  setup() {
    return useI18n()
  }
})
</script>

<style scoped>
h1 {
  color: var(--color-a-1);
}
.actions {
  display: flex;
  margin-bottom: 2em;
}
.actions .button {
  margin-right: 1em;
}
</style>
