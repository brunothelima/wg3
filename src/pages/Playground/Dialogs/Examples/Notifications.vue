<i18n>
{
  "en": {
    "message": "Notification message",
    "infoButton": "Information",
    "warningButton": "Warning",
    "errorButton": "Error",
    "successButton": "Success"
  },
  "pt": {
    "message": "Mensagem de notificação",
    "infoButton": "Informação",
    "warningButton": "Alerta",
    "errorButton": "Erro",
    "successButton": "Sucesso"
  }
}
</i18n>

<template>
  <div class="notification-demo">
    <Button model="glassy" icon="icon-info" :reverse="true" @click="notify({ message: t('message') })">{{
      t('infoButton')
    }}</Button>
    <Button
      model="glassy"
      icon="icon-exclamation-mark"
      :reverse="true"
      @click="notify({ message: t('message'), status: 'warning' })"
      >{{ t('warningButton') }}</Button
    >
    <Button
      model="glassy"
      icon="icon-close"
      :reverse="true"
      @click="notify({ message: t('message'), status: 'error' })"
      >{{ t('errorButton') }}</Button
    >
    <Button
      model="glassy"
      icon="icon-thick-2px"
      :reverse="true"
      @click="notify({ message: t('message'), status: 'success' })"
      >{{ t('successButton') }}</Button
    >
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useI18n, useNotifications } from '@src/composables'

const Button = defineAsyncComponent(
  () => import('@src/components/Button/index.vue')
) 

const { t } = useI18n()
const { notify } = useNotifications()
</script>

<style scoped>
.notification-demo {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2em;
}
.button {
  margin-bottom: 1em;
  margin-right: 1em;
}
</style>
