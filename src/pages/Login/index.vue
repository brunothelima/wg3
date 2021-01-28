<template>
  <section class="login">
    <Settings />
    <LoginForm />
  </section>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const Settings = defineAsyncComponent(
  () => import('@src/components/Settings.vue')
)
const LoginForm = defineAsyncComponent(
  () => import('@src/pages/Login/LoginForm.vue')
)
</script>

<style scoped>
.login {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.settings {
  margin-bottom: 2em;
}
</style>