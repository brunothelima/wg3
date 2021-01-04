<template>
  <section class="login">
    <Settings />
    <LoginForm />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Settings from '/@src/components/Settings.vue'
import LoginForm from '/@src/views/Login/LoginForm.vue'

export default defineComponent({
  name: 'Login',
  components: {
    LoginForm,
    Settings
  }
})
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
