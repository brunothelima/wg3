<i18n>
{
  "en": {
    "intro": "You must be logged in to continue",
    "password-loss": "Forgot my password",
    "submit": "Submit"
  },
  "pt": {
    "intro": "Você precisa estar logado para continuar",
    "password-loss": "Esqueci minha senha",
    "submit": "Enviar"
  }
}
</i18n>

<template>
  <div class="login-form">
    <img src="/@assets/img/logo-vtc.svg" alt="Widgrid" />
    <p>{{ t('intro') }}</p>
    <Form :schema="schema" :messages="messages" @success="login">
      <footer>
        <a href>{{ t('password-loss') }}</a>
        <Button :reverse="true" icon="icon-arrow-right" model="glassy">
          {{ t('submit') }}
        </Button>
      </footer>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from '/@wg3/composables/useI18n'
import router from '../../router'

import Form from '/@wg3/components/Form/index.vue'
import Button from '/@wg3/components/Button/index.vue'

import schema from '/@wg3/pages/Login/schema'
import messages from '/@wg3/pages/Login/messages.json'

export default defineComponent({
  components: {
    Form,
    Button
  },
  setup() {
    const { t } = useI18n()

    const login = () => {
      router.push('/playground/colors')
    }

    return {
      t,
      login,
      messages,
      schema
    }
  }
})
</script>

<style scoped>
.login-form {
  width: 300px;
  padding: 2em;
  border: var(--card-border-width) var(--card-border-style) var(--color-x-8);
  border-radius: var(--card-border-radius);
}
img {
  display: block;
  margin: 0 auto 2em;
}
p {
  margin-bottom: 3em;
  font-size: var(--font-size-xl);
  text-align: center;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
footer a {
  font-size: var(--font-size-xs);
}
</style>
