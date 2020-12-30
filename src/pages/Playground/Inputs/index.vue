<i18n>
{
  "en": {
    "title": "Form inputs"
  },
  "pt": {
    "title": "Formulário"
  }
}
</i18n>

<template>
  <section class="inputs">
    <h1>{{ t('title') }}</h1>
    <hr />
    <Form :schema="schema" :messages="messages" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '/@composables/useI18n'
import Form from '/@components/Form/index.vue'
import schema from './schema'
import messages from './messages.json'

export default defineComponent({
  components: {
    Form
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
@import '../../../assets/scss/vars';

h1 {
  color: var(--color-a-1);
}
.inputs .form::v-deep(.form__grid) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  @media screen and (max-width: #{$tablet-brakepoint}) {
    display: block;
  }
}
</style>
