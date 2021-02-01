<i18n>
{
  "en": {
    "title": "Text Editor",
    "submit": "Submit"
  },
  "pt": {
    "title": "Editor de Texto",
    "submit": "Enviar"
  }
}
</i18n>

<template>
  <section class="inputs">
    <h1>{{ t('title') }}</h1>
    <hr />
    <Form :schema="schema" :messages="messages">
      <footer>
        <br />
        <Button :reverse="true" icon="icon-arrow-right" model="glassy">{{ t('submit') }}</Button>
      </footer>
    </Form>
  </section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'
import { useI18n } from '@src/composables'

import schema from './schema'
import messages from './messages.json'

const Form = defineAsyncComponent(
  () => import('@src/components/Form/index.vue')
)
const Button = defineAsyncComponent(
  () => import('@src/components/Button/index.vue')
)

const { t } = useI18n()
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-a-1);
}
</style>
