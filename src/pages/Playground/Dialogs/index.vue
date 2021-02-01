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
    <component :is="Examples.Notification" />
    <component :is="Examples.Confirmation" />
  </section>
</template>

<script lang="ts" setup>
import { glob2Components } from '@src/utils'
import { useI18n } from '@src/composables'

const Examples = glob2Components(
  import.meta.glob('./Examples/*.vue')
)

const { t } = useI18n()
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
