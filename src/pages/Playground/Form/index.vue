<i18n>
{
  "en": {
    "title": "Form inputs",
    "submit": "Submit"
  },
  "pt": {
    "title": "Formulário",
    "submit": "Enviar"
  }
}
</i18n>

<template>
  <section class="inputs">
    <h1>{{ t('title') }}</h1>
    <hr />
    <Form :schema="schema" :messages="messages" @error="onError" @success="onSuccess">
      <footer>
        <br>
        <Button :reverse="true" icon="icon-arrow-right" model="glassy">
          {{ t('submit') }}
        </Button>
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

function onSuccess(data: FormSchema) {
  console.log('success', data.value)
}

function onError(data: FormSchema) {
  console.log('error', data.value)
}
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-a-1);
}
.inputs .form::v-deep(.form__grid) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  @media screen and (max-width: #{$mobile-brakepoint}) {
    grid-template-columns: 1fr;   
  }
}
</style>
