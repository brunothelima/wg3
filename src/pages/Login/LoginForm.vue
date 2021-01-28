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
    <img src="@src/assets/img/logo-vtc.svg" title="Widgrid" alt="Widgrid" />
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

<script lang="ts" setup>
import { defineAsyncComponent, defineComponent } from 'vue'
import { useI18n } from '@src/composables'
import router from '@src/router'

import schema from '@src/pages/Login/schema'
import messages from '@src/pages/Login/messages.json'

const Form = defineAsyncComponent(
  () => import('@src/components/Form/index.vue')
)
const Button = defineAsyncComponent(
  () => import('@src/components/Button/index.vue')
)

const { t } = useI18n()

function login() {
  router.push('/playground/colors')
}
</script>

<style scoped>
.login-form {
  width: 300px;
  padding: 2em;
  box-shadow: var(--box-shadow-light);
  border: 
    var(--card-border-width) 
    var(--card-border-style) 
    var(--color-x-8);
  border-radius: var(--card-border-radius);
  background-color: var(--color-x-10);
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
