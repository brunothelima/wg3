<i18n>
{
  "en": {
    "heading": "Modals and notificações",
    "notificationButton": "Notefy me!",
    "notificationMessage": "Notification message"
  },
  "pt": {
    "heading": "Modais e notificações",
    "notificationButton": "Notificação",
    "notificationMessage": "Mensagem de notificação"
  }
}
</i18n>

<template>
  <section class="modals">
    <h1>{{ t("heading") }}</h1>
    <hr />
    <NotificationsDemo />
    <ConfirmationDemo />
  </section>
</template>

<script lang="ts">
import { useI18n } from "../../../composables/useI18n";
import ConfirmationDemo from "./ConfirmationDemo.vue";
import NotificationsDemo from "./NotificationsDemo.vue";

export default {
  components: {
    ConfirmationDemo,
    NotificationsDemo,
  },
  setup() {
    const { t } = useI18n();

    return {
      t,
    };
  },
};
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
