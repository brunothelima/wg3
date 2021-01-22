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

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import { useI18n } from '@src/composables'
import Form from '@src/components/Form/index.vue'
import Button from '@src/components/Button/index.vue'

import schema from './schema'
import messages from './messages.json'

export default defineComponent({
  components: {
    Form,
    Button
  },
  setup() {
    const { t } = useI18n()

    function onSuccess(data: FormSchema) {
      console.log('success', data.value)
    }

    function onError(data: FormSchema) {
      console.log('error', data.value)
    }

    return {
      t,
      schema,
      messages,
      onSuccess,
      onError
    }
  }
})
</script>

<style lang="scss" scoped>
h1 {
  color: var(--color-a-1);
}
</style>
