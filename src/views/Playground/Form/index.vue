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
    <Form :schema="schema" :messages="messages">
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

    return {
      t,
      schema,
      messages
    }
  }
})
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
